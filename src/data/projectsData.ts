export type ProjectCategory = "ALL" | "WEBSITE DEVELOPMENT" | "MOBILE APPLICATIONS" | "DIGITAL MARKETING";

export interface MockupScreen {
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export interface HighlightSection {
  leftImage: string;
  rightImage: string;
  line1: string;
  highlightLine: string;
  line3: string;
  description: string;
}

export interface ProjectData {
  id: number;
  slug: string;
  category: ProjectCategory[];
  title: string;
  heroTitle: string;
  industry: string;
  location: string;
  service: string;
  description: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  gradientClass: string;
  bgImage: string;
  screenImage: string;
  mockups: MockupScreen[];
  highlight: HighlightSection;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "dusky",
    category: ["ALL", "MOBILE APPLICATIONS", "WEBSITE DEVELOPMENT"],
    title: "DUSKY",
    heroTitle: "Luxury at Your Fingertips with DUSKY",
    industry: "E-COMMERCE",
    location: "International",
    service: "E-commerce App Development",
    description: "A premium e-commerce platform for luxury perfumes, watches, and designer bags.",
    overviewParagraph1: "DUSKY represents the pinnacle of digital luxury, creating an immersive mobile shopping sanctuary for discerning consumers worldwide. The platform brings artisanal perfumes, haute couture timepieces, and limited-edition designer bags into a curated, frictionless digital storefront.",
    overviewParagraph2: "We designed and engineered a lightning-fast native mobile application and web commerce platform featuring high-definition visual storytelling, interactive 3D product previews, and VIP automated concierge checkout. Every interaction is sculpted to reflect the elegance and exclusiveness of the brand.",
    gradientClass: "bg-gradient-to-br from-[#4a1506] via-[#240a02] to-[#0a0301]",
    bgImage: "/images/Un Site Web qui reflète votre image.jpg",
    screenImage: "/images/dummy_ecommerce.png",
    mockups: [
      {
        title: "Bestsellers Catalog",
        subtitle: "Curated luxury fragrance editions",
        image: "/images/dummy_ecommerce.png",
        badge: "EXCLUSIVE",
      },
      {
        title: "Artisanal Timepieces",
        subtitle: "Haute horology showcase",
        image: "/images/Food Ordering App UI.jpg",
        badge: "3D AR VIEW",
      },
      {
        title: "VIP Concierge Checkout",
        subtitle: "One-click encrypted luxury checkout",
        image: "/images/ecommerce_solutions.png",
        badge: "INSTANT PAY",
      },
      {
        title: "Personal Vault",
        subtitle: "Order history & bespoke tracking",
        image: "/images/dummy_dashboard.png",
        badge: "MEMBER VIP",
      },
    ],
    highlight: {
      leftImage: "/images/Un Site Web qui reflète votre image.jpg",
      rightImage: "/images/about it.jpg",
      line1: "Bespoke Digital",
      highlightLine: "Luxury Experiences",
      line3: "Engineered to Perfection",
      description: "DUSKY redefines high-end online commerce by marrying flawless aesthetic design with sub-second payment architecture.",
    },
  },
  {
    id: 2,
    slug: "credocloud-suite",
    category: ["ALL", "WEBSITE DEVELOPMENT", "MOBILE APPLICATIONS"],
    title: "CredoCloud Suite",
    heroTitle: "Transforming CredoCloud Suite’s Enterprise Infrastructure Experience",
    industry: "Cloud & DevOps",
    location: "United States",
    service: "Cloud Infrastructure",
    description: "High-performance enterprise cloud infrastructure featuring automated DevOps deployment pipelines and real-time monitoring.",
    overviewParagraph1: "CredoCloud Suite is an advanced enterprise cloud infrastructure ecosystem designed to simplify hybrid cloud management, microservice deployments, and continuous integration pipelines. Our primary objective was to eliminate server provisioning friction and provide intuitive, centralized observability across global server clusters.",
    overviewParagraph2: "We developed a highly secure, high-performance portal and accompanying mobile supervisor app that integrates automated Kubernetes orchestration, zero-downtime rolling updates, and predictive latency analytics. Every transaction, deployment log, and resource utilization metric is safeguarded with military-grade encryption.",
    gradientClass: "bg-gradient-to-br from-[#102a45] via-[#091524] to-[#040911]",
    bgImage: "/images/tech_cutting_edge.png",
    screenImage: "/images/dummy_dashboard.png",
    mockups: [
      {
        title: "Cluster Telemetry",
        subtitle: "Live CPU & node latency matrix",
        image: "/images/dummy_dashboard.png",
        badge: "LIVE CORE",
      },
      {
        title: "Pipeline Automation",
        subtitle: "CI/CD staging step verification",
        image: "/images/smart_analytics.png",
        badge: "DEPLOYED",
      },
      {
        title: "Security Shield",
        subtitle: "Zero-trust IP filtering logs",
        image: "/images/smart_analytics_full.png",
        badge: "PROTECTED",
      },
      {
        title: "Cloud Auto-Scaler",
        subtitle: "Automated elastic traffic routing",
        image: "/images/tech_deployment.png",
        badge: "SCALING",
      },
    ],
    highlight: {
      leftImage: "/images/tech_cutting_edge.png",
      rightImage: "/images/tech_deployment.png",
      line1: "Seamless",
      highlightLine: "Cloud Scalability",
      line3: "Simplified for You",
      description: "CredoCloud empowers your DevOps teams to automate container workflows and achieve zero-downtime continuous deployment effortlessly.",
    },
  },
  {
    id: 3,
    slug: "apex-fintech-core",
    category: ["ALL", "MOBILE APPLICATIONS", "WEBSITE DEVELOPMENT"],
    title: "Apex FinTech Core",
    heroTitle: "Transforming Apex FinTech Core’s Next-Gen Digital Banking Experience",
    industry: "FinTech & Banking",
    location: "United Kingdom",
    service: "FinTech App & Platform",
    description: "Ultra-secure digital banking and payment processing architecture engineered for ultra-low latency global transactions.",
    overviewParagraph1: "Apex FinTech Core represents a breakthrough in high-frequency payment processing and modern corporate banking. Designed for financial institutions and cross-border payment aggregators, the platform delivers instantaneous multi-currency settlements with transparent fee structuring.",
    overviewParagraph2: "We crafted an intuitive native mobile application and enterprise web portal powered by asynchronous microservices. Integrating strict Know-Your-Customer (KYC) compliance automation and AI fraud anomaly detection, Apex guarantees seamless banking liquidity without sacrificing security.",
    gradientClass: "bg-gradient-to-br from-[#d44800] via-[#732500] to-[#1a0800]",
    bgImage: "/images/smart_analytics_hand.png",
    screenImage: "/images/smart_analytics_hand.png",
    mockups: [
      {
        title: "Liquid Asset Matrix",
        subtitle: "Multi-currency instant treasury",
        image: "/images/smart_analytics_hand.png",
        badge: "VERIFIED",
      },
      {
        title: "Global Wire Dispatch",
        subtitle: "Zero-fee international settlements",
        image: "/images/smart_analytics.png",
        badge: "FAST WIRE",
      },
      {
        title: "AI Threat Radar",
        subtitle: "Real-time automated anomaly shield",
        image: "/images/dummy_dashboard.png",
        badge: "SHIELDED",
      },
      {
        title: "Corporate Treasury",
        subtitle: "Virtual spending rules & limits",
        image: "/images/smart_analytics_full.png",
        badge: "ACTIVE",
      },
    ],
    highlight: {
      leftImage: "/images/tech_tailored.png",
      rightImage: "/images/team_working_office.png",
      line1: "Instantly Secure",
      highlightLine: "Global Transactions",
      line3: "Engineered for Growth",
      description: "Apex FinTech Core simplifies complex treasury management and empowers financial executives with real-time liquidity automation.",
    },
  },
  {
    id: 4,
    slug: "neuroai-analytics",
    category: ["ALL", "WEBSITE DEVELOPMENT", "DIGITAL MARKETING"],
    title: "NeuroAI Analytics",
    heroTitle: "Transforming NeuroAI Analytics’ Enterprise Intelligence & Data Experience",
    industry: "Artificial Intelligence",
    location: "United States",
    service: "AI Dashboard Development",
    description: "Predictive AI business intelligence dashboard engineered to forecast market trends and analyze user insights in real time.",
    overviewParagraph1: "NeuroAI Analytics is a powerful cognitive data engine that transforms unstructured big data into actionable, predictive strategic forecasts. Rather than relying on outdated batch reports, organizations utilize NeuroAI to interactively interrogate large datasets using natural language queries and dynamic visualizations.",
    overviewParagraph2: "Our engineering team implemented an advanced modular visualization interface backed by machine learning clustering pipelines. The system dynamically updates predictive trend lines and alerts business leaders to revenue anomalies before they impact quarterly outcomes.",
    gradientClass: "bg-gradient-to-br from-[#0e486b] via-[#062438] to-[#020e17]",
    bgImage: "/images/tech_discovery.png",
    screenImage: "/images/smart_analytics.png",
    mockups: [
      {
        title: "Predictive Radar",
        subtitle: "98.4% accuracy forecast engine",
        image: "/images/smart_analytics.png",
        badge: "AI CORE",
      },
      {
        title: "Audience Profiler",
        subtitle: "Behavioral cluster segmenting",
        image: "/images/dummy_marketing.png",
        badge: "INSIGHTS",
      },
      {
        title: "Revenue Simulator",
        subtitle: "What-if investment outcomes",
        image: "/images/dummy_dashboard.png",
        badge: "FORECAST",
      },
      {
        title: "Query Copilot",
        subtitle: "Natural language chart generation",
        image: "/images/smart_analytics_full.png",
        badge: "SMART",
      },
    ],
    highlight: {
      leftImage: "/images/tech_discovery.png",
      rightImage: "/images/workshowcase.jpg",
      line1: "Intelligent",
      highlightLine: "Predictive Analytics",
      line3: "At Your Fingertips",
      description: "NeuroAI replaces complex data engineering workflows with conversational business insights and real-time interactive charting.",
    },
  },
  {
    id: 5,
    slug: "omnicommerce-360",
    category: ["ALL", "MOBILE APPLICATIONS", "WEBSITE DEVELOPMENT"],
    title: "OmniCommerce 360",
    heroTitle: "Transforming OmniCommerce 360’s Retail & E-Commerce Ecosystem Experience",
    industry: "Retail & E-Commerce",
    location: "Singapore",
    service: "E-Commerce Suite & POS",
    description: "Scalable omni-channel retail ecosystem connecting live warehouse inventory with mobile AI-driven customer personalization.",
    overviewParagraph1: "OmniCommerce 360 bridges the physical and digital retail gap by unifying high-volume storefronts, point-of-sale systems, and automated warehouse fulfillment into a singular, ultra-responsive engine. Designed to scale seamlessly during massive global retail events.",
    overviewParagraph2: "We designed a frictionless consumer shopping mobile application combined with an advanced inventory telemetry backend. Customers benefit from personalized AR product visualization, instant checkout options, and exact down-to-the-minute delivery GPS tracking.",
    gradientClass: "bg-gradient-to-br from-[#4c5c31] via-[#2a341b] to-[#111709]",
    bgImage: "/images/ecommerce_solutions.png",
    screenImage: "/images/dummy_ecommerce.png",
    mockups: [
      {
        title: "Product Showroom",
        subtitle: "AR-assisted inventory showroom",
        image: "/images/dummy_ecommerce.png",
        badge: "AR VIEW",
      },
      {
        title: "One-Click Checkout",
        subtitle: "Encrypted instant global wallet",
        image: "/images/ecommerce_solutions.png",
        badge: "INSTANT",
      },
      {
        title: "Live GPS Tracker",
        subtitle: "Real-time courier telemetry",
        image: "/images/dummy_dashboard.png",
        badge: "ON ROUTE",
      },
      {
        title: "Rewards Ledger",
        subtitle: "Loyalty point compounding",
        image: "/images/smart_analytics.png",
        badge: "VIP CLUB",
      },
    ],
    highlight: {
      leftImage: "/images/ecommerce_solutions.png",
      rightImage: "/images/dummy_branding.png",
      line1: "Unified",
      highlightLine: "Omnichannel Retail",
      line3: "Designed to Scale",
      description: "OmniCommerce 360 delivers unprecedented conversions through lightning-fast load times and unified inventory syncing.",
    },
  },
  {
    id: 6,
    slug: "secureshield-zero",
    category: ["ALL", "WEBSITE DEVELOPMENT"],
    title: "SecureShield Zero",
    heroTitle: "Transforming SecureShield Zero’s Enterprise Cybersecurity & Threat Experience",
    industry: "Cybersecurity",
    location: "Germany",
    service: "Zero-Trust Architecture",
    description: "Enterprise zero-trust cybersecurity platform providing proactive automated threat detection and continuous infrastructure hardening.",
    overviewParagraph1: "In an era of advanced persistent cyber threats, SecureShield Zero redefines defensive digital perimeter architecture. Operatives require continuous verification, automated micro-segmentation of confidential asset networks, and rapid automated defensive protocols.",
    overviewParagraph2: "Our security engineering team engineered an autonomous threat hunting dashboard powered by neural network behavioral profiling. Any unauthorized network reconnaissance or privilege escalation trigger is instantly isolated inside virtual sandbox containers without human intervention.",
    gradientClass: "bg-gradient-to-br from-[#94612d] via-[#5c3713] to-[#1f1003]",
    bgImage: "/images/branding_uiux.png",
    screenImage: "/images/branding_uiux.png",
    mockups: [
      {
        title: "Threat Topology",
        subtitle: "Live global attack vectors",
        image: "/images/branding_uiux.png",
        badge: "DEFENSE",
      },
      {
        title: "Access Vault",
        subtitle: "Biometric MFA gatekeeping",
        image: "/images/smart_analytics.png",
        badge: "LOCKED",
      },
      {
        title: "Sandbox Isolator",
        subtitle: "Automated threat containment",
        image: "/images/dummy_dashboard.png",
        badge: "ISOLATED",
      },
      {
        title: "Compliance Auditor",
        subtitle: "Continuous ISO 27001 tracking",
        image: "/images/smart_analytics_full.png",
        badge: "VERIFIED",
      },
    ],
    highlight: {
      leftImage: "/images/branding_uiux.png",
      rightImage: "/images/digital_marketing.png",
      line1: "Impenetrable",
      highlightLine: "Zero-Trust Security",
      line3: "Automated Peace of Mind",
      description: "SecureShield shields critical corporate assets with AI-driven threat neutralization and automated regulatory compliance.",
    },
  },
  {
    id: 7,
    slug: "smarthealth-pro",
    category: ["ALL", "MOBILE APPLICATIONS"],
    title: "SmartHealth Pro",
    heroTitle: "Transforming SmartHealth Pro’s Clinical Telemedicine & HealthTech Experience",
    industry: "HealthTech & Medical",
    location: "Switzerland",
    service: "Telemedicine & IoT",
    description: "HIPAA-compliant telemedicine patient portal delivering encrypted HD clinical consultations and automated patient vital tracking.",
    overviewParagraph1: "SmartHealth Pro modernizes remote patient healthcare through high-definition diagnostic consultations and seamless real-time medical device synchronization. Physicians needed a streamlined clinical workflow that removes administrative charting delays during telehealth evaluations.",
    overviewParagraph2: "We constructed a strictly encrypted iOS and Android clinical application equipped with AI diagnostic preliminary assessment tools and IoT medical vital sign monitoring. Patients attend appointments with zero setup while specialists review real-time ECG and vitals streaming.",
    gradientClass: "bg-gradient-to-br from-[#1a6e3d] via-[#0d3b1f] to-[#04170b]",
    bgImage: "/images/Best Business Management Course for Future Entrepreneurs.jpg",
    screenImage: "/images/smart_analytics.png",
    mockups: [
      {
        title: "HD Video Clinic",
        subtitle: "Encrypted doctor consultations",
        image: "/images/smart_analytics.png",
        badge: "LIVE HD",
      },
      {
        title: "Vitals Telemetry",
        subtitle: "Real-time wearable ECG sync",
        image: "/images/dummy_dashboard.png",
        badge: "NORMAL",
      },
      {
        title: "E-Prescriptions",
        subtitle: "Instant pharmacy fulfillment",
        image: "/images/smart_analytics_full.png",
        badge: "DISPENSED",
      },
      {
        title: "AI Symptom Checker",
        subtitle: "Preliminary triage diagnostics",
        image: "/images/dummy_marketing.png",
        badge: "TRIAGE",
      },
    ],
    highlight: {
      leftImage: "/images/Best Business Management Course for Future Entrepreneurs.jpg",
      rightImage: "/images/who we are.jpg",
      line1: "Compassionate",
      highlightLine: "Digital Telehealth",
      line3: "Connected Without Limits",
      description: "SmartHealth Pro bridges patient accessibility with leading medical institutions through effortless, secure telehealth communication.",
    },
  },
  {
    id: 8,
    slug: "pulse-marketing-ai",
    category: ["ALL", "DIGITAL MARKETING", "MOBILE APPLICATIONS"],
    title: "Pulse Marketing AI",
    heroTitle: "Transforming Pulse Marketing AI’s Omnichannel Conversion Engine Experience",
    industry: "Digital Marketing",
    location: "United States",
    service: "MarTech Automation",
    description: "Omnichannel advertising performance engine automating audience segmentation to maximize global conversion ROI.",
    overviewParagraph1: "Pulse Marketing AI arms growth executives with autonomous ad budget allocation across search, social, and programmatic display networks. By continuously parsing audience acquisition attribution metrics, Pulse dynamically re-weights ad bids in milliseconds.",
    overviewParagraph2: "We built a centralized growth operating system featuring generative creatives customization and cross-channel funnel attribution mapping. Our engineering team ensured sub-second reporting latency, allowing marketing teams to achieve unprecedented ad conversion efficiency.",
    gradientClass: "bg-gradient-to-br from-[#373f4d] via-[#1b2129] to-[#0c0e12]",
    bgImage: "/images/digital_marketing.png",
    screenImage: "/images/dummy_marketing.png",
    mockups: [
      {
        title: "ROAS Optimizer",
        subtitle: "Automated bidding re-weighting",
        image: "/images/dummy_marketing.png",
        badge: "+340% ROI",
      },
      {
        title: "Audience AI",
        subtitle: "Real-time persona targeting",
        image: "/images/smart_analytics.png",
        badge: "TARGETED",
      },
      {
        title: "Attribution Funnel",
        subtitle: "Multi-touch journey mapping",
        image: "/images/dummy_dashboard.png",
        badge: "MAPPED",
      },
      {
        title: "Creative A/B Tester",
        subtitle: "Autonomous headline mutations",
        image: "/images/smart_analytics_full.png",
        badge: "WINNER",
      },
    ],
    highlight: {
      leftImage: "/images/download (16).jpg",
      rightImage: "/images/employee.jpg",
      line1: "Autonomous",
      highlightLine: "Growth Acceleration",
      line3: "Engineered for Results",
      description: "Pulse Marketing AI removes guesswork from enterprise ad scaling with AI programmatic bidding and unified ROI telemetry.",
    },
  },
];
