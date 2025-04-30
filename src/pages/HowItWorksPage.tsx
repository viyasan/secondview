
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, BookOpen, ShieldCheck, CircleCheck } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - VitalScan</title>
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 md:py-16 mb-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              How VitalScan Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turning your blood test results into clear, actionable insights in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple four-step process makes it easy to get insights from your blood test results.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline connector (visible on desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 border-background">
                  <Upload className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Upload</h3>
                <p className="text-muted-foreground">
                  Securely upload your PDF blood test results through our encrypted platform.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 border-background">
                  <svg className="h-7 w-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" />
                    <path d="M8 16l-1.41-1.41M12 16l-3.3-3.3M8 16h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your results and compares them to clinical reference ranges.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 border-background">
                  <BookOpen className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Insight Summary</h3>
                <p className="text-muted-foreground">
                  Receive easy-to-understand insights and explanations about your health markers.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 border-background">
                  <CircleCheck className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Act on Results</h3>
                <p className="text-muted-foreground">
                  Share insights with your doctor or use them to make informed health decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Ranges Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Understanding Reference Ranges</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Every health marker in your blood test has a clinically validated reference range that indicates what's considered normal.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Our AI compares your values against these ranges, identifies abnormalities, and explains what they might mean for your health in plain language.
              </p>
              <p className="text-lg leading-relaxed">
                We follow standards set by major clinical laboratories and constantly update our database to match the latest medical guidelines.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                  <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div className="w-1/5 bg-red-400"></div>
                      <div className="w-3/5 bg-green-400"></div>
                      <div className="w-1/5 bg-red-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>Low</span>
                    <span>Normal Range</span>
                    <span>High</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cholesterol</span>
                    <span>125-200 mg/dL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Glucose</span>
                    <span>70-99 mg/dL</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hemoglobin</span>
                    <span>13.5-17.5 g/dL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Accuracy Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Security & Accuracy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We prioritize your privacy and the accuracy of our insights above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Privacy Protection</h3>
                  <p className="text-muted-foreground">
                    Your data is encrypted, securely stored, and automatically deleted after 7 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Medical Relevance</h3>
                  <p className="text-muted-foreground">
                    Our insights are based on peer-reviewed medical literature and clinical guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Complementary Care</h3>
                  <p className="text-muted-foreground">
                    We don't replace your doctor—we provide additional information to enhance your healthcare journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Get Your Health Insights Now</h2>
            <p className="text-lg text-muted-foreground">
              Upload your blood test results and receive AI-powered insights within minutes.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              size="lg"
              asChild
            >
              <Link to="/upload">Upload Your Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
