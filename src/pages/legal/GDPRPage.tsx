
import React from "react";
import { Separator } from "@/components/ui/separator";

const GDPRPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">GDPR Compliance</h1>
      <Separator className="mb-6" />
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            This page explains how VitalScan complies with the General Data Protection Regulation 
            (GDPR) and outlines your rights under this regulation if you are a resident of the 
            European Economic Area (EEA).
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">What is GDPR?</h2>
          <p className="text-muted-foreground">
            The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection 
            and privacy for all individuals within the European Union and the European Economic Area. 
            It addresses the export of personal data outside these areas and aims to give control to 
            individuals over their personal data.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Your Rights Under GDPR</h2>
          <p className="text-muted-foreground mb-3">
            If you are a resident of the European Economic Area, you have the following rights 
            under GDPR:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <span className="font-medium">Right to Access</span> - You have the right to request 
              copies of your personal data.
            </li>
            <li>
              <span className="font-medium">Right to Rectification</span> - You have the right to 
              request that we correct any information you believe is inaccurate or incomplete.
            </li>
            <li>
              <span className="font-medium">Right to Erasure</span> - You have the right to request 
              that we erase your personal data, under certain conditions.
            </li>
            <li>
              <span className="font-medium">Right to Restrict Processing</span> - You have the right 
              to request that we restrict the processing of your personal data, under certain conditions.
            </li>
            <li>
              <span className="font-medium">Right to Object to Processing</span> - You have the right 
              to object to our processing of your personal data, under certain conditions.
            </li>
            <li>
              <span className="font-medium">Right to Data Portability</span> - You have the right to 
              request that we transfer the data we have collected to another organization, or directly 
              to you, under certain conditions.
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">How We Comply with GDPR</h2>
          <p className="text-muted-foreground mb-3">
            VitalScan is committed to ensuring the security and protection of the personal information 
            that we process, and to provide a compliant and consistent approach to data protection. 
            Our compliance measures include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Obtaining explicit consent for the processing of personal data</li>
            <li>Implementing data protection measures by design and by default</li>
            <li>Maintaining records of our data processing activities</li>
            <li>Conducting data protection impact assessments where required</li>
            <li>Appointing a Data Protection Officer</li>
            <li>Providing clear and transparent information about our data processing activities</li>
            <li>Implementing procedures for handling data breaches</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Health Data Processing</h2>
          <p className="text-muted-foreground">
            As VitalScan processes health data (blood test results), we take extra precautions to 
            ensure this sensitive personal data is handled in accordance with GDPR requirements. 
            Health data is only processed with your explicit consent, and we implement appropriate 
            safeguards, including encryption and access controls.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Subject Access Requests</h2>
          <p className="text-muted-foreground">
            If you wish to exercise any of your rights under GDPR, please contact our Data Protection 
            Officer at dpo@vitalscan.com. We will respond to your request within 30 days.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">International Data Transfers</h2>
          <p className="text-muted-foreground">
            If we transfer your personal data outside the EEA, we ensure a similar degree of protection 
            is afforded to it by implementing safeguards including Standard Contractual Clauses approved 
            by the European Commission.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contacting the Supervisory Authority</h2>
          <p className="text-muted-foreground">
            If you believe that our processing of your personal information infringes data protection 
            laws, you have a legal right to lodge a complaint with a supervisory authority responsible 
            for data protection in your country.
          </p>
        </section>
        
        <p className="text-sm text-muted-foreground mt-8">Last Updated: April 30, 2025</p>
      </div>
    </div>
  );
};

export default GDPRPage;
