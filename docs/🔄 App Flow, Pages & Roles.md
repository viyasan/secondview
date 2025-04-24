## **🔄 App Flow, Pages & Roles – VitalScan**

### **👤 User Roles**

* **User:**  
  * Can upload and view their own blood test results  
  * Can manage their account and delete data  
  * Cannot see other users’ data (row-level security enforced)

---

### **🧭 App Flow**

#### **1\. Landing Page ("/")**

* Hero CTA: “Upload your blood test – Get AI insights”  
* Buttons: \[Upload Result\], \[Sign In\], \[Learn How It Works\]

#### **2\. Auth Pages ("/login", "/signup")**

* Email/password form  
* Google OAuth button

#### **3\. Upload Page ("/upload")**

* Drag-and-drop or select PDF  
* Privacy modal appears before upload  
* Shows processing indicator after file is submitted

#### **4\. Results Page ("/results/:uploadId")**

* Categorized sections: Cardiovascular, Hormonal, Liver, etc.  
* Each section shows:  
  * Marker name, value, reference range  
  * Status (Low / Normal / High)  
  * Insight (only if abnormal)

#### **5\. Dashboard ("/dashboard")**

* List of previous uploads with timestamps  
* Click to view full results

#### **6\. Settings ("/settings")**

* Account email  
* Button to delete account and data  
* Option to sign out

#### **7\. Privacy Modal (Component)**

* Pops up before upload begins  
* Text: “Your file is stored securely and deleted after 7 days.”  
* Accept/Cancel options

---

### **📄 Pages Summary**

| Page | Path | Description |
| ----- | ----- | ----- |
| Landing | "/" | Explains app \+ CTA to upload or log in |
| Auth | "/login", "/signup" | User authentication |
| Upload | "/upload" | Upload and initiate AI analysis |
| Results | "/results/:id" | View results categorized with insights |
| Dashboard | "/dashboard" | Access past uploads |
| Settings | "/settings" | Manage account & privacy |
| Privacy Modal | (Component) | Inline summary of data policy |

---

### **🛠 Notes**

* All pages gated behind auth except Landing and Auth pages  
* File uploads, results, and accounts are private per user (enforced via Supabase RLS)  
* No admin panel required for now

