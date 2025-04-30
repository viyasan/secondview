
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Upload, 
  Shield, 
  FileText, 
  BarChart,
  User,
  CheckCircle,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-600 mb-4 self-start">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
                Health Analytics Simplified
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none max-w-[800px]">
                Understand Your <span className="text-green-600">Blood Tests</span> With AI
              </h1>
              
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                Upload your blood test results and get instant, easy-to-understand insights. Our AI explains what your results mean in plain language.
              </p>
              
              <div className="flex flex-col gap-3 min-[400px]:flex-row mt-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link to={user ? "/upload" : "/signup"}>
                    <Upload className="mr-2 h-4 w-4" />
                    {user ? "Upload Results" : "Get Started Free"}
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-green-200 hover:bg-green-50">
                  <Link to="#how-it-works">
                    Learn How It Works
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex -space-x-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100 text-green-600">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-100 text-green-600">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Trusted by 10,000+</strong> health-conscious individuals
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-cyan-600 opacity-30 blur-lg"></div>
                <div className="relative rounded-lg overflow-hidden border bg-white p-8 shadow-xl">
                  <div className="flex flex-col items-center space-y-2">
                    <Activity className="h-16 w-16 text-green-600 mb-4" />
                    <div className="flex items-center justify-between w-full border-b pb-2">
                      <span className="font-semibold">Cholesterol (Total)</span>
                      <span className="text-green-600 font-medium">198 mg/dL</span>
                    </div>
                    <div className="flex items-center justify-between w-full border-b pb-2">
                      <span className="font-semibold">HDL</span>
                      <span className="text-green-600 font-medium">55 mg/dL</span>
                    </div>
                    <div className="flex items-center justify-between w-full border-b pb-2">
                      <span className="font-semibold">LDL</span>
                      <span className="text-amber-500 font-medium">142 mg/dL</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-semibold">Triglycerides</span>
                      <span className="text-green-600 font-medium">95 mg/dL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-600 mb-2">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              How VitalScan Works
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              Get insights on your blood test in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-green-100 bg-white">
              <CardContent className="flex flex-col items-center space-y-4 text-center pt-6">
                <div className="rounded-full bg-green-50 p-4">
                  <Upload className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">1. Upload Results</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Securely upload your blood test PDF. Your data is encrypted and protected.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 bg-white">
              <CardContent className="flex flex-col items-center space-y-4 text-center pt-6">
                <div className="rounded-full bg-green-50 p-4">
                  <BarChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">2. AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our medical AI analyzes your results against clinically validated reference ranges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100 bg-white">
              <CardContent className="flex flex-col items-center space-y-4 text-center pt-6">
                <div className="rounded-full bg-green-50 p-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">3. Get Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive easy-to-understand explanations about your health markers and what they mean.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm text-green-600 mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Thousands
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed dark:text-gray-400">
              See what others are saying about their experience with VitalScan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Healthcare Professional</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "VitalScan made it easy for me to understand my yearly lab results. The explanations are clear and I finally understand what my cholesterol numbers actually mean!"
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As someone who tracks my health metrics religiously, this app has been a game changer. The AI analysis helps me spot trends I would have missed."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lisa Rodriguez</h4>
                    <p className="text-sm text-gray-500">Fitness Trainer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I recommend VitalScan to all my clients. It's an excellent tool for monitoring health progress and understanding how lifestyle changes affect blood markers."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg bg-green-600 px-6 py-12 md:px-12 shadow-lg">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Ready to Understand Your Health?
              </h2>
              <p className="max-w-[600px] text-green-50 md:text-xl/relaxed mx-auto mb-8">
                Upload your blood test results now and get detailed insights within minutes. Take control of your health journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <Link to={user ? "/upload" : "/signup"}>
                    <Upload className="mr-2 h-4 w-4" />
                    {user ? "Upload Results" : "Get Started Free"}
                  </Link>
                </Button>
                {!user && (
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-green-500">
                    <Link to="/login">
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
