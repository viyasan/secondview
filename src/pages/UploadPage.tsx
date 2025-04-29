
import { FileUploader } from "@/components/upload/FileUploader";

const UploadPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Upload Blood Test Results</h1>
      <FileUploader />
    </div>
  );
};

export default UploadPage;
