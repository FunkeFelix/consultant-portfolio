---
name: Felix Funke
type: resume_experience
updated: 2026-01-13
---

# Experience

## Ippen.Digital (The.Lab)
**Role:** Senior Freelance Software Engineer (Full-Stack / Frontend Lead)  
**Dates:** Jul 2024 – Present  
**Summary:** Owned frontend architecture and delivery of two multi-tenant AI products built with Next.js/React, including secure backend integrations, real-time features, and production deployments on GCP.

### Project: Agentic Studio
**What it is:** Multi-feature AI workflow platform combining agentic tooling, editorial/content workflows, deep research, podcast creation, voice experiences, and agentic web browsing.  
**Highlights:**
- Built and owned the product end-to-end with guided workflows for technical and non-technical users.
- Implemented human-in-the-loop editorial pipeline (research → composition → editing → publication) with activity journaling and notifications.
- Designed graph-based agent/workflow model (procedural/static/trigger nodes), supporting LLM vs ReAct-style execution with structured outputs and tool sets.
- Implemented secure BFF patterns via Next.js Server Actions to keep secrets off the client and stabilize integrations.
- Built real-time UX via SSE + Socket.IO/WebSockets, including proxying to backend services.
- Integrated multi-provider AI stack (OpenAI, Google Vertex, Groq, Ollama) via AI SDK and OpenAPI-generated client libraries.
- Led UI system direction and migration to Tailwind + shadcn/ui (Radix), including i18n (EN/DE) and theming.

### Project: MCP APPS Editor
**What it is:** Multi-tenant SaaS workspace for managing MCP/OpenAI apps (tenant ownership, RBAC, onboarding, app lifecycle, billing bridge).  
**Highlights:**
- Designed multi-tenant workspace model with users joining multiple tenants and RBAC (owner/admin/builder/viewer).
- Implemented end-to-end onboarding (signup → profile bootstrap → tenant creation → membership → workspace selection).
- Delivered full app lifecycle management (create/configure/deploy/undeploy) including branding/feed overrides, status, URL, and tenant-scoped ownership.
- Modeled subscription/billing to bridge Stripe data and Cloud Run provisioning (resource snapshots for auditability).
- Built invite flows and access maps to support future scoped permissions/policy enforcement.
- Implemented MCP preview harness using JSON-RPC 2.0 over SSE for real-time tool/resource listing and tool invocation.
- Shipped CI/CD with Docker + Cloud Build → Cloud Run, env/secret wiring, and email workflows with retries.

**Skills used:**
- Next.js 16, React 19, TypeScript
- Firebase, Supabase, PostgreSQL
- OpenAPI, Zod
- Tailwind CSS, shadcn/ui, MUI, i18n
- Cloud Run (GCP), Docker, Cloud Build / CI-CD
- Resend
- LLM integrations (multi-provider)

---

## FORUM Gesellschaft für Informationssicherheit (FORUM)
**Role:** Senior Software Engineer (Frontend Modernization)  
**Dates:** Jun 2024 – Jul 2024  
**Summary:** Modernized and upgraded a legacy React application from React 15 to React 18, improving stability, maintainability, and team enablement.

**Highlights:**
- Upgraded legacy application from React 15 to React 18 and aligned with modern rendering patterns.
- Refactored class components to functional components with hooks; removed deprecated lifecycle methods.
- Enabled React 18 concurrent rendering and StrictMode to surface and fix side effects.
- Resolved third-party compatibility issues and updated tests for async/concurrent behavior.
- Supported rollout and transferred knowledge to the team (best practices, migration guidance).

**Skills used:**
- React 15, React 18
- JavaScript, TypeScript
- React Hooks
- Concurrent Rendering, StrictMode
- Legacy Frontend Modernization / Migration

---

## Handelsblatt Media Group
**Role:** Senior Software Engineer (Conversion / Experimentation)  
**Dates:** May 2023 – May 2024  
**Summary:** Built and shipped product experiments to improve conversion across paywalls, product flows, and key user journeys in a cross-functional team.

**Highlights:**
- Consulted on, implemented, and shipped A/B tests across paywall flows, product presentation, and conversion-critical UI.
- Worked with analytics and tracking to support data-driven decisions and iteration.
- Collaborated closely with product, design, and marketing; translated hypotheses into measurable UI changes.
- Contributed to continuous platform improvements through iterative experimentation and rollout.

**Skills used:**
- Node.js, TypeScript, JavaScript
- Angular, Lit
- MongoDB
- Playwright, Vitest
- Jira, Confluence, Azure DevOps

---

## PitchGuru GmbH
**Role:** Senior Software Engineer  
**Dates:** Jun 2023 – Oct 2023  
**Summary:** Built a Next.js web application to streamline creation of corporate-branded pitch decks and improve end-user experience.

**Highlights:**
- Led development of a Next.js application as a robust platform for simplifying the design process.
- Implemented end-to-end collaboration flows to transform user input into professional, brand-aligned presentations.
- Optimized UX and interaction design to increase engagement and satisfaction.

**Skills used:**
- Next.js, React
- Node.js, Express.js
- TypeScript, JavaScript
- MongoDB
- GitHub Actions
- AWS
- Tailwind CSS

---

## AUDO LLC
**Role:** Software Engineer (Mobile + Backend)  
**Dates:** Oct 2021 – Apr 2023  
**Summary:** Developed and maintained a mobile application and service-based/serverless backend, shipping features and improving performance and stability.

**Highlights:**
- Built new features, fixed bugs, and improved performance for a modern mobile application.
- Ramped up quickly on new technologies (Flutter) and contributed across the stack.
- Built service-based and serverless backend components critical for scalability and performance.
- Supported product delivery with strong ownership and collaboration.

**Skills used:**
- Flutter, Dart
- Node.js, Express.js
- TypeScript, JavaScript
- OpenAPI
- MongoDB
- AWS
- Storybook
- ClickUp
- Tailwind CSS, Ant Design
- GitHub Actions


--

## Independent Project: Vayn (LinkUp)

  - Architected and built Vayn (LinkUp), a Flutter event‑networking app enabling QR‑based event joining,
    participant discovery, connection requests, and 1:1 chat.
  - Designed the backend on Firebase (Auth, Firestore, Storage, Cloud Functions), including connection
    workflows, chat sync, and push notifications via FCM.
  - Implemented premium gating and subscription management with RevenueCat; enforced request throttling for
    free users.
  - Shipped end-to-end production features from data models and repositories to UI flows (events,
    participants, chat, profile).
  - Navigated App Store review iterations and release requirements to get the app shipped.

  Portfolio summary
  Vayn (LinkUp) is a Flutter app I designed and built end‑to‑end for event‑based networking. Users join events
  via QR codes, discover other attendees, send connection requests, and chat once connected. The backend runs
  on Firebase (Auth, Firestore, Storage, Cloud Functions) with FCM for notifications and RevenueCat for
  premium subscriptions. I owned the full architecture, UX flows, and deployment process, including App Store
  review and release management