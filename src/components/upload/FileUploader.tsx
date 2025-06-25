import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { File, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { validateFile } from "@/utils/fileValidation";
import {
  uploadFileToStorage,
  createUploadRecord,
  processBloodTest,
  markAsProcessed,
} from "@/services/uploadService";
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
      toast.error("Invalid file type", {
        description: "Please upload a PDF file",
      });
      return;
    }

    // Check file size (max 10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      toast.error("File too large", {
        description: "Please upload a file smaller than 10MB",
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
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Date.now()}.${fileExt}`;

      // Upload file to Supabase Storage
      const { error: storageError } = await supabase.storage
        .from("blood-test-uploads")
        .upload(filePath, file, {
          upsert: false,
        });

      if (storageError) throw storageError;

      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        await new Promise((r) => setTimeout(r, 200));
      }

      // Create database entry for upload
      const { data: uploadData, error: uploadError } = await supabase
        .from("uploads")
        .insert({
          user_id: user.id,
          file_path: filePath,
        })
        .select("id")
        .single();

      if (uploadError) throw uploadError;

      // Process the file with OpenAI via our edge function
      const { data, error } = await supabase.functions.invoke(
        "analyze-blood-test",
        {
          body: {
            bloodTestData: {
              uploadId: uploadData.id,
              // This is simplified - in a real app we'd extract data from the PDF
              // For demo purposes, we're sending mock data
              markers: [
                {
                  name: "Hemoglobin",
                  value: "14.5",
                  unit: "g/dL",
                  referenceRange: "13.5-17.5",
                },
                {
                  name: "White Blood Cells",
                  value: "10.8",
                  unit: "K/uL",
                  referenceRange: "4.5-11.0",
                },
                {
                  name: "Platelets",
                  value: "140",
                  unit: "K/uL",
                  referenceRange: "150-450",
                },
                {
                  name: "Total Cholesterol",
                  value: "240",
                  unit: "mg/dL",
                  referenceRange: "125-200",
                },
              ],
            },
          },
        }
      );

      if (error) throw error;

      // Mark as processed
      await supabase
        .from("uploads")
        .update({ processed: true })
        .eq("id", uploadData.id);

      toast.success("Upload complete", {
        description: "Your blood test results have been analyzed",
      });

      // Navigate to results page
      navigate(`/results/${uploadData.id}`);
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error("Upload failed", {
        description: error.message || "There was an error uploading your file",
      });
    } finally {
      setIsUploading(false);
      setFile(null);
      setShowPrivacyModal(false);
    }
  };

  const handleBrowseClick = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
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
            <Upload
              className={`h-12 w-12 ${
                isDragOver ? "text-green-500" : "text-gray-400"
              }`}
            />
            <h3 className="text-lg font-medium">
              Drag & Drop your blood test PDF here
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Or click to browse files
              <br />
              (Max file size: 10MB)
            </p>
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={onFileChange}
              />
              <Button variant="outline" type="button">
                Browse Files
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <File className="h-8 w-8 text-green-500" />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              disabled={isUploading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {isUploading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-500 text-center">
                Uploading... {progress}%
              </p>
            </div>
          )}

          {!isUploading && (
            <Button
              onClick={() => setShowPrivacyModal(true)}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!file}
            >
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
              Your blood test results will be processed securely and
              automatically deleted after 7 days. We do not store or share your
              personal health information.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowPrivacyModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={uploadFile} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Continue"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
