## **🧠 masterplan.md – Project Blueprint for VitalScan**

### **📌 Overview**

**VitalScan** is a medtech web application that helps everyday users gain AI-powered second opinions on their blood test results. Users upload standardized lab reports (PDF format), and the system classifies values (low/normal/high), provides plain-language explanations, and suggests possible causes or next steps for abnormal markers.

The goal is to create a clean, consumer-friendly desktop-first experience focused on clarity, privacy, and helpfulness. This MVP will lay the groundwork for evolving VitalScan into a full consumer health brand.

---

### **🎯 Objectives**

* Provide fast, clear, and private second opinions on standard blood tests  
* Simplify a traditionally clinical process for everyday users  
* Build user trust through clarity, safety, and optionality  
* Validate a strong initial use case before expanding into broader health insights

---

### **🎯 Target Audience**

* Everyday users concerned about health metrics  
* People looking for a second opinion or clarity on doctor reports  
* Health-conscious individuals tracking bloodwork over time

---

### **🧩 Core Features**

* File upload (PDFs of standard lab results)  
* AI extraction and classification of blood markers  
* Grouping of results into health categories  
* Explanations for each marker  
* Suggested causes or advice for abnormal values  
* Secure user account system (email \+ Google login)  
* Dashboard of past uploads  
* Auto-deletion of uploads after 7 days  
* Short, clear privacy summary modal

---

### **🏗 Technical Stack**

**Frontend:** Next.js 14, Tailwind CSS, shadcn/UI  
**Backend & DB:** Supabase (auth, file storage, PostgreSQL)  
**AI Layer:** Custom parsing \+ OpenAI for contextual analysis  
**CMS (optional):** Notion for privacy policy, FAQ  
**Hosting:** Vercel

---

### **🗂 Conceptual Data Model**

* **User**: id, email, auth method  
* **Upload**: id, user\_id, file\_url, status, timestamp  
* **Result**: id, upload\_id, marker\_name, value, unit, category, status (low/normal/high), insight\_text

---

### **🧱 Design Principles**

* Desktop-first layout with responsive fallback  
* Clean, minimal UI with strong use of whitespace  
* Green theme for health (`#2E7D32` primary, `#A5D6A7` accent)  
* Simple card-based layout for categorized results  
* Friendly tone in copy and microinteractions

---

### **🔐 Security & Trust**

* Temporary storage of uploads (auto-deletion after 7 days)  
* Simple privacy modal before file submission  
* One-click account/data deletion  
* Use of Supabase RLS (row-level security) for per-user data access

---

### **🚀 Phased Development Plan**

#### **Phase 1: Core MVP (2–3 weeks)**

#### **Phase 2: UX Polish & Trust (1–2 weeks)**

#### **Phase 3: User Engagement (2 weeks)**

---

### **⚠️ Potential Challenges**

* OCR accuracy depending on lab format  
* Managing expectations around AI medical advice  
* Ensuring legal clarity (disclaimers, terms of use)

---

### **🌱 Future Expansion**

* Support scanned images or photos  
* Time-based insights across uploads  
* Integration with Apple Health / wearable data  
* B2B use cases: coaches, clinics, insurers

---

