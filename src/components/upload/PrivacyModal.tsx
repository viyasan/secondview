
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
  isUploading: boolean;
}

export const PrivacyModal = ({ open, onOpenChange, onAccept, isUploading }: PrivacyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onAccept} disabled={isUploading}>
            Accept & Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
