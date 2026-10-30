# Gokul Dry Fruit — Premium Wholesale Dry Fruits Website

A responsive, editorial-grade website designed for **Gokul Dry Fruit**, a wholesale dry-fruit merchant based in **Kavadiguda, Hyderabad, Telangana, India**.

Designed with a sophisticated Indian luxury aesthetic inspired by premium artisanal food brands, elegant packaging, and authentic textures.

---

## 🎨 Design System & Palette

- **Warm Ivory (`#F5EFE4`)**: Primary surface and canvas color.
- **Deep Walnut Brown (`#38251F`)**: Signature grounding tone for contrast, typography, and the B2B wholesale section.
- **Antique Gold (`#B08A4A`)**: Editorial accents, borders, badges, and monogram emblem.
- **Sand Beige (`#E5D6BE`)**: Warm supporting card surfaces and divider lines.
- **Dried Berry (`#722F35`)**: Selective rich focal accent.
- **Charcoal (`#25221F`)**: High-contrast body typography for reading comfort.

### Typography
- **Display Headings**: `Cormorant Garamond` (Google Fonts)
- **Body & Controls**: `DM Sans` (Google Fonts)

---

## 🏗️ Structure & Key Sections

1. **Navigation (`src/components/Navbar.jsx`)**:
   - Monogram seal brand mark (`G`)
   - Links: Home, Our Products, Wholesale, About Us, Location
   - Mobile responsive drawer with accessible hamburger toggle
   - Sticky backdrop blur with hairline gold border

2. **Hero Section (`src/components/Hero.jsx`)**:
   - Small label: *“QUALITY DRY FRUITS • WHOLESALE”*
   - Main heading: *“Nature’s Finest. Sourced for Your Business.”*
   - Supporting copy: *“Explore a selection of dry fruits for retailers, resellers, and businesses in Hyderabad.”*
   - CTAs: *“Explore Our Products”* & *“Find Our Location”*
   - Editorial dry-fruit composition with warm natural lighting and framing accents

3. **Product Categories (`src/components/Products.jsx`)**:
   - Heading: *“A Selection of Nature’s Finest”*
   - 6 representative categories:
     - **Almonds (Badam)**: Raw whole kernels, Mamra, slivered
     - **Cashews (Kaju)**: W180/W240/W320 whole grades & splits (tukda)
     - **Pistachios (Pista)**: Roasted & salted, in-shell, green kernels
     - **Dates (Khajoor)**: Soft wet dates, Medjool & Kimia types
     - **Raisins (Kishmish)**: Long green kishmish, golden raisins, black seedless
     - **Other Dry Fruits**: Akhrot (walnuts), Anjeer (dried figs), cranberries
   - Visual variation, hover animations, representative forms, and factual wholesale disclaimer

4. **Wholesale Section (`src/components/Wholesale.jsx`)**:
   - Heading: *“Built for Businesses”*
   - Deep walnut background with warm ivory typography and subtle gold accents
   - Clear B2B value proposition for retailers, confectionery makers, and resellers
   - Direct lot verification guidance (no fake MOQs, no fake pricing, no enquiry forms)

5. **About Us (`src/components/About.jsx`)**:
   - Heading: *“A Tradition of Good Taste”*
   - Introduces Gokul Dry Fruit as a wholesale enterprise in Kavadiguda, Hyderabad
   - Professional, warm, and concise without fabricated claims or fake awards
   - Asymmetric layout with natural photography

6. **Location Section (`src/components/Location.jsx`)**:
   - Heading: *“Find Us in Hyderabad”*
   - Displays **Gokul Dry Fruit**, **Kavadiguda, Hyderabad, Telangana, India**
   - Clean location card with accessibility details (Secunderabad, Musheerabad, Lower Tank Bund corridors)
   - Interactive map embed centered on Kavadiguda, Hyderabad
   - Direct button opening Kavadiguda on Google Maps

7. **Footer (`src/components/Footer.jsx`)**:
   - Brand emblem and name
   - Factual brand summary
   - Navigation links
   - Verified location line
   - Dynamically generated current year
   - Accessible "Back to top" action

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or pnpm

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production build
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` directory.

### 4. Preview production build locally
```bash
npm run preview
```

---

## 🔒 Content Integrity & Accuracy Compliance

- **No fabricated contact details**: No fake phone numbers, fake emails, or fake WhatsApp links.
- **No enquiry form**: Buyers are invited to connect directly in person at the Kavadiguda store.
- **No invented claims**: No false MOQs, no fake price tags, no unverified certifications or awards.
- **Representative inventory**: Product categories are clearly flagged as representative wholesale lines rather than real-time stock guarantees.

