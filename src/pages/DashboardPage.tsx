
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Activity } from "lucide-react";
import { UploadsList } from "@/components/dashboard/UploadsList";

const DashboardPage = () => {
  return (
    <div className="py-8 space-y-8">
      {/* Hero CTA Section */}
      <div className="text-center">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <Upload className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-green-800">
              Upload Your Blood Test Results
            </CardTitle>
            <CardDescription className="text-lg text-green-700">
              Get AI-powered insights about your health in minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              <Link to="/upload" className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Upload Blood Test
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* How It Works Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">1. Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Upload your PDF blood test results securely
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg">2. Analyze</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Our AI analyzes your results and categorizes markers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-lg">3. Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center">
              Get easy-to-understand health insights and recommendations
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Previous Uploads Section */}
      <UploadsList />
    </div>
  );
};

export default DashboardPage;
