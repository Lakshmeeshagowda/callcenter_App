export const LEADS_MODAL_DATA = [
  {
    id: "lead_mukunda",
    name: "Mukunda",
    initials: "MK",
    phone: "+91 97401 22910",
    city: "Bangalore (Whitefield)",
    badge: "2h left",
    badgeBg: "#e1f5ee",
    badgeColor: "#0f5132",
    product: "Ortho GRID · ₹8,490",
    expectedValue: 8490,
    expectedValueFormatted: "₹8,490",
    icpScore: 90,
    leadIntentScore: 84,
    subscores: [
      { label: "Budget Fit", score: 92, color: "#1d9e75" },
      { label: "Timeline Urgency", score: 88, color: "#1d9e75" },
      { label: "Decision Authority", score: 95, color: "#1d9e75" },
      { label: "Product Match", score: 86, color: "#1d9e75" }
    ],
    storySoFar: "Spoke with store ASM on Thursday regarding back pain relief. Received doctor recommendation for Patented GRID technology. Price sensitive - quote the 12-month interest plan.",
    preferredProduct: "Ortho GRID 8-inch Queen",
    crossSell: "Contoured Cervical Pillow (₹1,499)",
    financing: "12-month low-interest plan pre-calculated",
    buyingSignals: [
      {
        id: "bs1",
        category: "Financing Related",
        text: "Budget-conscious, asked about split payment and 12-month EMI options",
        strength: "High",
        badgeColor: "#d97706"
      },
      {
        id: "bs2",
        category: "Health Need",
        text: "Doctor recommended firm orthopaedic support for recurring lumbar pain",
        strength: "Critical",
        badgeColor: "#1d9e75"
      },
      {
        id: "bs3",
        category: "Urgency",
        text: "Current competitor mattress causing severe morning stiffness",
        strength: "High",
        badgeColor: "#2563eb"
      }
    ],
    coachingTips: [
      "Name the shopper early in the conversation (+23.6pp conversion lift measured across retail stores).",
      "Lead with the 100-night risk-free trial to reduce purchase hesitation.",
      "Quote the 12-month EMI breakdown: approximately ₹765 per month."
    ],
    timeline: [
      { date: "08 Oct, 3:30 PM", text: "Visited Whitefield retail store · Tested Ortho GRID for 12 minutes", channel: "Store Floor" },
      { date: "09 Oct, 11:15 AM", text: "Inquired online regarding EMI tenure and return policy", channel: "Web Chat" },
      { date: "11 Oct, 10:00 AM", text: "Routed to RT Nagar hub for assisted telephone follow-up", channel: "Routing Engine" }
    ]
  },
  {
    id: "lead_ritu",
    name: "Ritu S.",
    initials: "RS",
    phone: "+91 98450 33190",
    city: "Bangalore (Indiranagar)",
    badge: "Untouched 24h",
    badgeBg: "#fef3c7",
    badgeColor: "#92400e",
    product: "Smart Luxe Mattress · ₹13,390",
    expectedValue: 13390,
    expectedValueFormatted: "₹13,390",
    icpScore: 96,
    leadIntentScore: 92,
    subscores: [
      { label: "Budget Fit", score: 98, color: "#1d9e75" },
      { label: "Timeline Urgency", score: 94, color: "#1d9e75" },
      { label: "Decision Authority", score: 96, color: "#1d9e75" },
      { label: "Product Match", score: 95, color: "#1d9e75" }
    ],
    storySoFar: "Walked into Indiranagar store on Saturday. Tested Smart Luxe medium firm for 15 mins. Left without purchase due to delivery timeline queries. Expressed urgency for housewarming next week.",
    preferredProduct: "Smart Luxe Ortho 6-inch King",
    crossSell: "Bamboo Silk Mattress Protector (₹2,199)",
    financing: "6-month No-Cost EMI pre-approved",
    buyingSignals: [
      {
        id: "bs4",
        category: "Product Fit",
        text: "Tested mattress in-store for 15+ minutes with spouse; rated comfort 9/10",
        strength: "High",
        badgeColor: "#1d9e75"
      },
      {
        id: "bs5",
        category: "Timeline",
        text: "Need guaranteed delivery before upcoming housewarming ceremony next Friday",
        strength: "Critical",
        badgeColor: "#dc2626"
      },
      {
        id: "bs6",
        category: "Cross-Sell",
        text: "Enquired about matching Bamboo Silk Hypoallergenic Mattress Protector",
        strength: "Medium",
        badgeColor: "#2563eb"
      }
    ],
    coachingTips: [
      "Confirm Indiranagar express 48-hour delivery availability right after your greeting.",
      "Offer the complimentary mattress protector bundle if the order is confirmed today.",
      "Reassure about the 10-year comprehensive warranty."
    ],
    timeline: [
      { date: "09 Oct, 5:45 PM", text: "Walked into Indiranagar Flagship · Detailed mattress trial", channel: "Store Floor" },
      { date: "10 Oct, 10:30 AM", text: "Delivery slot confirmed with local dispatch hub", channel: "Logistics Hub" },
      { date: "11 Oct, 9:15 AM", text: "Assigned to Arvind Rajan for priority outbound confirmation", channel: "Routing Engine" }
    ]
  },
  {
    id: "lead_ananya",
    name: "Ananya Sharma",
    initials: "AS",
    phone: "+91 99002 55410",
    city: "Bangalore (Koramangala)",
    badge: "High Ticket",
    badgeBg: "#e0f2fe",
    badgeColor: "#0369a1",
    product: "Elev8 Smart Recliner Bed · ₹44,990",
    expectedValue: 44990,
    expectedValueFormatted: "₹44,990",
    icpScore: 88,
    leadIntentScore: 82,
    subscores: [
      { label: "Budget Fit", score: 96, color: "#1d9e75" },
      { label: "Timeline Urgency", score: 78, color: "#d97706" },
      { label: "Decision Authority", score: 92, color: "#1d9e75" },
      { label: "Product Match", score: 88, color: "#1d9e75" }
    ],
    storySoFar: "Visited Koramangala store with family. Loved Zero-G preset angle for evening reading and acid reflux relief. Waiting for manager quote on bundle package.",
    preferredProduct: "Dual Motor Elev8 Recliner Bed with Smart Remote",
    crossSell: "Zero-G Memory Mattress (₹18,990)",
    financing: "HDFC 24-month EMI eligible",
    buyingSignals: [
      {
        id: "bs7",
        category: "Ticket Size",
        text: "High purchasing power; currently completing master bedroom renovation",
        strength: "High",
        badgeColor: "#1d9e75"
      },
      {
        id: "bs8",
        category: "Specific Feature",
        text: "Interested in Zero-G sleep preset and dual independent elevation controls",
        strength: "High",
        badgeColor: "#2563eb"
      }
    ],
    coachingTips: [
      "Highlight the dual-motor independent control feature for partner comfort.",
      "Explain the white-glove assembly and room setup service provided by certified engineers."
    ],
    timeline: [
      { date: "07 Oct, 4:00 PM", text: "Comprehensive demo at Koramangala store", channel: "Store Floor" },
      { date: "10 Oct, 2:00 PM", text: "Requested detailed specs sheet and warranty details", channel: "WhatsApp" },
      { date: "11 Oct, 11:00 AM", text: "Added to high-ticket outbound queue", channel: "Routing Engine" }
    ]
  }
];
