export const AGENT_PROFILE = {
  name: "Arvind Rajan",
  initials: "AR",
  company: "The Sleep Company",
  role: "Call Centre Specialist",
  unit: "Call Centre · RT Nagar Hub",
  status: "On Queue",
  ogScore: 76,
  ogScoreChange: 13,
  rank: "#3",
  rankArea: "RT Nagar Store Cluster",
  notificationsCount: 4
};

export const KPI_METRICS = [
  {
    id: "og_score",
    label: "OG SCORE™",
    value: "76",
    change: "+13",
    changeType: "up",
    period: "vs last week"
  },
  {
    id: "aht",
    label: "AVG HANDLE TIME",
    value: "4m 12s",
    change: "-8%",
    changeType: "good_down",
    period: "vs target 4m 30s"
  },
  {
    id: "csat",
    label: "CSAT TODAY",
    value: "94%",
    change: "+2pt",
    changeType: "up",
    period: "32 ratings"
  },
  {
    id: "queue",
    label: "IN QUEUE",
    value: "2",
    change: "live",
    changeType: "neutral",
    period: "priority wait"
  }
];

export const MY_PROGRESS = {
  leadsCreated: 3,
  leadsCreatedChange: "+1",
  leadsCalled: 2,
  leadsCalledChange: "+2",
  targetCalls: 18
};

export const WHOS_WAITING = [
  {
    id: "w1",
    name: "Priya Iyer",
    detail: "Likely billing dispute - flagged before",
    waitTime: "4m 20s",
    severity: "urgent",
    phone: "+91 98860 14820",
    category: "Billing"
  },
  {
    id: "w2",
    name: "Suresh Nair",
    detail: "Plan upgrade enquiry - Ortho GRID",
    waitTime: "1m 50s",
    severity: "moderate",
    phone: "+91 97412 88201",
    category: "Upgrade"
  }
];

export const MY_EARNINGS = {
  month: "October 2026",
  current: 5200,
  currentFormatted: "₹5,200",
  coachedMovesAmount: "₹1,700",
  slabRange: "₹800 to ₹6,000 slab",
  targetSlab: 6000,
  progressPercentage: 86.6,
  breakdown: [
    { label: "Base conversion incentive", amount: "₹3,500" },
    { label: "Coached SOP execution bonus", amount: "₹1,700" },
    { label: "Next tier milestone (₹6,000)", amount: "₹800 to reach" }
  ]
};

export const MY_TASKS = [
  {
    id: "task_callbacks",
    title: "2 callbacks",
    subtitle: "next 4:30pm",
    count: 2,
    badgeColor: "blue",
    actionType: "callbacks"
  },
  {
    id: "task_leads",
    title: "2 hot leads",
    subtitle: "untouched 24h",
    count: 2,
    badgeColor: "amber",
    actionType: "open_leads_modal"
  },
  {
    id: "task_outcome",
    title: "1 outcome",
    subtitle: "to log",
    count: 1,
    badgeColor: "rose",
    actionType: "log_outcome"
  }
];

export const CALLS_HANDLED_7_DAYS = [
  { day: "Mon", calls: 18, target: 20 },
  { day: "Tue", calls: 22, target: 20 },
  { day: "Wed", calls: 15, target: 20 },
  { day: "Thu", calls: 26, target: 20 },
  { day: "Fri", calls: 20, target: 20 },
  { day: "Sat", calls: 12, target: 15 },
  { day: "Today", calls: 14, target: 20, isCurrent: true }
];

export const CSAT_TREND_7_DAYS = [
  { day: "Mon", score: 90 },
  { day: "Tue", score: 92 },
  { day: "Wed", score: 89 },
  { day: "Thu", score: 95 },
  { day: "Fri", score: 93 },
  { day: "Sat", score: 96 },
  { day: "Today", score: 94, isCurrent: true }
];

export const CALLS_TO_MAKE = [
  {
    id: "lead_ritu",
    name: "Ritu S.",
    initials: "RS",
    interested: "Smart Luxe Mattress · ₹13,390",
    score: 96,
    expectedValue: 13390,
    status: "Untouched 24h",
    preferredProduct: "Smart Luxe Ortho 6-inch King",
    crossSell: "Bamboo Silk Mattress Protector (₹2,199)",
    financing: "6-month No-Cost EMI pre-approved",
    storySoFar: "Walked into Indiranagar store on Saturday. Tested Smart Luxe medium firm for 15 mins. Left without purchase due to delivery timeline queries. Expressed urgency for housewarming next week.",
    phone: "+91 98450 33190",
    city: "Bangalore (Indiranagar)",
    buyingSignals: [
      { category: "Product Fit", text: "Tested mattress in-store for 15+ minutes with spouse" },
      { category: "Timeline", text: "Need delivery before upcoming housewarming next Friday" },
      { category: "Cross-Sell", text: "Asked about matching hypoallergenic protectors" }
    ]
  },
  {
    id: "lead_mukunda",
    name: "Mukunda",
    initials: "MK",
    interested: "Ortho GRID · ₹8,490",
    score: 90,
    expectedValue: 8490,
    status: "2h left",
    preferredProduct: "Ortho GRID 8-inch Queen",
    crossSell: "Contoured Cervical Pillow (₹1,499)",
    financing: "12-month low-interest plan pre-calculated",
    storySoFar: "Spoke with store ASM on Thursday regarding back pain relief. Received doctor recommendation for Patented GRID technology. Price sensitive - quote the 12-month interest plan.",
    phone: "+91 97401 22910",
    city: "Bangalore (Whitefield)",
    buyingSignals: [
      { category: "Financing", text: "Budget-conscious, asked about split payment options" },
      { category: "Need", text: "Doctor recommended firm orthopaedic support" },
      { category: "Urgency", text: "Current mattress causing morning stiffness" }
    ]
  },
  {
    id: "lead_ananya",
    name: "Ananya Sharma",
    initials: "AS",
    interested: "Elev8 Smart Recliner Bed · ₹44,990",
    score: 88,
    expectedValue: 44990,
    status: "High Ticket",
    preferredProduct: "Dual Motor Elev8 Recliner Bed with Smart Remote",
    crossSell: "Zero-G Memory Mattress (₹18,990)",
    financing: "HDFC 24-month EMI eligible",
    storySoFar: "Visited Koramangala store with family. Loved Zero-G preset angle for evening reading and acid reflux relief. Waiting for manager quote on bundle package.",
    phone: "+91 99002 55410",
    city: "Bangalore (Koramangala)",
    buyingSignals: [
      { category: "Ticket Size", text: "High purchasing power, luxury bedroom renovation" },
      { category: "Specific Feature", text: "Zero-G preset and dual independent elevation" }
    ]
  },
  {
    id: "lead_vikram",
    name: "Vikram Patel",
    initials: "VP",
    interested: "Elegance Fabric Bed Frame · ₹19,990",
    score: 84,
    expectedValue: 19990,
    status: "In Deliberation",
    preferredProduct: "Elegance Storage Bed (Grey Linen)",
    crossSell: "Fitted Percale Sheet Set (₹1,899)",
    financing: "Credit card 5% instant cashback active",
    storySoFar: "Needs dimension verification for master bedroom before finalizing order. Sent specification sheet via SMS.",
    phone: "+91 98803 77120",
    city: "Bangalore (HSR Layout)",
    buyingSignals: [
      { category: "Validation", text: "Checking room dimensions with interior carpenter" }
    ]
  },
  {
    id: "lead_deepa",
    name: "Deepa Sundaram",
    initials: "DS",
    interested: "Smart Ortho SnowTec · ₹16,490",
    score: 78,
    expectedValue: 16490,
    status: "Callback Scheduled",
    preferredProduct: "SnowTec Cooling Gel Mattress 6-inch",
    crossSell: "Cool-Gel Ortho Pillow Duo (₹2,299)",
    financing: "Standard debit card EMI",
    storySoFar: "Customer requested evening callback after work hours. Hot sleeper looking for cooling fabric technology.",
    phone: "+91 96112 44380",
    city: "Bangalore (JP Nagar)",
    buyingSignals: [
      { category: "Comfort", text: "Explicitly looking for cooling surface to prevent night sweats" }
    ]
  }
];

export const INCOMING_MISSED_CALLS = [
  {
    id: "inc_1",
    name: "Faizan A.",
    initials: "FA",
    timeInfo: "Missed Today 10:05 AM · Visited store / in CRM",
    expectedValueFormatted: "₹24,990 expected",
    expectedValue: 24990,
    phone: "+91 98451 90214",
    leadContext: "Warm lead · Viewed Elev8 adjustable base in store"
  },
  {
    id: "inc_2",
    name: "Kavitha R.",
    initials: "KR",
    timeInfo: "Missed Yesterday 4:40 PM · Warm lead",
    expectedValueFormatted: "₹24,990 expected",
    expectedValue: 24990,
    phone: "+91 97422 66310",
    leadContext: "Inquired about replacement warranty on older mattress"
  },
  {
    id: "inc_3",
    name: "Divya P.",
    initials: "DP",
    timeInfo: "Missed Yesterday 2:15 PM · Cold lead",
    expectedValueFormatted: "₹18,490 expected",
    expectedValue: 18490,
    phone: "+91 96321 44520",
    leadContext: "Downloaded catalog 3 days ago"
  },
  {
    id: "inc_4",
    name: "Ritu S.",
    initials: "RS",
    timeInfo: "Missed Today 11:20 AM · Visited store / in CRM",
    expectedValueFormatted: "₹13,390 expected",
    expectedValue: 13390,
    phone: "+91 98450 33190",
    leadContext: "High priority lead · Smart Luxe Mattress"
  },
  {
    id: "inc_5",
    name: "Unknown Contact",
    initials: "UN",
    timeInfo: "Missed Yesterday · No prior record",
    expectedValueFormatted: "New contact",
    expectedValue: 0,
    phone: "+91 99801 11209",
    leadContext: "Direct inbound call from store signage"
  }
];

export const RECENT_CALLS = [
  {
    id: "rec_1",
    name: "Mukunda R.",
    initials: "MK",
    type: "outgoing",
    time: "Today 10:42 AM",
    duration: "4m 12s",
    outcome: "Converted - Scheduled Trial",
    outcomeColor: "green",
    notes: "Presented 12-month EMI breakdown. Customer agreed to Indiranagar store demo visit tomorrow."
  },
  {
    id: "rec_2",
    name: "Kavitha R.",
    initials: "KR",
    type: "incoming",
    time: "Yesterday 3:15 PM",
    duration: "2m 05s",
    outcome: "Callback Requested",
    outcomeColor: "amber",
    notes: "Customer was in meeting. Asked to call back after 4:30 PM."
  },
  {
    id: "rec_3",
    name: "Unknown Caller",
    initials: "UN",
    type: "missed",
    time: "Yesterday 12:10 PM",
    duration: "0m 18s",
    outcome: "Disconnected",
    outcomeColor: "rose",
    notes: "Line dropped after greeting. Added to automatic re-dial queue."
  },
  {
    id: "rec_4",
    name: "Ritu S.",
    initials: "RS",
    type: "missed",
    time: "Today 11:20 AM",
    duration: "0m 00s",
    outcome: "Missed Call",
    outcomeColor: "rose",
    notes: "Customer called back while agent was on another call."
  },
  {
    id: "rec_5",
    name: "Faizan A.",
    initials: "FA",
    type: "missed",
    time: "Today 10:05 AM",
    duration: "0m 00s",
    outcome: "Missed Call",
    outcomeColor: "rose",
    notes: "Inbound callback missed. High ticket potential."
  },
  {
    id: "rec_6",
    name: "Faizan A.",
    initials: "FA",
    type: "outgoing",
    time: "Monday 4:20 PM",
    duration: "6m 40s",
    outcome: "Quote Sent via WhatsApp",
    outcomeColor: "blue",
    notes: "Detailed walkthrough of Elev8 warranty and delivery lead time."
  }
];

export const CALENDAR_EVENTS = [
  {
    date: "2026-10-04",
    title: "Team Induction & SOP Refresh",
    time: "10:00 AM - 11:30 AM",
    type: "training",
    location: "Online / RT Nagar Hub"
  },
  {
    date: "2026-10-07",
    title: "High-Ticket Lead Strategy Review",
    time: "2:30 PM - 3:30 PM",
    type: "review",
    location: "Meeting Room B"
  },
  {
    date: "2026-10-11",
    title: "Indiranagar Store Sync",
    time: "11:30 AM - 12:15 PM",
    type: "store_sync",
    location: "Indiranagar Flagship Video Call"
  },
  {
    date: "2026-10-11",
    title: "Coached Call Review with Mukunda",
    time: "2:00 PM - 2:45 PM",
    type: "coaching",
    location: "Audio Booth 2"
  },
  {
    date: "2026-10-11",
    title: "Priya Iyer Billing Dispute Callback",
    time: "4:30 PM - 5:00 PM",
    type: "callback",
    location: "Phone Queue"
  },
  {
    date: "2026-10-11",
    title: "Daily Outbound Wrap-up",
    time: "5:45 PM - 6:00 PM",
    type: "wrapup",
    location: "Desk"
  },
  {
    date: "2026-10-14",
    title: "Quality Assurance Calibration",
    time: "3:00 PM - 4:00 PM",
    type: "qa",
    location: "Central QA Board"
  },
  {
    date: "2026-10-18",
    title: "Manager 1-on-1 Performance Check",
    time: "11:00 AM - 11:45 AM",
    type: "review",
    location: "Manager Office"
  },
  {
    date: "2026-10-23",
    title: "Diwali Festive Campaign Launch Briefing",
    time: "4:00 PM - 5:15 PM",
    type: "briefing",
    location: "Main Floor Hub"
  }
];

export const PULSE_DATA = {
  activeChannel: "callcentre-agent",
  channels: [
    {
      id: "callcentre-agent",
      name: "callcentre-agent",
      badge: "Role agent",
      description: "Call Centre Agent · All call-centre staff · Your view - only your information",
      membersCount: 3,
      isRoleAgent: true
    },
    {
      id: "store-asm",
      name: "store-asm",
      badge: "Role agent",
      description: "Indiranagar & Koramangala store managers · Floor walk-in updates",
      membersCount: 6,
      isRoleAgent: true
    },
    {
      id: "tele-caller",
      name: "tele-caller",
      badge: "Task agent",
      description: "Outbound campaign dispatch and lead allocation",
      membersCount: 4,
      isRoleAgent: false
    },
    {
      id: "announcements",
      name: "announcements",
      badge: "Channel",
      description: "Company-wide updates and retail notices",
      membersCount: 42,
      isRoleAgent: false
    },
    {
      id: "kudos",
      name: "kudos",
      badge: "Kudos",
      description: "Celebrate retail conversions and stellar customer feedback",
      membersCount: 42,
      isRoleAgent: false
    }
  ],
  channelStats: {
    period: "MTD · 1-4 Oct 2026 · conversations = count",
    agentName: "Arvind Rajan · you",
    revenue: { current: "420K", target: "500K", percentage: 84 },
    atv: { current: "38.2K", target: "45K", percentage: 85 },
    conversations: { current: 168, target: 200, percentage: 84 }
  },
  pinnedInputCard: {
    title: "My Context & Tasks",
    forYouBadge: "FOR YOU",
    taskCount: 2,
    subtext: "From your manager · 2 tasks · 2 to action",
    incomingContext: {
      timestamp: "Sent 9:00am by AvaniBot for your manager",
      didWell: "Booked 6 store visits from callbacks",
      improve: "Greeting in the first 10 seconds on 71% of calls"
    },
    task1: {
      type: "Type 1 · Leads to follow up",
      leadName: "Priya Iyer",
      issue: "Billing dispute · call 4:30pm",
      status: "pending"
    },
    task2: {
      type: "Type 2 · Hot leads action",
      leadName: "2 hot leads untouched 24h",
      issue: "Action needed before escalation",
      status: "pending"
    }
  },
  initialMessages: [
    {
      id: "m1",
      sender: "AvaniBot",
      time: "9:00 AM",
      text: "Good morning Arvind. Today's digest is pinned at the top: incoming context and the tasks allocated to you.",
      badge: null,
      isAgent: false
    },
    {
      id: "m2",
      sender: "AvaniBot",
      time: "1:00 PM",
      text: "Reminder: Priya Iyer still needs an update on the billing resolution.",
      badge: "Nudge",
      isAgent: false
    },
    {
      id: "m3",
      sender: "AvaniBot",
      time: "5:00 PM",
      text: "Your end-of-day update goes to your manager at 6:00pm. Finish your tasks if you can.",
      badge: "Reminder",
      isAgent: false
    }
  ]
};
