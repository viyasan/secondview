import React from "react";
import { Separator } from "@/components/ui/separator";
const PrivacyPolicyPage = () => {
  return <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <Separator className="mb-6" />
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">At SecondView, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-muted-foreground mb-2">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Personal information (name, email address, etc.) when you create an account</li>
            <li>Health data from blood test results you upload</li>
            <li>Communications you have with us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-2">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Providing and maintaining our service</li>
            <li>Analyzing your blood test results</li>
            <li>Improving our services</li>
            <li>Communicating with you</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% 
            secure, so we cannot guarantee absolute security.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
          <p className="text-muted-foreground">
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy. Blood test data is automatically deleted from our 
            servers after 7 days.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-muted-foreground mb-2">
            You have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your personal information</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at privacy@vitalscan.com.
          </p>
        </section>
        
        <p className="text-sm text-muted-foreground mt-8">Last Updated: April 30, 2025</p>
      </div>
    </div>;
};
export default PrivacyPolicyPage;