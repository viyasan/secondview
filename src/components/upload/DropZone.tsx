
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DropZoneProps {
  isDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBrowseClick: () => void;
}

export const DropZone = ({
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileChange,
  onBrowseClick
}: DropZoneProps) => {
  return (
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
        <Button variant="outline" type="button" onClick={onBrowseClick}>
          Browse Files
        </Button>
      </div>
    </div>
  );
};
