## **🎨 Design Guidelines – VitalScan**

### **✨ Brand Personality**

VitalScan should feel:

* Trustworthy, calm, and clear  
* Minimal and professional without feeling cold  
* Friendly, informative, and non-judgmental

---

### **🎨 Color Palette**

* **Primary:** \#2E7D32 (Deep Green) – Trust, vitality, action  
* **Accent:** \#A5D6A7 (Soft Green) – Highlights, backgrounds  
* **Text Primary:** \#212121 (Rich Black)  
* **Text Secondary:** \#757575 (Medium Gray)  
* **Background:** \#FAFAFA (Soft Light Gray)  
* **Surface / Cards:** \#FFFFFF (White)  
* **Borders / Dividers:** \#E0E0E0 (Light Gray)

---

### **🅰 Typography**

* **Font Family:** Inter (Google Font)  
* **Heading Sizes:**  
  * H1: 36px bold  
  * H2: 28px semibold  
  * H3: 22px medium  
* **Body Text:** 16px regular  
* **Caption/Labels:** 14px medium or semibold

---

### **📦 UI Components**

#### **✅ Buttons**

* **Primary Button:** Green background, white text  
  * Hover: Slightly darker green (\#27642B)  
  * Disabled: Muted green background, gray text  
* **Secondary Button:** Outline with green border and text  
  * Hover: Filled green

#### **✅ Inputs & Forms**

* Border-radius: 8px  
* Padding: 12px vertical, 16px horizontal  
* Focus: Green outline shadow

#### **✅ Dropdowns**

* Rounded corners (lg)  
* Hover: Light green background (\#EDF7ED)  
* Scrollable if too long

#### **✅ Upload Card**

* Drag-and-drop zone with icon \+ text  
* Visual feedback when dragging  
* File preview (PDF name)

#### **✅ Results Display**

* Card-based by category (e.g., Cardiovascular, Liver)  
* Highlight abnormal values with subtle red tag  
* Tooltip or expandable insight for explanations

---

### **💡 UX Patterns**

* **Dashboard layout:** Sidebar nav \+ main content panel  
* **Microinteractions:**  
  * Upload spinner while processing  
  * Fade-in for new results  
  * Toast confirmation for actions (upload complete, account deleted)  
* **Empty States:** Friendly illustrations and simple CTA (“Upload your first result”)  
* **Modals:** Use for privacy info and deleting account confirmation

---

### **📱 Responsiveness**

* Desktop-first (1200px max-width container)  
* Tablet: Collapse sidebar  
* Mobile: Stack vertically, hide icons