## **🚧 Implementation Plan & Scope – VitalScan**

### **🧭 Project Summary**

VitalScan is a medtech web application designed to help everyday users gain second opinions on blood test results through AI-driven analysis. The app focuses on simplicity, trust, and user-friendliness, with core features like PDF upload, AI categorization of blood markers, and health insights.

---

### **📦 Development Phases**

#### **🔹 Phase 1: MVP Launch – Core Functionality (Weeks 1–3)**

**Goal:** Launch a private beta with essential features for secure upload, AI analysis, and result viewing.

##### **🔧 Features:**

* User authentication (Email/password \+ Google OAuth via Supabase)  
* File upload (PDF format)  
* AI pipeline:  
  * Extract values (marker, unit, reference range)  
  * Categorize (Low, Normal, High)  
  * Provide friendly insight text for abnormal values  
* Results dashboard  
* Auto-deletion logic (delete uploads after 7 days)  
* Privacy summary modal before upload  
* Supabase storage \+ PostgreSQL schema

##### **✅ Milestones:**

---

#### **🔹 Phase 2: UX Polish & Trust Signals (Weeks 4–5)**

**Goal:** Improve user confidence, responsiveness, and polish overall user experience.

##### **🔧 Features:**

* Responsive layout (desktop-first with mobile fallback)  
* Friendly microcopy for instructions, feedback, and error handling  
* Account and data deletion feature  
* Loading states and result waiting indicator  
* Simple empty states and visual feedback after upload

##### **✅ Milestones:**

---

#### **🔹 Phase 3: User Delight & Viral Hooks (Weeks 6–7)**

**Goal:** Increase retention and organic growth by improving shareability and user satisfaction.

##### **🔧 Features:**

* Downloadable PDF of result summary  
* Email notifications when results are ready  
* Optional referral system (unique links, count tracker)

##### **✅ Milestones:**

---

### **🧱 Development Principles**

* **Build simple, scalable components** using Next.js and shadcn/UI  
* **Prioritize vertical slices**: upload → analyze → display should be functional early  
* **Fail gracefully**: all AI and file processing should include error states  
* **Secure by default**: Supabase RLS, file access only per user  
* **Optimize later**: prioritize clarity over performance in MVP

