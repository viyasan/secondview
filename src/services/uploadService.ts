
import { supabase } from "@/integrations/supabase/client";

export const uploadFileToStorage = async (file: File, userId: string) => {
  // Create a unique file name
  const fileExt = file.name.split('.').pop();
  const filePath = `${userId}/${Date.now()}.${fileExt}`;
  
  console.log('Uploading file to storage:', filePath);
  
  // Upload file to Supabase Storage
  const { error: storageError } = await supabase.storage
    .from('blood-test-uploads')
    .upload(filePath, file, {
      upsert: false,
    });
  
  if (storageError) {
    console.error('Storage upload error:', storageError);
    throw storageError;
  }
  
  console.log('File uploaded successfully to storage');
  return filePath;
};

export const createUploadRecord = async (userId: string, filePath: string) => {
  console.log('Creating upload record for user:', userId);
  
  const { data: uploadData, error: uploadError } = await supabase
    .from('uploads')
    .insert({
      user_id: userId,
      file_path: filePath,
    })
    .select('id')
    .single();
  
  if (uploadError) {
    console.error('Upload record creation error:', uploadError);
    throw uploadError;
  }
  
  console.log('Upload record created with ID:', uploadData.id);
  return uploadData;
};

export const processBloodTest = async (uploadId: string) => {
  console.log('Starting blood test processing for upload ID:', uploadId);
  
  // Call the AI function with mock blood test data
  const { data, error } = await supabase.functions.invoke('analyze-blood-test', {
    body: { 
      bloodTestData: { 
        uploadId: uploadId,
        // Mock data for demonstration - in a real app this would come from PDF parsing
        markers: [
          { name: "Hemoglobin", value: "14.5", unit: "g/dL", referenceRange: "13.5-17.5" },
          { name: "White Blood Cells", value: "10.8", unit: "K/uL", referenceRange: "4.5-11.0" },
          { name: "Platelets", value: "140", unit: "K/uL", referenceRange: "150-450" },
          { name: "Total Cholesterol", value: "240", unit: "mg/dL", referenceRange: "125-200" },
          { name: "HDL Cholesterol", value: "45", unit: "mg/dL", referenceRange: "40-60" },
          { name: "LDL Cholesterol", value: "150", unit: "mg/dL", referenceRange: "100-129" },
          { name: "Glucose", value: "110", unit: "mg/dL", referenceRange: "70-99" },
          { name: "Creatinine", value: "1.2", unit: "mg/dL", referenceRange: "0.7-1.3" },
        ]
      }
    },
  });
  
  if (error) {
    console.error('AI function error:', error);
    throw error;
  }
  
  console.log('AI function response received:', data);
  
  // Parse the AI analysis and save results to database
  await parseAndSaveResults(uploadId, data?.analysis || 'Mock analysis');
  
  return data;
};

const parseAndSaveResults = async (uploadId: string, analysis: string) => {
  console.log('Parsing and saving results for upload ID:', uploadId);
  
  // Parse the AI analysis - this is a simplified parser
  // In a real app, you'd want more robust parsing
  const mockResults = [
    {
      upload_id: uploadId,
      marker_name: "Hemoglobin",
      value: "14.5",
      unit: "g/dL",
      reference_range: "13.5-17.5",
      status: "normal",
      category: "Hematology",
      insight: "Hemoglobin level is within normal range, indicating good oxygen-carrying capacity."
    },
    {
      upload_id: uploadId,
      marker_name: "White Blood Cells",
      value: "10.8",
      unit: "K/uL",
      reference_range: "4.5-11.0",
      status: "normal",
      category: "Hematology",
      insight: "White blood cell count is at the upper end of normal range, which is acceptable."
    },
    {
      upload_id: uploadId,
      marker_name: "Platelets",
      value: "140",
      unit: "K/uL",
      reference_range: "150-450",
      status: "low",
      category: "Hematology",
      insight: "Platelet count is slightly below normal range. Consider monitoring and consulting with a healthcare provider."
    },
    {
      upload_id: uploadId,
      marker_name: "Total Cholesterol",
      value: "240",
      unit: "mg/dL",
      reference_range: "125-200",
      status: "high",
      category: "Cardiovascular",
      insight: "Total cholesterol is elevated. Consider dietary changes and lifestyle modifications."
    },
    {
      upload_id: uploadId,
      marker_name: "HDL Cholesterol",
      value: "45",
      unit: "mg/dL",
      reference_range: "40-60",
      status: "normal",
      category: "Cardiovascular",
      insight: "HDL cholesterol is within normal range, which is good for heart health."
    },
    {
      upload_id: uploadId,
      marker_name: "LDL Cholesterol",
      value: "150",
      unit: "mg/dL",
      reference_range: "100-129",
      status: "high",
      category: "Cardiovascular",
      insight: "LDL cholesterol is elevated. This increases cardiovascular risk and should be addressed."
    },
    {
      upload_id: uploadId,
      marker_name: "Glucose",
      value: "110",
      unit: "mg/dL",
      reference_range: "70-99",
      status: "high",
      category: "Metabolic",
      insight: "Glucose is slightly elevated, indicating potential pre-diabetes. Monitor closely."
    },
    {
      upload_id: uploadId,
      marker_name: "Creatinine",
      value: "1.2",
      unit: "mg/dL",
      reference_range: "0.7-1.3",
      status: "normal",
      category: "Kidney Function",
      insight: "Creatinine level is within normal range, indicating good kidney function."
    }
  ];

  console.log('Inserting mock results:', mockResults.length, 'records');

  // Insert results into the database
  const { data: insertedData, error: insertError } = await supabase
    .from('results')
    .insert(mockResults)
    .select();

  if (insertError) {
    console.error('Error saving results:', insertError);
    throw insertError;
  }

  console.log('Results saved successfully for upload:', uploadId, 'Inserted records:', insertedData?.length);
};

export const markAsProcessed = async (uploadId: string) => {
  console.log('Marking upload as processed:', uploadId);
  
  const { error } = await supabase
    .from('uploads')
    .update({ processed: true })
    .eq('id', uploadId);
    
  if (error) {
    console.error('Error marking as processed:', error);
    throw error;
  }
  
  console.log('Upload marked as processed successfully');
};
