
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShieldCheck, Heart, User, BookOpen } from "lucide-react";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - VitalScan</title>
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 md:py-16 mb-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              The Human Touch Behind Our AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VitalScan combines medical expertise with advanced AI to provide insights that matter.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-3xl h-64 md:h-80 rounded-lg overflow-hidden">
              <img 
                src="/images/doctor-ai-collaboration.jpg" 
                alt="Doctor and AI collaboration" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Vision</h2>
            <p className="text-lg mb-6 leading-relaxed">
              The need for a second look at your results should be readily available and quick. Just as doctors refer you to specialists for detailed analysis, you can rely on VitalScan for another round of reassurance and review.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We believe that understanding your health data shouldn't be complicated or time-consuming. Our AI-powered platform provides you with insights that are easy to understand and actionable.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose VitalScan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings together expertise in medicine, data science, and user experience to create a platform that truly serves your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Trusted Analysis</h3>
                  <p className="text-muted-foreground">
                    Our AI is trained on validated medical datasets and follows clinical guidelines to ensure accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Patient-Centered</h3>
                  <p className="text-muted-foreground">
                    We design every feature with your needs and peace of mind as our top priority.
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
                  <h3 className="text-xl font-medium">Expert Collaboration</h3>
                  <p className="text-muted-foreground">
                    We work with healthcare professionals to continuously improve our insights and recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground">
              Upload your blood test results today and get instant, AI-powered insights to help you understand your health better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                asChild
              >
                <Link to="/upload">Upload Results</Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
