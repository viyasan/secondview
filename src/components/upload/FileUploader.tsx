
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { validateFile } from "@/utils/fileValidation";
import { uploadFileToStorage, createUploadRecord, processBloodTest, markAsProcessed } from "@/services/uploadService";
import { DropZone } from "./DropZone";
import { FilePreview } from "./FilePreview";
import { PrivacyModal } from "./PrivacyModal";

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
    const validation = validateFile(selectedFile);
    
    if (!validation.isValid) {
      toast({
        title: "Invalid file",
        description: validation.errors[0],
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
      // Upload file to storage
      const filePath = await uploadFileToStorage(file, user.id);
      
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise(r => setTimeout(r, 200));
      }
      
      // Create database entry for upload
      const uploadData = await createUploadRecord(user.id, filePath);
      
      // Process the file with OpenAI
      await processBloodTest(uploadData.id);
      
      // Mark as processed
      await markAsProcessed(uploadData.id);
      
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
        <DropZone
          isDragOver={isDragOver}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onFileChange={onFileChange}
          onBrowseClick={handleBrowseClick}
        />
      ) : (
        <FilePreview
          file={file}
          onRemove={removeFile}
          onUpload={() => setShowPrivacyModal(true)}
          isUploading={isUploading}
          progress={progress}
        />
      )}

      <PrivacyModal
        open={showPrivacyModal}
        onOpenChange={setShowPrivacyModal}
        onAccept={uploadFile}
        isUploading={isUploading}
      />
    </div>
  );
};
