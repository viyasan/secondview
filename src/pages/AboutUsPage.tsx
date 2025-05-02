
import { Activity, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About SecondView</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your trusted partner for blood test insights and health monitoring
        </p>
        <div className="flex justify-center mb-6">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-green-100 rounded-full flex items-center justify-center">
              <Activity className="h-20 w-20 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            The need for a second look at your results should be readily available and quick. 
            Just as doctors refer you to specialists for detailed analysis, you can rely on 
            SecondView for another round of reassurance and review.
          </p>
          <p className="text-lg">
            We believe that understanding your health data shouldn't be complicated. 
            Our AI-powered platform provides instant, easy-to-understand insights about 
            your blood test results, helping you make informed decisions about your health.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Your data is private and secure. We never share your personal information without permission.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Clinical Accuracy</h3>
              <p className="text-muted-foreground">
                Our AI is trained on clinical data and medical research to provide relevant insights.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Health Empowerment</h3>
              <p className="text-muted-foreground">
                We believe everyone deserves to understand their health data without medical jargon.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Upload your blood test results and receive AI-powered insights in minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link to="/upload">Upload Your Results</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
