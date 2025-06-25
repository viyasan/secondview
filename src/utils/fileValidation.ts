
export const validateFile = (file: File) => {
  const errors: string[] = [];
  
  // Check file type
  if (file.type !== "application/pdf") {
    errors.push("Please upload a PDF file");
  }
  
  // Check file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    errors.push("Please upload a file smaller than 10MB");
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
