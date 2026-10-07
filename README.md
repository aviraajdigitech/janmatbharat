# 🇮🇳 Janmat Bharat Website

![Janmat Bharat](public/og-image.jpg)

## 📖 Overview
Janmat Bharat is an independent digital opinion platform designed to track India's political mood, election data, and political trends. It empowers citizens to participate in secure and anonymous digital polls, vote on state and national issues, and explore India's comprehensive political history.

*Note: Janmat Bharat is an independent digital platform and is not affiliated with any government body or the Election Commission of India (ECI).*

## ✨ Features
*   **Digital Polling:** Anonymous voting on national leaders, CMs, and local issues.
*   **Constituency Lookup:** Hyper-local political data across India's 543 Lok Sabha constituencies.
*   **Political History:** Interactive timelines of India's past Prime Ministers.
*   **Election Calendar:** Countdown and tracking for upcoming Assembly and Lok Sabha elections.
*   **Voter Awareness:** Education on EVM security, VVPAT, and constitutional voting rights.
*   **Multi-Language Support:** Seamless toggle between Hindi and English content.
*   **3D Interactive Elements:** Engaging WebGL elements (e.g., interactive 3D Indian Flag).

## 🛠️ Tech Stack
*   **Framework:** React 19 + Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM (v6)
*   **Icons:** Lucide React
*   **3D Graphics:** React Three Fiber & Drei (`@react-three/fiber`)
*   **SEO:** Custom `<SEO>` component + React Helmet Async

## 📁 Project Structure
```text
janmat-bharat-website/
├── public/                # Static assets (images, fonts, sitemap.xml)
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, SEO, ErrorBoundary)
│   ├── data/              # Static data stores (history, constituencies, evm data)
│   ├── pages/             # Route-level components (Home, History, Constituency, etc.)
│   ├── App.jsx            # Main application router and Suspense boundary
│   └── main.jsx           # React entry point
├── generate-sitemap.cjs   # Automated sitemap generation script
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies and scripts
```

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aviraajdigitech/janmatbharat.git
   cd janmatbharat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 🔐 Environment Variables
Currently, the frontend relies heavily on localized static data. If backend integrations (APIs) are added, create a `.env` file in the root directory:

```env
# Example environment variables
VITE_API_BASE_URL=https://api.janmatbharat.com/v1
VITE_APP_STORE_LINK=https://play.google.com/store/apps/details?id=com.janmatbharat
```

## 🏗️ Build
To build the application for production, run:
```bash
npm run build
```
This command automatically executes `generate-sitemap.cjs` first to generate a fresh `sitemap.xml`, followed by Vite's optimized production build. The output will be in the `dist/` directory.

## 🚀 Deployment
This project is a standard Static Site Application (SPA). It can be deployed seamlessly to platforms like Vercel, Netlify, Hostinger, or AWS S3. 

**Deployment Requirements:**
*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`
*   **Routing:** Ensure the server is configured to rewrite all navigation requests to `index.html` (to support React Router).

## 🔍 SEO & Analytics
*   **Dynamic Open Graph:** Every page utilizes the custom `<SEO>` component to inject dynamic `og:title`, `og:description`, and `og:image` tags for perfect social sharing previews.
*   **Sitemap:** `sitemap.xml` is automatically generated on every build and submitted to Google Search Console.
*   **Tracking:** Google Search Console is verified via a meta tag in `index.html` to monitor Core Web Vitals, indexing, and organic search queries.

## 📱 App Store Integration
The website serves as a primary funnel for the Janmat Bharat Mobile App. App download buttons are strategically placed across the UI (Navbar, Footer, 404 Page, and floating banners) to maximize conversion. 

## 📝 Content Management
Content is managed via localized JSON/JS files to ensure fast load times and simple updates without requiring a CMS overhead for static pages:
*   `src/data/historyData.js` - Update Prime Minister timelines.
*   `src/data/realConstituencyData.js` - Update state and local representative data.
*   `src/data/electionCalendarData.js` - Update upcoming election schedules.

---
*Maintained by the Aviraaj Digitech Team.*
