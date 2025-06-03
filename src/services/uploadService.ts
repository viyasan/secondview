
import { supabase } from "@/integrations/supabase/client";

export const uploadFileToStorage = async (file: File, userId: string) => {
  // Create a unique file name
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/${Date.now()}.${fileExt}`;
  
  // Upload file to Supabase Storage
  const { error: storageError } = await supabase.storage
    .from('blood-test-uploads')
    .upload(filePath, file, {
      upsert: false,
    });
  
  if (storageError) throw storageError;
  
  return filePath;
};

export const createUploadRecord = async (userId: string, filePath: string) => {
  const { data: uploadData, error: uploadError } = await supabase
    .from('uploads')
    .insert({
      user_id: userId,
      file_path: filePath,
    })
    .select('id')
    .single();
  
  if (uploadError) throw uploadError;
  
  return uploadData;
};

export const processBloodTest = async (uploadId: string) => {
  const { data, error } = await supabase.functions.invoke('analyze-blood-test', {
    body: { 
      bloodTestData: { 
        uploadId: uploadId,
        // This is simplified - in a real app we'd extract data from the PDF
        // For demo purposes, we're sending mock data
        markers: [
          { name: "Hemoglobin", value: "14.5", unit: "g/dL", referenceRange: "13.5-17.5" },
          { name: "White Blood Cells", value: "10.8", unit: "K/uL", referenceRange: "4.5-11.0" },
          { name: "Platelets", value: "140", unit: "K/uL", referenceRange: "150-450" },
          { name: "Total Cholesterol", value: "240", unit: "mg/dL", referenceRange: "125-200" },
        ]
      }
    },
  });
  
  if (error) throw error;
  
  return data;
};

export const markAsProcessed = async (uploadId: string) => {
  await supabase
    .from('uploads')
    .update({ processed: true })
    .eq('id', uploadId);
};
