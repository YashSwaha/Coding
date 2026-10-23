# Full Stack Development (FSD) Lab Practicals

A complete collection of 10 Full Stack Development practicals created specifically for college lab exams and viva demonstrations.

All practicals adhere strictly to the principle: **Simplicity > Extra Features > Design**. The code is concise, well-commented, and straightforward to run and explain.

---

## 🛠️ Software Requirements

| Software | Version | Purpose / Used In |
| :--- | :--- | :--- |
| **Modern Web Browser** | Chrome, Firefox, Edge | Practicals 1–7, 9 |
| **Node.js & npm** | v16+ (LTS recommended) | Practicals 1, 2, 8, 10 |
| **MySQL Server** | v8.0+ or XAMPP / WampServer | Practical 8 |
| **MongoDB** | Local Server (v6+) or MongoDB Atlas | Practical 10 |
| **Internet Connection** | Required for CDNs | Practicals 5, 6, 7 (Optional for 5 with offline files) |

---

## 📁 Repository Structure

```text
FSD_Practicals/
├── Practical_01_JavaScript_NodeJS/
│   ├── index.html          # Embedded JavaScript demo & Node.js installation instructions
│   ├── script.js           # "Hello World" terminal script using Node.js
│   ├── app.js              # Create and persist JSON object to local file
│   └── package.json        # Node.js project configuration
├── Practical_02_JSON_Todo/
│   ├── index.html          # Browser To-Do List with localStorage persistence
│   ├── script.js           # JSON creation, reading tasks.json, multidimensional array demo
│   ├── app.js              # Server-side JSON manipulation using Node.js
│   └── tasks.json          # Sample structured JSON file with categories & tasks
├── Practical_03_Responsive_Webpage/
│   ├── index.html          # Responsive webpage with viewport meta tag & vector image
│   └── style.css           # CSS with width/max-width, vw unit, and media queries
├── Practical_04_Web_APIs/
│   └── index.html          # Geolocation API, Local Storage API, and Drag & Drop API
├── Practical_05_Bootstrap/
│   └── index.html          # Student Registration Form with Bootstrap 5 (CDN & offline notes)
├── Practical_06_Tailwind_CSS/
│   └── index.html          # Modern utility layout with Tailwind CSS browser CDN
├── Practical_07_Vue_Directives/
│   └── index.html          # Vue 3 with custom directives (v-uppercase, v-dynamic-list, v-format-date)
├── Practical_08_NodeJS_MySQL/
│   ├── database.sql        # Database and table schema creation script
│   ├── app.js              # Node.js script executing CRUD, DISTINCT, and DROP table operations
│   └── package.json        # Project setup with mysql2 dependency
├── Practical_09_RBAC/
│   └── index.html          # Browser-based Role-Based Access Control (Admin vs Regular User)
├── Practical_10_MongoDB/
│   ├── app.js              # Node.js MongoDB CRUD operations on students collection
│   ├── package.json        # Project setup with mongodb driver dependency
│   └── README.md           # Setup instructions for Local MongoDB and MongoDB Atlas
└── README.md               # Master documentation and run guide
```

---

## 📋 Practicals Overview and Run Instructions

### Practical 1: JavaScript, Node.js and JSON
* **Folder:** `Practical_01_JavaScript_NodeJS`
* **Purpose:** Learn JavaScript basics, embedded scripting in HTML, Node.js installation, running terminal scripts, and storing JSON objects to disk.
* **Files:** `index.html`, `script.js`, `app.js`, `package.json`
* **How to Run:**
  1. **In Browser:** Open `index.html` directly in your browser.
  2. **In Terminal:**
     ```bash
     cd Practical_01_JavaScript_NodeJS
     node script.js    # Prints "Hello, World from Node.js!"
     node app.js       # Writes application config to app_data.json
     ```

---

### Practical 2: JSON and To-Do List
* **Folder:** `Practical_02_JSON_Todo`
* **Purpose:** Work with JSON data structures, multidimensional arrays, server-side JSON handling with Node.js, and browser-based To-Do lists with `localStorage`.
* **Files:** `index.html`, `script.js`, `app.js`, `tasks.json`
* **How to Run:**
  1. **In Browser:** Open `index.html` in your browser. Add, mark completed, and delete tasks.
  2. **In Terminal:**
     ```bash
     cd Practical_02_JSON_Todo
     node script.js    # Demonstrates JSON reading & multidimensional array access
     node app.js       # Demonstrates JSON manipulation in Node.js
     ```

---

### Practical 3: Responsive Webpage
* **Folder:** `Practical_03_Responsive_Webpage`
* **Purpose:** Understand responsive web design principles: viewport meta tag, `width`/`max-width`, responsive text with the `vw` unit, and CSS media queries.
* **Files:** `index.html`, `style.css`
* **How to Run:**
  * Open `index.html` directly in any browser. Resize the window or press `F12` and switch to device/mobile mode.

---

### Practical 4: JavaScript Web APIs
* **Folder:** `Practical_04_Web_APIs`
* **Purpose:** Hands-on demonstration of three major HTML5/JavaScript Web APIs: Geolocation (latitude/longitude), Web Storage (`localStorage`), and Drag & Drop.
* **Files:** `index.html`
* **How to Run:**
  * Open `index.html` in your browser.
  * *Note:* Geolocation prompts the browser for permission and requires HTTPS or `localhost`.

---

### Practical 5: Bootstrap
* **Folder:** `Practical_05_Bootstrap`
* **Purpose:** Create a clean Student Registration Form using Bootstrap 5 classes and understand how to use Bootstrap via online CDN or offline downloaded files.
* **Files:** `index.html`
* **Form Fields:** Roll Number, First Name, Mobile Number, Email ID, Address.
* **How to Run:**
  * Open `index.html` in your browser (requires internet for CDN).
  * See instructions within `index.html` for offline usage.

---

### Practical 6: Tailwind CSS
* **Folder:** `Practical_06_Tailwind_CSS`
* **Purpose:** Learn utility-first CSS styling using the official Tailwind CSS browser CDN for quick demonstrations and prototyping.
* **Files:** `index.html`
* **Key Components:** Responsive grid, headings, paragraphs, utility buttons, and feedback form.
* **How to Run:**
  * Open `index.html` in your browser (requires internet for CDN).

---

### Practical 7: Vue.js Custom Directives
* **Folder:** `Practical_07_Vue_Directives`
* **Purpose:** Implement and understand custom directives in Vue.js 3 using the Vue CDN.
* **Directives Implemented:**
  1. `v-uppercase`: Transforms text content to uppercase when clicked.
  2. `v-dynamic-list`: Dynamically generates and manages `<li>` elements from an array.
  3. `v-format-date`: Formats raw date strings into human-readable date formats.
* **Files:** `index.html`
* **How to Run:**
  * Open `index.html` in your browser (requires internet for CDN).

---

### Practical 8: Node.js and MySQL
* **Folder:** `Practical_08_NodeJS_MySQL`
* **Purpose:** Perform basic database and user-defined SQL operations sequentially in a terminal application using `mysql2`.
* **Operations:**
  * **Part A (Basic):** Create Database, Create Table, Insert Records, Update Record.
  * **Part B (Functions):** Delete Record, Select All, Select Unique (`DISTINCT`), Drop Table (safe demo table).
* **Files:** `app.js`, `database.sql`, `package.json`
* **How to Run:**
  1. Start MySQL server (e.g. XAMPP control panel or system service).
  2. Verify or update credentials in `app.js` (default: `root`, empty password).
  3. In terminal:
     ```bash
     cd Practical_08_NodeJS_MySQL
     npm install
     node app.js
     ```

---

### Practical 9: Role-Based Authentication and Access Control (RBAC)
* **Folder:** `Practical_09_RBAC`
* **Purpose:** Understand Role-Based Access Control concepts on the client-side, showing distinct views for Admin vs Regular User roles, along with an explanation of why server-side validation is required in production.
* **Demo Credentials:**
  * **Admin:** `username: admin` | `password: admin123` (Accesses User + Admin sections)
  * **Student:** `username: student` | `password: student123` (Accesses User section only)
* **Files:** `index.html`
* **How to Run:**
  * Open `index.html` in your browser. Log in with demo accounts and verify role permissions.

---

### Practical 10: Node.js and MongoDB CRUD
* **Folder:** `Practical_10_MongoDB`
* **Purpose:** Implement asynchronous Create, Read, Update, and Delete operations on a `students` MongoDB collection using the official `mongodb` driver.
* **Files:** `app.js`, `package.json`, `README.md`
* **How to Run:**
  1. Start local MongoDB (`mongod`) or configure MongoDB Atlas connection URI.
  2. In terminal:
     ```bash
     cd Practical_10_MongoDB
     npm install
     node app.js
     ```
  3. For MongoDB Atlas, pass `MONGODB_URI` environment variable:
     ```bash
     export MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/?retryWrites=true"
     node app.js
     ```

---

## 💡 Quick Tips for College Viva & Demonstrations

1. **Why `localStorage` is not a replacement for a backend database:**
   * `localStorage` stores strings locally in a single browser on a single device with a 5MB limit. Databases (MySQL/MongoDB) store centralized, secure, multi-user relational or document records on a server.
2. **Why Client-Side RBAC is not secure on its own:**
   * Anyone can inspect frontend code and manipulate JavaScript variables or DOM CSS display properties. Real authentication and authorization MUST be validated on the backend API server.
3. **Difference between MySQL and MongoDB:**
   * MySQL is a Relational Database Management System (RDBMS) using structured tables, rows, columns, and SQL queries.
   * MongoDB is a NoSQL Document Database storing data in flexible, JSON-like BSON documents without rigid schemas.
4. **Why `npm install` is required for Node.js projects:**
   * It downloads external driver packages (`mysql2`, `mongodb`) defined in `package.json` into the `node_modules` directory.
