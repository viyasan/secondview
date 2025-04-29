
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Upload, Shield } from "lucide-react";

const HomePage = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Understand Your Blood Tests with AI
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload your blood test results and get instant insights. Our AI helps you understand what your results mean in plain language.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Your Results
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden border bg-green-50 p-8">
                <Activity className="h-32 w-32 text-green-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get insights on your blood test in three simple steps
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <Upload className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">1. Upload Your Results</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Upload your blood test results in PDF format securely.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <Activity className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">2. AI Analysis</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI system analyzes your results against reference ranges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">3. Get Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Receive easy-to-understand insights about your health markers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Understand Your Health?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Upload your blood test results now and get insights within minutes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Your Results
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
