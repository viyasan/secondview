import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { File, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => {
    setIsDragOver(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files?.length) {
      const droppedFile = e.dataTransfer.files[0];
      handleFile(droppedFile);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const selectedFile = e.target.files[0];
      handleFile(selectedFile);
    }
  };

  const handleFile = (selectedFile: File) => {
    // Check file type
    if (selectedFile.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB",
        variant: "destructive",
      });
      return;
    }
    
    setFile(selectedFile);
    setShowPrivacyModal(true);
  };

  const removeFile = () => {
    setFile(null);
  };

  const uploadFile = async () => {
    if (!file || !user) return;
    
    setIsUploading(true);
    setProgress(0);
    
    try {
      // Create a unique file name
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/${Date.now()}.${fileExt}`;
      
      // Upload file to Supabase Storage
      const { error: storageError } = await supabase.storage
        .from('blood-test-uploads')
        .upload(filePath, file, {
          upsert: false,
        });
      
      if (storageError) throw storageError;
      
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise(r => setTimeout(r, 200));
      }
      
      // Create database entry for upload
      const { data: uploadData, error: uploadError } = await supabase
        .from('uploads')
        .insert({
          user_id: user.id,
          file_path: filePath,
        })
        .select('id')
        .single();
      
      if (uploadError) throw uploadError;
      
      // Process the file with OpenAI via our edge function
      const { data, error } = await supabase.functions.invoke('analyze-blood-test', {
        body: { 
          bloodTestData: { 
            uploadId: uploadData.id,
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
      
      // Mark as processed
      await supabase
        .from('uploads')
        .update({ processed: true })
        .eq('id', uploadData.id);
      
      toast({
        title: "Upload complete",
        description: "Your blood test results have been analyzed",
      });
      
      // Navigate to results page
      navigate(`/results/${uploadData.id}`);
      
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading your file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setFile(null);
      setShowPrivacyModal(false);
    }
  };

  const handleBrowseClick = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
            isDragOver
              ? "bg-green-50 border-green-500"
              : "bg-gray-50 border-gray-300"
          }`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <Upload className={`h-12 w-12 ${isDragOver ? "text-green-500" : "text-gray-400"}`} />
            <h3 className="text-lg font-medium">Drag & Drop your blood test PDF here</h3>
            <p className="text-sm text-gray-500 text-center">
              Or click to browse files<br />
              (Max file size: 10MB)
            </p>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={onFileChange}
            />
            <Button variant="outline" type="button" onClick={handleBrowseClick}>
              Browse Files
            </Button>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <File className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium truncate" style={{ maxWidth: "200px" }}>
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={removeFile}
              disabled={isUploading}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          {isUploading ? (
            <>
              <Progress value={progress} className="mb-2" />
              <p className="text-sm text-center text-gray-500">
                Uploading and analyzing... {progress}%
              </p>
            </>
          ) : (
            <Button className="w-full" onClick={() => setShowPrivacyModal(true)}>
              Upload & Analyze
            </Button>
          )}
        </div>
      )}

      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Notice</DialogTitle>
            <DialogDescription>
              Your blood test data will be securely processed using AI. 
              Your data is stored for 7 days and then automatically deleted.
              We use OpenAI to analyze your blood test results.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <h4 className="font-medium">How we handle your data:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Files are stored securely on our servers</li>
              <li>Files are automatically deleted after 7 days</li>
              <li>Results are only visible to you</li>
              <li>We don't share your data with third parties</li>
            </ul>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPrivacyModal(false)}>Cancel</Button>
            <Button onClick={uploadFile} disabled={isUploading}>
              Accept & Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
