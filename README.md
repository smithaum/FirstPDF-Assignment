# PDF Generation Assignment

> A web-based recreation of two provided PDF documents using HTML, CSS, and JavaScript, with a focus on accurate layout, dynamic content generation, and A4 document presentation.

---

## 📌 Project Overview

This project was developed as part of a PDF generation assignment.

The objective was to recreate the provided PDF documents as responsive web-based documents while maintaining the visual structure and important elements of the original documents.

Both exercises were implemented using:

* HTML5
* CSS3
* JavaScript

The implementation includes dynamic data generation, structured layouts, images, tables, headers, footers, page numbers, and A4-sized pages.

---

## 🎯 Objectives

The main objectives of this assignment were to:

* Recreate the provided PDF layouts using web technologies.
* Maintain the visual structure and alignment of the original documents.
* Implement A4-sized document layouts.
* Generate content dynamically using JavaScript.
* Support different amounts of dynamic data.
* Reproduce headers, footers, tables, page numbers, and images.
* Keep the code organized and reusable.
* Test the generated documents using different datasets.

---

## 🛠️ Technologies Used

| Technology     | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| **HTML5**      | Document structure and content                          |
| **CSS3**       | Layout, styling, A4 page design, tables and positioning |
| **JavaScript** | Dynamic content generation and data handling            |

---

# 📄 Exercise 1 — Worker Progress Report

The first exercise recreates the **Worker Progress Report** document provided as part of the assignment.

### Key Features

* A4 page layout
* WCB logo
* Report header
* Claim number
* Worker information
* Dynamic checkbox selections
* Return-to-work information
* Recovery information
* Medical treatment information
* Medication information
* Home exercise information
* Additional information section
* Footer
* Worker App ID
* Submission date
* Page numbers
* Multi-page document structure

### Dynamic Behaviour

The document content is generated using JavaScript data objects.

For example, worker details, medical information, recovery information, medication details, and checkbox selections can be modified through the JavaScript data.

This allows the same document structure to display different information without manually changing the HTML layout.

---

# 📄 Exercise 2 — Medical & Travel Expense Request

The second exercise recreates the **Medical & Travel Expense Request** document.

### Key Features

* A4 page layout
* WCB logo and organization details
* Claim number
* Worker information
* Prescription drug table
* Over-the-counter drug table
* Medical supplies table
* Parking expense table
* Mileage table
* Bus and taxi fare table
* Privacy notice
* Footer
* Worker App ID
* Submission date
* Page numbers
* Two-page document structure

### Dynamic Tables

The tables in Exercise 2 are generated dynamically using JavaScript arrays.

The number of rows is not fixed.

For example, adding another prescription drug object to the JavaScript data automatically creates another row in the corresponding table.

This allows the document to support different datasets while maintaining the same layout.

---

# ⚙️ Dynamic Data Implementation

The project separates document structure from the data used to populate it.

Example:

```javascript
const reportData = {
    workerName: "Madeleine Wilson",
    claimNumber: "20042047"
};
```


JavaScript functions then generate the corresponding HTML content dynamically.

### Benefits

* Easy to update information
* Reusable document structure
* Supports multiple records
* Reduces repetitive HTML
* Makes the application easier to maintain
* Allows testing with different datasets

---

# 📐 Document Layout

Both exercises were designed around an **A4 document format**.

Special attention was given to:

* Page dimensions
* Margins
* Spacing
* Typography
* Table borders
* Alignment
* Header positioning
* Footer positioning
* Page numbering
* Logo placement
* Multi-page structure

The CSS uses dedicated page containers to ensure that the web version maintains the appearance of a printable document.

---

# 📁 Project Structure

```text
FirstPDF-Assignment/
│
├── exercise-1/
│   │
│   ├── assets/
│   │   └── wcb-logo.png
│   │
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── exercise-2/
│   │
│   ├── assets/
│   │   └── wcb-logo.png
│   │
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── README.md
└── AI-PROMPT-HISTORY.md
```

---

# 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-link>
```

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Run Exercise 1

Open:

```text
exercise-1/index.html
```

using a browser or the VS Code **Live Server** extension.

### 4. Run Exercise 2

Open:

```text
exercise-2/index.html
```

using a browser or Live Server.

---

# 🧪 Testing Dynamic Data

The application was designed to handle different datasets.

### Exercise 1

Test by changing:

* Worker name
* Claim number
* Dates
* Checkbox selections
* Medical information
* Medication information
* Recovery information

### Exercise 2

Test by changing the number of records in:

* Prescription drugs
* Over-the-counter drugs
* Medical supplies
* Parking
* Mileage
* Bus/taxi expenses

For example, changing:

```javascript
prescriptionDrugs: [
    {
        drugName: "Naproxen",
        ...
    }
]
```

to multiple objects should automatically generate multiple table rows.

---

# 💡 Implementation Approach

The implementation follows a simple separation of responsibilities:

### HTML

Provides the basic document entry point and loads the required resources.

### CSS

Controls:

* A4 dimensions
* Typography
* Layout
* Tables
* Borders
* Spacing
* Headers
* Footers
* Print styling

### JavaScript

Controls:

* Dynamic data
* HTML generation
* Tables
* Checkbox states
* Page content
* Reusable rendering functions

This approach keeps the document structure reusable while allowing the displayed information to change dynamically.

---

# 🤖 AI Assistance

AI tools were used during the development process for:

* Understanding the assignment requirements
* Structuring the project
* Generating initial code
* Debugging HTML/CSS/JavaScript issues
* Refining page layouts
* Improving PDF-to-web visual matching
* Troubleshooting positioning and styling issues
* Reviewing dynamic data implementation

The relevant AI prompt history is included in:

```text
AI-PROMPT-HISTORY.md
```

The final implementation was reviewed and tested manually in the browser.

---

# 🎥 Demonstration

The assignment also requires a narrated demonstration for each exercise.

The demonstration covers:

* Understanding of the requirements
* Assumptions made during implementation
* Running the application in the browser
* Demonstrating dynamic data
* Adding multiple records
* Explaining the HTML, CSS and JavaScript implementation
* Challenges encountered
* Solutions implemented
* Disclosure of AI assistance

Video links/files will be added to this repository before final submission.

---

# 🧩 Challenges & Solutions

### 1. Matching the PDF Layout

**Challenge:**
The original documents contain precise spacing, positioning, borders, and page dimensions.

**Solution:**
Dedicated A4 page containers and CSS positioning were used to reproduce the document structure.

### 2. Dynamic Table Rows

**Challenge:**
The number of records can change.

**Solution:**
JavaScript arrays and reusable rendering functions were used to generate table rows dynamically.

### 3. Multi-page Layout

**Challenge:**
Content needed to remain within the correct page boundaries.

**Solution:**
Separate page containers with fixed A4 dimensions and print-specific CSS were implemented.

### 4. Visual Alignment

**Challenge:**
Small differences in spacing and positioning can significantly change the appearance of the generated document.

**Solution:**
CSS dimensions, margins, padding, typography, and positioning were iteratively adjusted while comparing the browser output with the reference PDFs.

---

# 📌 Assignment Requirements Covered

| Requirement           | Status |
| --------------------- | ------ |
| HTML                  | ✅      |
| CSS                   | ✅      |
| JavaScript            | ✅      |
| Exercise 1            | ✅      |
| Exercise 2            | ✅      |
| Images                | ✅      |
| Headers               | ✅      |
| Footers               | ✅      |
| Page numbers          | ✅      |
| Dynamic data          | ✅      |
| Dynamic tables        | ✅      |
| A4 layout             | ✅      |
| Browser demonstration | ✅      |
| AI prompt history     | ✅      |
| Narrated video        | ✅      |

---

## 🎥 Demonstration Videos

The following videos demonstrate the implementation, dynamic data handling,
code structure, challenges faced, and AI assistance used during development.

### Exercise 1 — Worker Progress Report

[▶️ Watch / Download Exercise 1 Video](./videos/Exercise-1-Worker-Progress-Report.mp4)

### Exercise 2 — Medical & Travel Expense Request

[▶️ Watch / Download Exercise 2 Video](./videos/Exercise-2-Medical-Travel-Expense.mp4)

> Note: GitHub may not preview the MP4 files directly because of their file size. You can click View **raw** or use the download option to download and watch the videos.
> The videos are included in the repository and can be downloaded using the links above.

# 👩‍💻 Author

**Smitha U M**

Computer Science Engineering Student

---

## 📄 Note

This project was developed specifically for the assigned PDF recreation task. The implementation focuses on reproducing the structure and behaviour of the provided reference documents using standard web technologies.

````
