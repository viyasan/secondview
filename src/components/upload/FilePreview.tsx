
import { File, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  onUpload: () => void;
  isUploading: boolean;
  progress: number;
}

export const FilePreview = ({ file, onRemove, onUpload, isUploading, progress }: FilePreviewProps) => {
  return (
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
          onClick={onRemove}
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
        <Button className="w-full" onClick={onUpload}>
          Upload & Analyze
        </Button>
      )}
    </div>
  );
};
