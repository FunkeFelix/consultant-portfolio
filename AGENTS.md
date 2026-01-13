# Repository Overview

This repository contains the source code for the **Consultant Portfolio** of Felix Funke. It is a modern, single-page web application designed to showcase professional consulting services, technical expertise, and project history.

## Technology Stack
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Language**: TypeScript
- **Backend/Services**: Supabase (Database, Storage, Auth support)
- **Deployment**: GitHub Pages (configured via workflows)

## Architecture
The application follows a standard component-based architecture typical of React applications.
- `src/main.tsx`: Entry point.
- `src/pages/Index.tsx`: Main layout file that orchestrates the vertical stacking of sections.
- `src/components/`: Contains all UI sections and reusable atoms.
- `src/contexts/`: Manages global state, specifically `LanguageContext` for i18n.
- `src/lib/`: Utility functions and Supabase client configuration.

---

# UI Sections & Intent

This document outlines the specific intent and functionality of each major UI component found in `src/components/`.

### 1. Header (`src/components/Header.tsx`)
**Intent:** Navigation and Global Controls.
- **Functionality:**
  - Provides a sticky navigation bar that remains accessible on scroll.
  - Contains links to anchor points: Projects, Skills, and Contact.
  - Houses global actions: **Language Toggle** (EN/DE) and **Resume Download**.
  - Adapts to mobile screens with a hamburger menu.

### 2. Hero (`src/components/Hero.tsx`)
**Intent:** First Impressions & Value Proposition.
- **Functionality:**
  - Establishes the personal brand with a profile image and dynamic background.
  - clearly states the consultant's unique selling point: bridging **Business Strategy**, **Technical Execution**, and **AI Innovation**.
  - Highlights key differentiators: ROI focus, Stakeholder management, and Efficient processes.
  - Primary Call-to-Actions (CTAs) guide users to the "Projects" or "Contact" sections.

### 3. Projects (`src/components/Projects.tsx`)
**Intent:** Social Proof & Case Studies.
- **Functionality:**
  - Showcases a curated list of past work (e.g., AI Editorial Platform, Legacy Modernization).
  - Each project card details:
    - **Business Problem & Solution**: Description of the work.
    - **Tech Stack**: Badges for technologies used (Next.js, Python, etc.).
    - **Impact**: Quantifiable results (e.g., "90% Automation", "25% Performance Gain").
    - **Testimonials**: Quotes from clients/stakeholders.
    - **Links**: External links to live projects.

### 4. Skills (`src/components/Skills.tsx`)
**Intent:** Competency Visualization.
- **Functionality:**
  - Visualizes technical and soft skills using progress bars.
  - Categories include:
    - Business & Product Strategy
    - Frontend & Mobile Development
    - Backend, Cloud & Security
    - AI & LLM Integration
  - Lists specific tools (Figma, Jira, VS Code) to demonstrate workflow proficiency.
  - Reinforces the "Business + Tech" hybrid profile through value proposition cards.

### 5. Contact (`src/components/Contact.tsx`)
**Intent:** Lead Generation & Conversion.
- **Functionality:**
  - **General Contact Form**: Allows visitors to send direct messages (stored in Supabase `contact_submissions`).
  - **Schedule Call**: A modal form for booking meetings (stored in Supabase `schedule_calls`).
  - **Direct Info**: Displays email, phone, and location.
  - **Social Proof**: Links to GitHub and LinkedIn profiles.

### 6. Footer (`src/components/Footer.tsx`)
**Intent:** Legal Compliance & Closing.
- **Functionality:**
  - Displays copyright information.
  - Contains an **Impressum** (Legal Notice) modal required for German/EU compliance.
  - Credits the tools used to build the site.

### 7. Helper Components
- **LanguageToggle (`src/components/LanguageToggle.tsx`)**: Switches the application language context between English and German.
- **ResumeDownload (`src/components/ResumeDownload.tsx`)**: Handles the retrieval and download of the resume PDF file from Supabase Storage.
