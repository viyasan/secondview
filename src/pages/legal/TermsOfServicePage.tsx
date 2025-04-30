
import React from "react";
import { Separator } from "@/components/ui/separator";

const TermsOfServicePage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <Separator className="mb-6" />
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            These Terms of Service govern your use of the VitalScan platform. By using our service, 
            you agree to these terms. Please read them carefully.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Using Our Services</h2>
          <p className="text-muted-foreground">
            You must follow any policies made available to you within the Services. Don't misuse our 
            Services. For example, don't interfere with our Services or try to access them using a 
            method other than the interface and the instructions that we provide.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Your VitalScan Account</h2>
          <p className="text-muted-foreground">
            You may need a VitalScan Account in order to use some of our Services. You are responsible 
            for maintaining the security of your account and password. VitalScan cannot and will not be 
            liable for any loss or damage from your failure to comply with this security obligation.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Medical Disclaimer</h2>
          <p className="text-muted-foreground">
            VitalScan is not a medical device and is not intended to diagnose, treat, cure, or prevent 
            any disease. The information provided by VitalScan is for informational purposes only and 
            should not be considered medical advice. Always consult with a qualified healthcare provider 
            about your specific health needs.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Content in the Services</h2>
          <p className="text-muted-foreground">
            You retain ownership of any intellectual property rights that you hold in content that you 
            submit to VitalScan. By uploading content, you give VitalScan a worldwide license to use, 
            host, store, and create derivative works of your content solely for the purpose of providing 
            you with the Services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Modifying and Terminating our Services</h2>
          <p className="text-muted-foreground">
            We are constantly changing and improving our Services. We may add or remove functionalities 
            or features, and we may suspend or stop a Service altogether. You can stop using our Services 
            at any time, although we'll be sorry to see you go. VitalScan may also stop providing Services 
            to you, or add or create new limits to our Services at any time.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Liability for our Services</h2>
          <p className="text-muted-foreground">
            To the extent permitted by law, the total liability of VitalScan, and its suppliers and 
            distributors, for any claims under these terms, including for any implied warranties, is 
            limited to the amount you paid us to use the Services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Business Uses of our Services</h2>
          <p className="text-muted-foreground">
            If you are using our Services on behalf of a business, that business accepts these terms. 
            It will hold harmless and indemnify VitalScan and its affiliates, officers, agents, and 
            employees from any claim, suit or action arising from or related to the use of the Services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">About these Terms</h2>
          <p className="text-muted-foreground">
            We may modify these terms or any additional terms that apply to a Service. You should look 
            at the terms regularly. Changes will not apply retroactively and will become effective no 
            sooner than fourteen days after they are posted.
          </p>
        </section>
        
        <p className="text-sm text-muted-foreground mt-8">Last Updated: April 30, 2025</p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
