# DPGOLD Products — Enterprise Website Project

A production-ready responsive corporate manufacturing website built for **DPGOLD Products** (a subsidiary brand of **Dinesh Plastics**), an industry-leading PVC Electrical Accessories manufacturer based in Chennai, India.

This project is built using a modern, scalable React frontend architecture, styled with a premium industrial corporate design theme inspired by industry giants like Schneider Electric, Legrand, and Havells.

---

## 🚀 Key Features

*   **Multipage Architecture:** Complete Home, Products, About, and Contact pages managed via `react-router-dom`.
*   **Aesthetic & Responsive Design:** Sleek dark slate and steel blue palette (`#0F172A`, `#1E3A5F`, `#F8FAFC`) matching the corporate theme. Fully responsive across mobiles, tablets, and desktops.
*   **Search & Category Filters:** Advanced product filtering on the Products page by categories (Round Sheets, Junction Boxes, Fan Boxes, etc.) and keyword search.
*   **Product Detail Modals:** Interactive modals detailing technical specifications, materials, sizing, features, and pricing for all 25+ products.
*   **Lead Conversion Channels:**
    *   **Inquiry Form:** Structured contact form that auto-fills selected product details when redirected from cards.
    *   **WhatsApp Integrations:** One-click WhatsApp redirects pre-populating client inquiry messages.
    *   **Call Shortcuts:** Click-to-call integrations for easy phone access.
*   **Interactive Components:**
    *   **Testimonials Slider:** Responsive slide-deck containing verified distributor reviews using `Swiper`.
    *   **Accordion FAQs:** Quick-expanding details for client questions.
    *   **Embedded Google Maps:** High-performance, lazy-loaded location iframe targeting the Chennai office.
*   **Scroll Animations:** Integration of Animate On Scroll (`AOS`) and `Framer Motion` for premium transition effects.
*   **SEO Optimization:**
    *   Structured JSON-LD schema markup for local manufacturing businesses.
    *   Custom `sitemap.xml` and `robots.txt` configuration in the public root.
    *   Open Graph tags and description metadata configured for social media sharing.

---

## 📂 Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Brand vector logo tab icon
│   ├── robots.txt           # Search engine crawler guidelines
│   ├── sitemap.xml          # Index of website page paths
│   └── og-image.jpg         # Default social link preview image
│
├── src/
│   ├── assets/
│   │   ├── logo/
│   │   │   ├── logo.svg       # Primary brand logo (Gold/Navy)
│   │   │   └── logo-white.svg # Contrast logo for dark backgrounds
│   │   ├── hero/
│   │   │   └── hero-banner.jpg# High-tech automated factory banner
│   │   ├── products/          # Studio-light product photography assets
│   │   │   ├── round-sheet.jpg
│   │   │   ├── fan-sheet.jpg
│   │   │   ├── junction-box.jpg
│   │   │   ├── fan-box.jpg
│   │   │   ├── elbow-tee.jpg
│   │   │   └── spotlight-box.jpg
│   │   └── icons/             # Custom SVG value icons
│   │       ├── quality.svg
│   │       ├── delivery.svg
│   │       ├── manufacturing.svg
│   │       └── trust.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header navigation + drawer
│   │   ├── Hero.jsx           # Homepage welcome banner + motion animations
│   │   ├── About.jsx          # Homepage About Dinesh Plastics excerpt
│   │   ├── ProductCard.jsx    # Modular catalog display card with triggers
│   │   ├── ProductSection.jsx # Homepage tab-filtered product preview
│   │   ├── WhyChooseUs.jsx    # Corporate values list with custom SVGs
│   │   ├── Testimonials.jsx   # Distributor quote carousel (Swiper)
│   │   ├── ContactForm.jsx    # Inquiry desk template + WhatsApp builder
│   │   ├── ProductDetailModal.jsx # Detail technical specs overlay
│   │   ├── CTA.jsx            # Lead conversion callout banners
│   │   └── Footer.jsx         # Contact data, category maps, top scroller
│   │
│   ├── pages/
│   │   ├── Home.jsx           # Main home page container
│   │   ├── Products.jsx       # Complete search-enabled catalog view
│   │   ├── About.jsx          # Full history, quality testing, and values
│   │   └── Contact.jsx        # Map locator + active Inquiry Desk
│   │
│   ├── data/
│   │   └── products.js        # Centralized products specification & FAQ data
│   │
│   ├── styles/
│   │   └── global.css         # Tailwind directives, custom glassmorphism
│   │
│   ├── App.jsx                # Router config, persistent contacts, AOS trigger
│   └── main.jsx               # React virtual DOM mount node
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── README.md
```

---

## 🛠️ Installation & Local Development

Follow these steps to run the project locally on your system:

### 1. Prerequisite
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 2. Install Dependencies
Run the install command in the project root directory:
```bash
npm install
```

### 3. Start Development Server
Boot up Vite's hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Production Build & Deployment

To build a minimized, production-ready static bundle:

### 1. Compile the Bundle
Compile your files for deployment:
```bash
npm run build
```
This will compile all React code, purge unused Tailwind CSS styles, compile assets, and output static files into a `/dist` folder.

### 2. Preview Locally
Preview the production build locally to ensure it is bundle-safe:
```bash
npm run preview
```

### 3. Deploying to Hosting Providers
*   **Static Hosts (Vercel / Netlify / GitHub Pages):** Simply connect your repository and set the build command to `npm run build` and output directory to `dist`.
*   **VPS / Traditional Server:** Upload the contents of the `/dist` folder to your public directory (e.g. `/var/www/html`).

---

## 📋 Brand Credentials & Products Details

*   **Company Name:** DPGOLD Products
*   **Parent Organization:** Dinesh Plastics (Chennai, India)
*   **Specialty:** uPVC Electrical Accessories (Round sheets, fan sheets, junction boxes, bends, fan boxes).
*   **Key Contact Number:** +91 81487 44998
*   **Head Office Address:** 30 Vanchinathan Street, Krishnamoorthy Nagar, Chennai – 600118.
