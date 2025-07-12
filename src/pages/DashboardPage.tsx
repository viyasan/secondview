
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Activity } from "lucide-react";
import { UploadsList } from "@/components/dashboard/UploadsList";

const DashboardPage = () => {
  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Good morning!</h1>
        <p className="text-muted-foreground">Here's your health overview for today</p>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-2 gap-6 h-[600px]">
        {/* Large Box - Left Side */}
        <Card className="col-span-1 row-span-2 p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              Health Overview
            </CardTitle>
            <CardDescription>
              Your latest health metrics and trends
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-8">
              <div className="text-6xl font-bold text-primary mb-2">85</div>
              <div className="text-lg text-muted-foreground">Health Score</div>
              <div className="text-sm text-green-600 mt-2">↗ +5 from last month</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Cardiovascular</span>
                <span className="text-sm text-green-600">Normal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Liver Function</span>
                <span className="text-sm text-green-600">Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Vitamin Levels</span>
                <span className="text-sm text-amber-600">Low</span>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link to="/upload" className="flex items-center justify-center">
                <Upload className="mr-2 h-4 w-4" />
                Upload New Test
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Top Right Box */}
        <Card className="col-span-1 p-4 rounded-3xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Upload
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Card className="p-4 rounded-2xl bg-muted/30 border-0">
              <div className="text-sm text-muted-foreground">Latest Test Results</div>
              <div className="text-lg font-semibold mt-1">Blood Panel - Complete</div>
              <div className="text-sm text-muted-foreground">2 days ago</div>
              <div className="flex gap-2 mt-3">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  32 markers analyzed
                </div>
                <div className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  6 categories
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>

        {/* Bottom Right Box */}
        <Card className="col-span-1 p-4 rounded-3xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Card className="p-3 rounded-2xl bg-muted/30 border-0">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">Cholesterol</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">180 mg/dL</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 rounded-2xl bg-muted/30 border-0">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">Blood Sugar</div>
                  <div className="text-xs text-muted-foreground">Fasting</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">95 mg/dL</div>
                  <div className="text-xs text-green-600">Normal</div>
                </div>
              </div>
            </Card>

            <Card className="p-3 rounded-2xl bg-muted/30 border-0">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">Vitamin D</div>
                  <div className="text-xs text-muted-foreground">25-OH</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">22 ng/mL</div>
                  <div className="text-xs text-amber-600">Low</div>
                </div>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>

      {/* Previous Uploads Section */}
      <div className="mt-8">
        <UploadsList />
      </div>
    </div>
  );
};

export default DashboardPage;
