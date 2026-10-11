# On-Ground.ai Enterprise Call Centre Web Application

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://callcenter-ka5fz1q78-lakshmeesha-gowdas-projects.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A high-fidelity, production-ready Call Centre and retail tele-consultation platform built with React and Vite. Designed specifically for offline retail store hubs and assisted sales operations (implemented for The Sleep Company RT Nagar Hub).

---

## 🚀 Live Demo & Deployment

* **Production URL:** [https://callcenter-ka5fz1q78-lakshmeesha-gowdas-projects.vercel.app/](https://callcenter-ka5fz1q78-lakshmeesha-gowdas-projects.vercel.app/)
* **Repository:** [https://github.com/Lakshmeeshagowda/callcenter_App](https://github.com/Lakshmeeshagowda/callcenter_App)

---

## Overview

The On-Ground Call Centre platform connects store walk-in data, tele-consultation queues, and coaching directives into a unified agent workspace. The interface provides real-time customer context, lead prioritization scores, live telephony simulation with Standard Operating Procedure (SOP) guidance, and collaborative team communication channels.

---

## Core Features

### 1. Dashboard View
* **Hero Banner:** Displays agent identity (`Arvind Rajan`), cluster context (`The Sleep Company · Call Centre · RT Nagar Hub`), real-time queue status (`On Queue`), and period filtering.
* **KPI Metrics:** Four operational indicators with trend signals:
  * **76** OG Score (+13)
  * **4m 12s** Average Handle Time (-8%)
  * **94%** CSAT Today (+2pt)
  * **2** Leads in Active Queue (Live)
* **My Progress (Today):** Tracks daily output (3 Leads Created, 2 Leads Called).
* **Who's Waiting:** Real-time waiting queue with urgency timers and priority indicators.
* **My Earnings:** Monthly target tracker (₹5,200 earned) with milestone progress and breakdown of conversion incentives and coached move bonuses.
* **My Tasks:** Interactive task dispatch triggers for callbacks, hot leads, and pending call outcomes.
* **Performance Analytics:**
  * Calls Handled (Last 7 Days) bar chart.
  * CSAT Trend (Last 7 Days) sparkline with weekly mean tracking.

### 2. Lead Analysis Overlay (Modal)
* Accessible directly from task cards or lead rows.
* **Scoring Engine:**
  * Ideal Customer Profile (ICP) score (up to 96/100) with detailed progress breakdowns across Budget Fit, Timeline Urgency, Decision Authority, and Product Match.
  * Lead Intent score based on dwell time and catalog interaction.
* **Context & Intelligence:**
  * Collapsible detected buying signals (Financing, Health Need, Timeline Urgency).
  * Narrative customer journey ("Story so far").
  * Recommended primary product, cross-sell attachments, and EMI financing options.
  * Actionable coaching tips.
* **Navigation:** Previous/Next paging controls across the lead dataset and one-click call launching.

### 3. Planner & Lead Queues (Plan View)
* **Calls to Make:** Attractiveness-ranked leads with expandable drawers detailing trial notes, financing plans, and customer signals.
* **Incoming (Missed Calls):** Dedicated queue summarizing missed inbound calls and total value at stake (₹81,860) with instant call-back actions.
* **Recent Calls:** Comprehensive call log categorized by type (outgoing, incoming, missed) with expandable SOP compliance audit notes.
* **Practise a Call:** Scenario-based audio simulation for training on walk-out recoveries and financing objections.

### 4. Interactive Telephony Simulation (Modal)
* **Call Lifecycle:** Outbound dialing state, connected state with live animated audio waveform, and active call stopwatch.
* **Real-Time SOP Assistant:** Step-by-step guidance prompts (Opening Greeting, Value Anchor, Closing Pitch).
* **Call Controls:** Mute/unmute microphone and end call actions.
* **CRM Outcome Logger:** Mandatory disposition selection (Store Trial Booked, Callback Requested, Quote Sent via SMS, Not Interested) with notes entry and automated feedback toasts.

### 5. Shift & Meeting Calendar
* Month grid view for October 2026 with category-specific event indicator dots (Store Sync, Coaching, Callback).
* Current date indicator (`11 NOW`), month switcher, and *Today* reset button.
* Day-specific agenda drawer displaying shift schedules and call obligations.

### 6. Pulse Communication & AI Sales Coach
* **AvaniBot:** AI coaching interface with one-click shift recommendations and objection handling guides.
* **Channel Directory:** Role and task agents (`#callcentre-agent`), store channels, and team kudos recognition feed.
* **Channel Performance Bar:** Real-time revenue progress (₹420K / ₹500K), ATV, and conversation targets.
* **Pinned "Needs Your Input" Card:**
  * Manager performance debrief (strengths and improvement areas).
  * Shift guideline acknowledgment action (`Got it`).
  * Actionable task response buttons (`Done`, `Not yet`, `Need help`, `Calling now`, `Reassign`).
* **Live Chat:** Interactive messaging interface with simulated automated coaching responses.

### 7. Compliance & Legal
* Integrated enterprise **Privacy Policy** and **Terms of Service** modals accessible from the sidebar.
* Dedicated SVG favicon and clean meta configuration.

---

## Design System & Constraints

The interface strictly complies with professional enterprise UI standards:
* **No purple gradients** or decorative gimmicks.
* **No pill-shaped buttons**: Strict rectangular buttons with 4px to 6px border radii.
* **No emoji icons**: SVG vector icons exclusively from Lucide React.
* **No em dashes**: Clear, standard punctuation.
* **Palette:** Deep forest green (`#0f231b`) and dark navy slate (`#101e38`) paired with crisp slate backgrounds and emerald status indicators.

---

## Technology Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Icons:** Lucide React
* **Styling:** Custom Vanilla CSS Design System (`src/index.css`)

---

## Getting Started

### Prerequisites
* Node.js (version 18.0.0 or higher)
* npm (version 9.0.0 or higher)

### Installation
Clone the repository and install project dependencies:

```bash
git clone https://github.com/Lakshmeeshagowda/callcenter_App.git
cd callcenter_App
npm install
```

### Development Server
Run the local development server:

```bash
npm run dev
```

The application will be accessible at: `http://localhost:3000/`

### Production Build
Generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Live Cloud Deployment
The project is configured for seamless deployment on Vercel (`vercel.json` included):
* **Live Deployment:** [https://callcenter-ka5fz1q78-lakshmeesha-gowdas-projects.vercel.app/](https://callcenter-ka5fz1q78-lakshmeesha-gowdas-projects.vercel.app/)

---

## Directory Structure

```
callcenter_App/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Calendar/
│   │   │   └── CalendarView.jsx
│   │   ├── Dashboard/
│   │   │   ├── CallsChart.jsx
│   │   │   ├── CsatChart.jsx
│   │   │   ├── DashboardView.jsx
│   │   │   ├── KpiCards.jsx
│   │   │   ├── MyEarnings.jsx
│   │   │   ├── MyProgress.jsx
│   │   │   ├── MyTasks.jsx
│   │   │   └── WhosWaiting.jsx
│   │   ├── Modals/
│   │   │   ├── CallSimulationModal.jsx
│   │   │   ├── LeadsModal.jsx
│   │   │   ├── PrivacyPolicyModal.jsx
│   │   │   └── TermsConditionsModal.jsx
│   │   ├── Navigation/
│   │   │   ├── Sidebar.jsx
│   │   │   └── TopBar.jsx
│   │   ├── Plan/
│   │   │   ├── CallsToMake.jsx
│   │   │   ├── IncomingCalls.jsx
│   │   │   ├── PlanView.jsx
│   │   │   └── RecentCalls.jsx
│   │   └── Pulse/
│   │       ├── PulseChannel.jsx
│   │       ├── PulseHome.jsx
│   │       └── PulseView.jsx
│   ├── data/
│   │   ├── callCenterData.js
│   │   └── leadsModalData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## License

Enterprise proprietary application developed for On-Ground.ai call center workflows.
