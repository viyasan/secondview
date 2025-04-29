
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { 
  FileText, 
  Loader2, 
  ChevronRight, 
  AlertTriangle,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

type Upload = {
  id: string;
  created_at: string;
  processed: boolean;
  expires_at: string;
};

export const UploadsList = () => {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("uploads")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setUploads(data || []);
      } catch (error: any) {
        console.error("Error fetching uploads:", error);
        setError(error.message || "Failed to load uploads");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUploads();

    // Set up real-time subscription
    const subscription = supabase
      .channel('public:uploads')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'uploads' },
        fetchUploads
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-green-600" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (uploads.length === 0) {
    return (
      <Card className="text-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <FileText className="h-16 w-16 text-gray-300" />
          <CardTitle>No uploads yet</CardTitle>
          <CardDescription>
            Upload your first blood test to get insights
          </CardDescription>
          <Button asChild>
            <Link to="/upload">Upload Blood Test</Link>
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Your Uploads</h2>
        <Button variant="outline" asChild>
          <Link to="/upload">Upload New</Link>
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {uploads.map((upload) => {
          const expiresInDays = Math.ceil(
            (new Date(upload.expires_at).getTime() - new Date().getTime()) / 
            (1000 * 60 * 60 * 24)
          );
          
          return (
            <Card key={upload.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Blood Test Result
                </CardTitle>
                <CardDescription>
                  Uploaded {format(new Date(upload.created_at), "MMM dd, yyyy")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500">Status:</span>
                    <span className={upload.processed ? "text-green-600" : "text-amber-600"}>
                      {upload.processed ? "Processed" : "Processing..."}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Expires in:</span>
                    <span>{expiresInDays} days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-3">
                {upload.processed ? (
                  <Button variant="default" asChild className="w-full">
                    <Link to={`/results/${upload.id}`} className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      View Results
                      <ChevronRight className="ml-auto h-5 w-5" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
