
import { Upload, Search, BarChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How VitalScan Works</h1>
        <p className="text-xl text-muted-foreground mb-8">
          From upload to insights in just minutes — discover how our AI analyzes your blood test results
        </p>
      </section>

      {/* Process Steps */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-12">The Process</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                1
              </div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload Your Results</h3>
                  <p className="text-muted-foreground">
                    Simply upload your blood test PDF through our secure platform. Your data remains private and protected.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                2
              </div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI extracts and categorizes your test values, comparing them against clinical reference ranges.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                3
              </div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <BarChart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Receive Insights</h3>
                  <p className="text-muted-foreground">
                    Get a clear breakdown of your results with visual indicators for normal and abnormal values, plus plain-English explanations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center">
                4
              </div>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Take Action</h3>
                  <p className="text-muted-foreground">
                    Share results with your doctor or use them as a reference for lifestyle adjustments. Your data is always accessible in your dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Ranges */}
      <section className="bg-gray-50 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Understanding Reference Ranges</h2>
          <p className="text-lg mb-6">
            Blood test results include reference ranges — the span of values considered normal for each biomarker. These ranges can vary based on age, sex, and testing laboratory.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">How We Interpret Your Values:</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="font-medium">Normal</span>
                <span className="text-muted-foreground ml-2">Within the reference range</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <span className="font-medium">Borderline</span>
                <span className="text-muted-foreground ml-2">Near the edges of the reference range</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="font-medium">Abnormal</span>
                <span className="text-muted-foreground ml-2">Outside the reference range</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Our AI uses these ranges to categorize your results, but always consult with a healthcare provider for the most accurate interpretation of your specific health situation.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Accuracy */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">Security & Medical Relevance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Privacy & Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>End-to-end encryption for all uploaded documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Files are automatically deleted after 7 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Your data is never shared with third parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>GDPR and HIPAA compliant practices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Medical Relevance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Information based on peer-reviewed medical research</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Not a replacement for medical advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Designed as a supplement to discussions with your healthcare provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span>Regular updates based on the latest medical guidelines</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Try VitalScan?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Upload your blood test results today and get instant insights.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/upload">Upload Your Results</Link>
          </Button>
          {!true && ( // Replace with actual auth check
            <Button asChild variant="outline" size="lg">
              <Link to="/signup">Create an Account</Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
