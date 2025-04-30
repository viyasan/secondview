
import React from "react";
import { Separator } from "@/components/ui/separator";

const CookiePolicyPage = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <Separator className="mb-6" />
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            This Cookie Policy explains how VitalScan uses cookies and similar technologies to 
            recognize you when you visit our website. It explains what these technologies are 
            and why we use them, as well as your rights to control our use of them.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">What are cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small data files that are placed on your computer or mobile device when 
            you visit a website. Cookies are widely used by website owners in order to make their 
            websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Why do we use cookies?</h2>
          <p className="text-muted-foreground mb-2">
            We use first-party and third-party cookies for several reasons. Some cookies are 
            required for technical reasons in order for our website to operate, and we refer to 
            these as "essential" or "strictly necessary" cookies. Other cookies also enable us to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve your user experience</li>
            <li>Provide secure authentication</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Types of cookies we use</h2>
          <p className="text-muted-foreground">The types of cookies we use include:</p>
          
          <div className="mt-3 space-y-3">
            <div>
              <h3 className="font-medium">Essential cookies</h3>
              <p className="text-muted-foreground">These are strictly necessary for the website to function properly.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Preference cookies</h3>
              <p className="text-muted-foreground">These remember your preferences for a better user experience.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Analytics cookies</h3>
              <p className="text-muted-foreground">These help us understand how visitors interact with our website.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Authentication cookies</h3>
              <p className="text-muted-foreground">These help us identify users so they don't need to log in repeatedly.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">How to control cookies</h2>
          <p className="text-muted-foreground mb-2">
            You have the right to decide whether to accept or reject cookies. You can set or amend 
            your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
            you may still use our website though your access to some functionality and areas may be restricted.
          </p>
          <p className="text-muted-foreground">
            Most web browsers allow some control of most cookies through the browser settings. To find out 
            more about cookies, including how to see what cookies have been set, visit 
            <a href="https://www.allaboutcookies.org" className="text-primary ml-1" target="_blank" rel="noopener noreferrer">
              www.allaboutcookies.org
            </a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Updates to this policy</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies 
            we use or for other operational, legal or regulatory reasons. Please therefore re-visit this 
            Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our use of cookies or other technologies, please contact us 
            at privacy@vitalscan.com.
          </p>
        </section>
        
        <p className="text-sm text-muted-foreground mt-8">Last Updated: April 30, 2025</p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
