# FTS Digital Suite — Portfolio Projects for BrainnCo

**Prepared for:** [brainnco.com](https://brainnco.com)  
**Client / brand:** Fast Technology Solutions (FTS) — Kingdom of Saudi Arabia  
**Products covered:** `fts-admin` · `fts-employee` · `fts-mobile` · `fts-site`  
**Live surfaces:** [admin.fts-ksa.com](https://admin.fts-ksa.com) · [employee.fts-ksa.com](https://employee.fts-ksa.com) · App Store & Google Play · FTS corporate site  

Use this document as paste-ready copy for project cards, case studies, and tech strips.

---

## How to publish on BrainnCo

| Option | Recommendation |
|--------|----------------|
| **One umbrella case study** | Best — “FTS Operations Suite” (all four products as one delivery) |
| **Four separate projects** | Use sections 2–5 below as individual cards |
| **Tags / filters** | See Keywords at the end |

---

# 1. Umbrella case study (recommended)

### Title
**FTS Operations Suite — Admin, Employee, Mobile & Corporate Site**

### Subtitle
End-to-end workforce, asset, and field-operations platform for a Saudi telecom & infrastructure company — plus a bilingual corporate site that sells the same digital capability.

### Short summary (≈80 words)
BrainnCo delivered a production digital suite for Fast Technology Solutions: a leadership **Admin Portal**, a role-aware **Employee Portal**, a dual-role **native mobile app** (Admin + Employee in one binary), and a **bilingual corporate website**. The suite runs people, regions, projects, assets, vehicles, SIMs, EHS tools, approvals, tasks, files, and audit on a shared secure backend — with Wasabi object storage and store-ready mobile distribution.

### Attract visitors — key highlights
- **ERP-style operations** without a heavy legacy ERP — people, assets, fleet, approvals, and audit in one governed system  
- **Two web portals + one mobile app** sharing the same source of truth  
- **Role-based security** — Super User, Administrator, Regional PM, QC, field roles  
- **Wasabi (S3-compatible) file vaults** for employee files and project/PP reports  
- **Live in production** — custom domains + App Store / Google Play  
- **Bilingual marketing site (EN/AR)** with IT Solutions, telecom, and construction pillars  

### Modules visitors care about
| Area | What users get |
|------|----------------|
| HRMS-lite | Employees, roles, invites, access approval, org reporting lines |
| Asset management | Inventory, assign/return, QC loops, “who has what” |
| Fleet & SIM | Vehicles and SIMs with assignment workflows |
| EHS | Safety/tool tracking and ownership |
| Approvals | Leave, assets, vehicles, transfers — multi-step chains |
| Tasks | Admin → PM → team with history |
| Documents & storage | Company docs, software library, Wasabi employee/PP files |
| Mobile field ops | Receipts with camera, PM assign tools, admin approvals on phone |
| Corporate site | Services, projects, equipment, platforms, IT catalogue |

### Integrations
- **Supabase** — Auth, PostgreSQL, Row Level Security (RLS)  
- **Wasabi** — S3-compatible object storage (employee files, PP reports)  
- **Resend** — transactional email (admin)  
- **PDF / Excel tooling** — operational exports  
- **Expo / App Store / Google Play** — mobile distribution  
- **Microsoft narrative (site)** — SharePoint, Power Platform, EPM positioning for FTS IT offerings  

### Security
- Email/password auth with invite, reset, and email-change verification  
- Pending-access gate until an admin activates the user  
- Fine-grained **RBAC** + Postgres **RLS**  
- Region-scoped data for Project Managers  
- Full **audit logs** (actor, entity, old/new values)  
- Secure mobile session storage (`expo-secure-store`)  
- Least-privilege Wasabi prefixes per region  

### Tech stack
`Next.js` · `TypeScript` · `React` · `Supabase` · `Tailwind CSS` · `Wasabi / AWS S3 SDK` · `Expo` · `React Native` · `next-intl` · `GSAP` · `Resend` · `pdf-lib` · `xlsx`

### Suggested BrainnCo meta
- **Industry:** Telecom / Field Operations / Enterprise Software  
- **Type:** Custom portals · Mobile app · Corporate site · Cloud integrations  
- **Region:** Saudi Arabia  

---

# 2. Project card — FTS Admin Portal

### Title
**FTS Admin Portal — Enterprise Operations Command Center**

### Live URL
https://admin.fts-ksa.com  

### Folder / codebase
`fts-admin`

### Short summary
A Next.js admin portal for Fast Technology Solutions leadership and operations teams. It centralises employees, regions, projects, teams, assets, vehicles, SIMs, EHS tools, approvals, tasks, documents, exports, and audit — with Super User–driven RBAC and Wasabi-backed file management.

### Feature bullets (attractive)
- Dashboard with operational stats (employees, assets, vehicles, approvals, tasks) and region filters for PMs  
- Full employee lifecycle: create, roles, region/project assignment, invite & access approval  
- Asset Management System: register, assign, return, QC assignment, ownership visibility  
- Fleet, SIM, and EHS tool assignment with receipt confirmation trails  
- Multi-step approvals (leave, assets, vehicles, transfers)  
- Task workflow with comments and history  
- Employee files & PP reports over Wasabi; company documents & software library  
- Audit log with filters and CSV-oriented export paths  

### Integrations
Supabase Auth + Postgres · Wasabi (S3) · Resend · pdf-lib · xlsx · archiver  

### Security
RBAC (Super User / Administrator / Regional PM / Admin Staff) · permission codes · RLS · pending/active/disabled accounts · audit trail · region-scoped access  

### Tech stack
Next.js · TypeScript · React · Supabase · Tailwind · AWS S3 SDK (Wasabi) · Resend  

### Paste-ready one-liner
*Enterprise admin portal that runs field operations like a lightweight ERP — people, assets, fleet, approvals, and audit — with role-based security and cloud object storage.*

---

# 3. Project card — FTS Employee Portal

### Title
**FTS Employee Portal — Self-Service Operations Workspace**

### Live URL
https://employee.fts-ksa.com  

### Folder / codebase
`fts-employee`

### Short summary
A role-aware employee web portal on the same secure backend as Admin. Field staff, Project Managers, and QC users manage assets, leave, tasks, transfers, receipts, PM assignments, and Wasabi files from a focused self-service UI.

### Feature bullets (attractive)
- Personal dashboard: assets, leave, tasks, notifications  
- PM workspace: assign assets / vehicles / SIMs / EHS tools; who-has views  
- QC ↔ PM request loops (returns, requests from QC, request-to-PM)  
- Transfer requests and resource receipt confirmations  
- PP workspace: teams, leaves, report browsing  
- My files (Wasabi) and software library access  
- Profile & password management; portal blocked if no employee record  

### Integrations
Supabase · Wasabi (employee files + PP reports) · ZIP/archive downloads  

### Security
Authenticated employee linkage · role checks (Project Manager, QC, …) · controlled Wasabi access · same RLS foundation as Admin  

### Tech stack
Next.js · TypeScript · React · Supabase · Wasabi / S3 SDK · Tailwind  

### Paste-ready one-liner
*Self-service operations portal for field and office staff — approvals, assets, and files in one secure workspace, with PM/QC workflows built in.*

---

# 4. Project card — FTS Employee Mobile

### Title
**FTS Employee Mobile — Dual-Role Field App (iOS & Android)**

### Live distribution
App Store & Google Play (FTS Employee)  

### App IDs
- iOS: `com.fts-ksa.employee`  
- Android: `com.ftsksa.employee`  

### Folder / codebase
`fts-mobile` (Expo app)

### Short summary
One native mobile application for both **Admin** and **Employee** roles. Staff sign in with company credentials and land in the workspace that matches their access — approvals and oversight for Admin; day-to-day field and office work for Employee — including camera-backed receipt confirmations and PM assignment tools.

### Feature bullets (attractive)
- Single app, dual role — no separate admin APK/IPA to maintain  
- Home, menu, profile, secure password change  
- Tasks, leave, assets, vehicles, SIMs, EHS tools  
- Transfers & receipt confirmations with camera for condition photos  
- On-device PM tools: assign assets/SIMs/vehicles, who-has, request asset  
- Admin approvals queue on mobile  
- Push notifications via Expo  

### Integrations
Supabase · Expo Notifications · Camera / Image Picker · Document Picker · Secure Store  

### Security
Secure credential storage · permission-scoped camera usage · same backend RBAC as web portals  

### Tech stack
Expo 54 · React Native · Expo Router · TypeScript · Supabase  

### Paste-ready one-liner
*Production iOS & Android app — one binary for Admin and Employee — field ops, approvals, and asset receipt with camera-backed confirmations.*

---

# 5. Project card — FTS Corporate Site

### Title
**FTS Corporate Website — Bilingual Brand & IT Solutions Platform**

### Folder / codebase
`fts-site`

### Short summary
A modern bilingual (English / Arabic) corporate website for Fast Technology Solutions. It presents telecom, construction, and **IT Solutions** as capability pillars — with service catalogues, project proof, equipment register, platforms showcase, and contact routing into the right division.

### Feature bullets (attractive)
- EN/AR with RTL-ready navigation (`next-intl`)  
- Home carousels and motion-led storytelling (GSAP)  
- Services, Projects, Equipment, Clients, Certifications, Platforms, Careers, Contact  
- **IT Solutions funnel:** listing → service detail (scopes + product screens) → project detail  
- Catalogue coverage: SharePoint, ERP, EPM/PPMS/PMO, HRMS/ATS/AMS, custom portals, mobile, AI, Power Platform, Wasabi storage, IT services  
- Platforms page highlighting Admin Portal, Employee Portal, and mobile  
- Division-aware contact (e.g. IT enquiries)  

### Integrations / stack story
Next.js 16 · next-intl · GSAP · Tailwind CSS 4 · TypeScript · static capability content architecture  

### Security / trust
Public marketing surface; portals linked as authenticated products; certification & client trust strips  

### Paste-ready one-liner
*Bilingual corporate platform that positions infrastructure and digital delivery — with a structured IT solutions funnel from service listing to project proof.*

---

# 6. Ready-to-paste BrainnCo blocks

Copy each block into a project form.

---

### Block A — Umbrella

**Title:** FTS Operations Suite — Admin, Employee, Mobile & Corporate Site  

**Summary:**  
Production digital suite for Fast Technology Solutions (KSA): Admin Portal, Employee Portal, dual-role native mobile app, and bilingual corporate site. Shared secure backend for people, assets, fleet, EHS, approvals, tasks, files, and audit — with Wasabi storage and live store distribution.

**Bullets:**
1. ERP-style operations: HRMS-lite, assets, fleet, SIM, EHS, approvals, tasks  
2. Two web portals + one Admin/Employee mobile app on one backend  
3. Supabase Auth + RLS, fine-grained RBAC, region scoping, full audit trail  
4. Wasabi S3-compatible storage for employee files and PP reports  
5. Live domains + App Store / Google Play; EN/AR corporate & IT catalogue  

**Stack:** Next.js, TypeScript, React, Supabase, Wasabi, Expo, React Native, next-intl, GSAP, Resend  

**Links:** admin.fts-ksa.com · employee.fts-ksa.com · App Store / Play · FTS site  

---

### Block B — Admin only

**Title:** FTS Admin Portal — Enterprise Operations Command Center  

**Summary:**  
Leadership portal for workforce, regions, projects, assets, vehicles, SIMs, EHS, approvals, tasks, documents, and audit — with Super User RBAC and Wasabi file management. Live at admin.fts-ksa.com.

**Bullets:**
1. People, org structure, and access approval workflows  
2. Asset, fleet, SIM, and EHS assignment with ownership visibility  
3. Multi-step approvals and task workflows with history  
4. Wasabi employee files / PP reports and operational exports  
5. RBAC + RLS + complete audit logging  

**Stack:** Next.js, TypeScript, Supabase, Tailwind, Wasabi, Resend, pdf-lib, xlsx  

---

### Block C — Employee web only

**Title:** FTS Employee Portal — Self-Service Operations Workspace  

**Summary:**  
Role-aware employee portal for field and office staff — assets, leave, tasks, PM/QC flows, receipts, transfers, and personal/PP files on Wasabi. Live at employee.fts-ksa.com.

**Bullets:**
1. Self-service dashboard for daily operations  
2. PM assignment tools and QC request loops  
3. Receipt confirmations and transfer requests  
4. Wasabi My Files and PP report browsing  
5. Role-gated APIs on the shared secure backend  

**Stack:** Next.js, TypeScript, Supabase, Wasabi, Tailwind  

---

### Block D — Mobile only

**Title:** FTS Employee Mobile — Dual-Role Field App  

**Summary:**  
One iOS/Android app for Admin and Employee roles — tasks, leave, assets, fleet, EHS, transfers, camera receipts, PM tools, and approvals. Shipped to App Store and Google Play.

**Bullets:**
1. Single binary, role-aware Admin & Employee workspaces  
2. Field assignment and “who has” tools for PMs  
3. Camera-backed receipt / return confirmations  
4. Push notifications and secure session storage  
5. Same Supabase backend and RBAC as the web portals  

**Stack:** Expo, React Native, Expo Router, TypeScript, Supabase  

---

### Block E — Site only

**Title:** FTS Corporate Website — Bilingual Brand & IT Platform  

**Summary:**  
EN/AR corporate site for FTS covering telecom, construction, and IT Solutions — with service catalogues, project proof, equipment, platforms showcase, and contact routing.

**Bullets:**
1. Full bilingual experience with RTL support  
2. Motion-led home and capability storytelling  
3. IT Solutions path: services → scopes → projects  
4. Platforms page for Admin, Employee, and mobile products  
5. SharePoint, ERP, EPM, AI, Wasabi, and automation positioning  

**Stack:** Next.js 16, next-intl, GSAP, Tailwind CSS 4, TypeScript  

---

# 7. Keywords / tags for BrainnCo filters

```
ERP, HRMS, Asset Management, Approvals Workflow, RBAC, Audit Trail,
Supabase, Wasabi, S3 Storage, Next.js, React, TypeScript,
React Native, Expo, Mobile App, iOS, Android,
Corporate Website, Bilingual, Arabic, English, RTL,
Field Operations, Telecom, Saudi Arabia, Enterprise Portal,
Employee Self-Service, Project Manager Tools, EHS, Fleet Management,
Cloud Storage, Email Integration, Push Notifications, Security
```

---

# 8. Suggested gallery / screenshots (what to upload)

| Product | Suggested shots (non-sensitive) |
|---------|----------------------------------|
| Admin | Login · Dashboard · Assets list · Approvals · Users/roles (blur PII) |
| Employee | Login · Dashboard · PM workspace · My files |
| Mobile | Sign-in · Role home · Who-has / assign · Receipt camera flow |
| Site | Home hero · IT Solutions listing · Platforms · Project detail |

> Tip: Prefer login screens and UI chrome for public portfolios; blur names, IDs, and personal data on operational dashboards.

---

# 9. Optional “Challenges & outcomes” (case-study section)

**Challenge**  
FTS needed one governed system for field workforce and assets across regions — not spreadsheets and email chains — plus a public brand site that could also sell digital delivery.

**Approach**  
Shared Supabase data model and RLS; separate Admin and Employee UX; one Expo app with role routing; Wasabi for durable files; bilingual Next.js marketing site aligned with live portals.

**Outcomes**
- Production portals on dedicated domains  
- Native app live for Admin & Employee roles  
- Traceable assignments, approvals, and audit history  
- Cost-efficient object storage for operational documents  
- Corporate site that funnels IT and infrastructure enquiries  

---

*Document generated from the `admin` monorepo analysis of `fts-admin`, `fts-employee`, `fts-mobile`, and `fts-site`. Private client IP — review before public publish and redact any confidential metrics or screenshots.*
