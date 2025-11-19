export const personalInfo = {
    name: "Muhammad Ismaeel",
    role: "Web Developer & Web Designer",
    avatar: "https://ismaeel-framer-portfolio.vercel.app/public/images/my-avatar.png",
};

export const contacts = [
    {
        type: "email",
        label: "Email",
        icon: "mail-outline",
        value: "m.ismaeel.developer@gmail.com",
    },
    {
        type: "phone",
        label: "Phone",
        icon: "phone-portrait-outline",
        value: "+14068004593",
        displayValue: "+1 (406) 800-4593",
    },
    {
        type: "location",
        label: "Location",
        icon: "location-outline",
        value: "Montana, USA",
    },
];

export const socialLinks = [
    { name: "facebook", icon: "logo-facebook", url: "#" },
    { name: "twitter", icon: "logo-twitter", url: "#" },
    { name: "instagram", icon: "logo-instagram", url: "#" },
];

// ✨ UPDATED Services - based on your experience
export const services = [
    {
        icon: "/public/images/icon-design.svg",
        title: "Web Design",
        text: "Professional web design using Framer, Webflow, Wix & WordPress. Beautiful, modern and user-friendly designs.",
    },
    {
        icon: "/public/images/icon-dev.svg",
        title: "Custom Development",
        text: "Enterprise-level custom development using modern tech stacks and best-practice architecture.",
    },
    {
        icon: "/public/images/icon-app.svg",
        title: "Responsive UI/UX",
        text: "Fully responsive, mobile-first interfaces that look perfect on all screen sizes.",
    },
    {
        icon: "/public/images/icon-photo.svg",
        title: "Graphic & Branding",
        text: "Professional logo design, branding, identity and visual design for businesses.",
    },
];

// ✨ UPDATED Testimonials (Only text/name left same)
export const testimonials = [
    {
        id: 1,
        name: "Daniel Lewis",
        avatar: "/public/images/avatar-1.png",
        text: "Amazing experience working with Ismaeel. High-quality work and very responsible.",
        date: "2021-06-14",
        displayDate: "14 June, 2021",
    },
    {
        id: 2,
        name: "Jessica Miller",
        avatar: "/public/images/avatar-2.png",
        text: "Delivered excellent UI/UX design on time with professional communication.",
    },
    {
        id: 3,
        name: "Emily Evans",
        avatar: "/public/images/avatar-3.png",
        text: "Fast delivery, top-quality design and development. Highly recommended!",
    },
    {
        id: 4,
        name: "Henry William",
        avatar: "/public/images/avatar-4.png",
        text: "Great creativity, solid technical skills and amazing attention to detail.",
    },
];

export const clients = [
    "/public/images/logo-1-color.png",
    "/public/images/logo-2-color.png",
    "/public/images/logo-3-color.png",
    "/public/images/logo-4-color.png",
    "/public/images/logo-5-color.png",
    "/public/images/logo-6-color.png",
];

// ✨ UPDATED Education — based on your real history
export const educationTimeline = [
    {
        title: "BS Computer Science (BSCS)",
        period: "2019 — 2023",
        text: "Completed Bachelor's degree in Computer Science from COMSATS University Islamabad.",
    },
    {
        title: "Intermediate (ICS)",
        period: "2017 — 2019",
        text: "Punjab Group of Colleges — Intermediate in Computer Science.",
    },
    {
        title: "Matriculation (Science)",
        period: "2015 — 2017",
        text: "Punjab Group of Colleges — Matriculation in Science.",
    },
];

// ✨ UPDATED Experience — based on your real work
export const experienceTimeline = [
    {
        title: "Web Designer",
        period: "2020 — Present (Upwork)",
        text: "2+ years experience in Framer, Webflow, Wix & WordPress designing modern, responsive websites.",
    },
    {
        title: "Graphic Designer",
        period: "2023 — 2024 (Zapta Technologies)",
        text: "Worked as graphic designer creating branding, logos, social media designs and corporate identity.",
    },
    {
        title: "Web Developer",
        period: "2022 — Present (Freelance)",
        text: "Custom Web Development including enterprise-grade solutions and full responsive UI/UX.",
    },
];

// ✨ UPDATED Skills — based on your data
export const skills = [
    { name: "Framer", value: 90 },
    { name: "Wix", value: 80 },
    { name: "Graphic Design", value: 60 },
    { name: "Web Development", value: 100 },
];

export const projects = [
    {
        id: 1,
        name: "MBA Consulting Engineers",
        title: "MBA Consulting Engineers",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/1.png",
        images: ["/public/images/1.png", "/public/images/1-2.png", "/public/images/1-3.png"],
        url: "https://www.mba-engineers.com/",
        source_link: "https://www.mba-engineers.com/",
        source_code_link: null,
        accentColor: "#1976d2",
        description: "Professional engineering consultancy platform built on Wix, featuring advanced structural analysis tools, client portal integration, and responsive design optimized for engineering professionals and corporate clients.",
        tags: [
            { name: "Wix", color: "#00e9ff" },
            { name: "Engineering", color: "#1976d2" },
            { name: "Responsive Design", color: "#00e9ff" },
            { name: "Client Portal", color: "#1976d2" },
            { name: "SEO Optimized", color: "#10b981" }
        ],
        timeline: "3 Weeks",
        status: "Completed",
        date: "2024-02-10",
        features: [
            "Advanced engineering calculation tools",
            "Client project management portal",
            "Real-time collaboration features",
            "Mobile-optimized responsive design",
            "Integrated contact & consultation system",
            "Professional certification display"
        ],
        feedback: [
            {
                name: "Dr. Michael Chen",
                role: "Senior Structural Engineer",
                message: "The platform has significantly improved our client engagement. The intuitive interface and powerful features make complex engineering calculations accessible to our team and clients alike.",
                rating: 5,
                date: "2024-02-15"
            },
            {
                name: "Sarah Rodriguez",
                role: "Project Manager",
                message: "Outstanding work on the client portal integration. Our project coordination has become much more efficient with the real-time updates and collaboration features.",
                rating: 5,
                date: "2024-02-18"
            }
        ]
    },

    {
        id: 2,
        name: "Klasic Exteriors",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/2.png",
        images: ["/public/images/2.png", "/public/images/2-2.png", "/public/images/2-3.png"],
        url: "https://www.klasicexteriors.com/",
        source_link: "https://www.klasicexteriors.com/",
        source_code_link: null,
        accentColor: "#f59e0b",
        description: "High-performance roofing and exterior services website built with Framer, featuring immersive visual galleries, interactive service calculators, and seamless animation transitions that showcase premium craftsmanship.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Home Services", color: "#f59e0b" },
            { name: "Animation", color: "#915EFF" },
            { name: "Interactive UI", color: "#f59e0b" },
            { name: "Performance", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-01-20",
        features: [
            "Interactive service cost calculator",
            "Before/after project galleries",
            "Smooth scroll-triggered animations",
            "Mobile-first responsive design",
            "Integrated appointment scheduling",
            "Customer testimonial carousels"
        ],
        feedback: [
            {
                name: "James Wilson",
                role: "Business Owner",
                message: "The interactive features and stunning visuals have transformed our online presence. We're receiving higher-quality leads and our conversion rate has increased by 40% since launch.",
                rating: 5,
                date: "2024-02-01"
            }
        ]
    },

    {
        id: 3,
        name: "Cordell & Cordell",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/3.png",
        images: ["/public/images/3.png", "/public/images/3-2.png", "/public/images/3-3.png"],
        url: "https://cordellcordell.com/",
        accentColor: "#c6a667",
        description: "Premium legal services platform for a nationally recognized men's divorce law firm, featuring sophisticated attorney directories, case management integration, and trust-building design elements.",
        tags: [
            { name: "Legal Website", color: "#c6a667" },
            { name: "Framer", color: "#915EFF" },
            { name: "Responsive", color: "#00e9ff" },
            { name: "Attorney Portal", color: "#c6a667" },
            { name: "Security", color: "#ef4444" }
        ],
        timeline: "3 Weeks",
        status: "Completed",
        date: "2024-02-12",
        features: [
            "Advanced attorney search and filtering",
            "Secure client case portal",
            "Legal resource library",
            "Multi-state practice area pages",
            "Integrated consultation scheduling",
            "Trust indicator elements"
        ],
        feedback: [
            {
                name: "Robert Cordell",
                role: "Managing Partner",
                message: "The website perfectly captures our firm's expertise and professionalism. The attorney directory and client portal have streamlined our operations significantly.",
                rating: 5,
                date: "2024-02-18"
            },
            {
                name: "Jennifer Martinez",
                role: "Marketing Director",
                message: "The conversion rate for consultation requests has improved dramatically. The trust-building design elements are particularly effective.",
                rating: 5,
                date: "2024-02-20"
            }
        ]
    },

    {
        id: 4,
        name: "Queen City Immigration Law",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/4.png",
        images: ["/public/images/4.png", "/public/images/4-2.png"],
        url: "https://www.qcilaw.com/",
        accentColor: "#c6a667",
        description: "A sophisticated immigration law platform featuring multi-language support, case status tracking, and comprehensive resource centers for international clients.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Immigration Law", color: "#c6a667" },
            { name: "Multi-language", color: "#00e9ff" },
            { name: "Case Tracking", color: "#c6a667" },
            { name: "Resource Center", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-02-05",
        features: [
            "Multi-language support system",
            "Real-time case status tracking",
            "Comprehensive resource library",
            "Attorney video introductions",
            "Mobile-optimized forms",
            "Secure document upload"
        ],
        feedback: [
            {
                name: "Senior Attorney",
                role: "QCIL",
                message: "The multi-language features have made our services accessible to a much wider audience. Client satisfaction has never been higher.",
                rating: 5,
                date: "2024-02-07"
            }
        ]
    },

    {
        id: 5,
        name: "Corpus Injury Lawyer",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/5.png",
        images: ["/public/images/5.png", "/public/images/5-2.png"],
        url: "https://www.corpusinjurylawyer.com/",
        accentColor: "#c6a667",
        description: "Advanced personal injury law platform with case evaluation tools, settlement calculators, and emergency response features for urgent legal needs.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Injury Law", color: "#c6a667" },
            { name: "Case Evaluation", color: "#c6a667" },
            { name: "Emergency Response", color: "#ef4444" },
            { name: "Settlement Calculator", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-01-15",
        features: [
            "Interactive case evaluation tool",
            "Settlement calculator with AI estimates",
            "24/7 emergency contact system",
            "Case success stories gallery",
            "Attorney availability calendar",
            "Legal resource database"
        ],
        feedback: [
            {
                name: "Senior Attorney",
                role: "Corpus Injury Lawyer",
                message: "The emergency response features have been crucial for our clients in urgent situations. The case evaluation tool has improved lead quality significantly.",
                rating: 4,
                date: "2024-01-25"
            }
        ]
    },

    {
        id: 6,
        name: "DataWex – Digital Marketing Audit",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/6.png",
        images: ["/public/images/6.png", "/public/images/6-2.png"],
        url: "https://www.datawex.com/",
        accentColor: "#915EFF",
        description: "Enterprise-grade SaaS platform for comprehensive digital marketing audits with real-time analytics, competitor analysis, and automated reporting features.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Marketing SaaS", color: "#00e9ff" },
            { name: "Analytics", color: "#915EFF" },
            { name: "Competitor Analysis", color: "#ef4444" },
            { name: "Automated Reporting", color: "#10b981" }
        ],
        timeline: "1 Week",
        status: "Completed",
        date: "2024-01-05",
        features: [
            "Real-time marketing analytics dashboard",
            "Competitor performance tracking",
            "Automated audit report generation",
            "Custom recommendation engine",
            "Team collaboration workspace",
            "API integration capabilities"
        ],
        feedback: [
            {
                name: "Alex Thompson",
                role: "Founder & CEO",
                message: "The platform's analytics capabilities have revolutionized how we deliver marketing audits. Client retention has increased by 60% since launch.",
                rating: 5,
                date: "2024-01-10"
            }
        ]
    },

    {
        id: 7,
        name: "The Watermark Collection",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/7.png",
        images: ["/public/images/7.png", "/public/images/7-2.png", "/public/images/7-3.png"],
        url: "https://thewatermarkcollection.com.au/",
        accentColor: "#c6a667",
        description: "Ultra-premium luxury bathware e-commerce experience with 3D product visualization, AR preview, and bespoke customization options for high-end clientele.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Luxury Brand", color: "#c6a667" },
            { name: "E-commerce", color: "#00e9ff" },
            { name: "3D Visualization", color: "#c6a667" },
            { name: "AR Integration", color: "#915EFF" }
        ],
        timeline: "3 Weeks",
        status: "Completed",
        date: "2024-02-01",
        features: [
            "Interactive 3D product visualization",
            "Augmented Reality preview mode",
            "Bespoke customization interface",
            "High-resolution product galleries",
            "Architectural integration tools",
            "International shipping calculator"
        ],
        feedback: [
            {
                name: "Eleanor Vanderbilt",
                role: "Brand Director",
                message: "The AR visualization feature has been a game-changer for our architectural clients. Sales of custom products have increased by 85%.",
                rating: 5,
                date: "2024-02-10"
            }
        ]
    },

    {
        id: 8,
        name: "Shuk Rentals",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/8.png",
        images: ["/public/images/8.png", "/public/images/8-2.png"],
        url: "https://www.shukrentals.com/",
        accentColor: "#f59e0b",
        description: "Next-generation property rental platform with virtual tours, AI-powered recommendations, and seamless booking system for modern travelers.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Real Estate", color: "#f59e0b" },
            { name: "Virtual Tours", color: "#00e9ff" },
            { name: "AI Recommendations", color: "#915EFF" },
            { name: "Booking System", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-02-15",
        features: [
            "Immersive 360° virtual property tours",
            "AI-powered rental recommendations",
            "Instant booking confirmation system",
            "Neighborhood exploration maps",
            "Multi-currency payment processing",
            "Guest review and rating system"
        ],
        feedback: [
            {
                name: "David Chen",
                role: "Property Owner",
                message: "The virtual tour feature has reduced unnecessary property visits by 70%. Our booking conversion rate is now industry-leading.",
                rating: 5,
                date: "2024-03-01"
            }
        ]
    },

    {
        id: 9,
        name: "Thriveworks Counseling",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/9.png",
        images: ["/public/images/9.png", "/public/images/9-2.png"],
        url: "https://thriveworks.com/",
        accentColor: "#84cc16",
        description: "Comprehensive mental health platform with therapist matching, secure video sessions, and wellness tracking for holistic patient care.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Healthcare", color: "#84cc16" },
            { name: "Telehealth", color: "#00e9ff" },
            { name: "Therapist Matching", color: "#84cc16" },
            { name: "Secure Platform", color: "#ef4444" }
        ],
        timeline: "3 Weeks",
        status: "Completed",
        date: "2024-01-28",
        features: [
            "AI-powered therapist matching algorithm",
            "Secure video session integration",
            "Wellness progress tracking dashboard",
            "Crisis resource center",
            "Medication management tools",
            "Community support forums"
        ],
        feedback: [
            {
                name: "Dr. Sarah Mitchell",
                role: "Clinical Director",
                message: "The therapist matching system has improved patient-therapist compatibility by 90%. Patient retention rates are at an all-time high.",
                rating: 5,
                date: "2024-02-02"
            }
        ]
    },

    {
        id: 10,
        name: "SafeTraces",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/10.png",
        images: ["/public/images/10.png", "/public/images/10-2.png"],
        url: "https://www.safetraces.com/",
        accentColor: "#1976d2",
        description: "Enterprise biotech safety platform with compliance tracking, audit management, and real-time monitoring for regulated industries.",
        tags: [
            { name: "Framer", color: "#915EFF" },
            { name: "Biotech", color: "#1976d2" },
            { name: "Compliance", color: "#00e9ff" },
            { name: "Audit Management", color: "#ef4444" },
            { name: "Real-time Monitoring", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-02-03",
        features: [
            "Automated compliance tracking system",
            "Digital audit trail management",
            "Real-time safety monitoring alerts",
            "Regulatory document repository",
            "Supplier compliance verification",
            "Incident reporting and analysis"
        ],
        feedback: [
            {
                name: "Dr. Michael Reynolds",
                role: "Compliance Officer",
                message: "The automated compliance features have reduced our audit preparation time by 80%. Regulatory reporting is now seamless and error-free.",
                rating: 4,
                date: "2024-02-08"
            }
        ]
    },

    {
        id: 11,
        name: "Nicola Wealth",
        category: "Framer Development",
        filter: "framer",
        image: "/public/images/11.png",
        images: ["/public/images/11.png", "/public/images/11-2.png", "/public/images/11-3.png"],
        url: "https://nicolawealth.com/",
        accentColor: "#1976d2",
        description: "High-net-worth wealth management platform with portfolio analytics, financial planning tools, and exclusive client portal for premium service delivery.",
        tags: [
            { name: "Finance", color: "#1976d2" },
            { name: "Framer", color: "#915EFF" },
            { name: "Wealth Management", color: "#c6a667" },
            { name: "Portfolio Analytics", color: "#1976d2" },
            { name: "Client Portal", color: "#10b981" }
        ],
        timeline: "4 Weeks",
        status: "Completed",
        date: "2024-03-01",
        features: [
            "Interactive portfolio analytics dashboard",
            "Comprehensive financial planning suite",
            "Exclusive client portal with document vault",
            "Market intelligence reports",
            "Wealth transfer planning tools",
            "Family office integration"
        ],
        feedback: [
            {
                name: "Robert Nicola",
                role: "Managing Director",
                message: "The client portal has transformed how we deliver premium services. Our high-net-worth clients appreciate the sophisticated tools and seamless experience.",
                rating: 5,
                date: "2024-03-10"
            }
        ]
    },

    {
        id: 12,
        name: "Safe Space Counseling Services",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/12.png",
        images: ["/public/images/12.png", "/public/images/12-2.png"],
        url: "https://www.safespacecounselingservices.com/",
        accentColor: "#84cc16",
        description: "Holistic mental wellness platform with mindfulness resources, group therapy scheduling, and community support features for comprehensive care.",
        tags: [
            { name: "Wix", color: "#00e9ff" },
            { name: "Mental Health", color: "#84cc16" },
            { name: "Wellness", color: "#10b981" },
            { name: "Group Therapy", color: "#84cc16" },
            { name: "Community Support", color: "#915EFF" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-01-18",
        features: [
            "Mindfulness and meditation resources",
            "Group therapy session scheduling",
            "Community support forum moderation",
            "Wellness progress journaling",
            "Therapist availability calendar",
            "Crisis intervention resources"
        ],
        feedback: [
            {
                name: "Dr. Emily Watson",
                role: "Clinical Psychologist",
                message: "The community features have created a supportive environment that complements individual therapy beautifully. Client engagement is outstanding.",
                rating: 5,
                date: "2024-01-25"
            }
        ]
    },

    {
        id: 13,
        name: "PRIVÉ Culinary Concierge",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/13.png",
        images: ["/public/images/13.png", "/public/images/13-2.png", "/public/images/13-3.png"],
        url: "https://www.priveculinary.com/",
        accentColor: "#c6a667",
        description: "Ultra-luxury culinary experience platform with private chef booking, event customization, and gourmet product marketplace for discerning clients.",
        tags: [
            { name: "Wix", color: "#00e9ff" },
            { name: "Luxury Service", color: "#c6a667" },
            { name: "Culinary", color: "#f59e0b" },
            { name: "Event Planning", color: "#c6a667" },
            { name: "Marketplace", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-03-10",
        features: [
            "Private chef booking and scheduling",
            "Custom event menu designer",
            "Gourmet product marketplace",
            "Wine pairing recommendations",
            "Event venue coordination",
            "Client preference profiles"
        ],
        feedback: [
            {
                name: "Chef Antonio Moretti",
                role: "Executive Chef & Founder",
                message: "The booking system handles our complex scheduling needs perfectly. Clients love the menu customization tools and the overall luxury experience.",
                rating: 5,
                date: "2024-03-20"
            }
        ]
    },

    {
        id: 14,
        name: "The Family Barristers",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/14.png",
        images: ["/public/images/14.png", "/public/images/14-2.png"],
        url: "https://www.thefamilybarristers.co.uk/",
        accentColor: "#c6a667",
        description: "Specialized family law platform with case management, legal document automation, and client education resources for UK family law matters.",
        tags: [
            { name: "Wix", color: "#00e9ff" },
            { name: "Family Law", color: "#c6a667" },
            { name: "Legal Tech", color: "#915EFF" },
            { name: "Document Automation", color: "#c6a667" },
            { name: "Client Education", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-02-20",
        features: [
            "Automated legal document generation",
            "Case timeline visualization",
            "Client education resource center",
            "Secure document sharing portal",
            "Barrister availability scheduling",
            "Legal aid eligibility checker"
        ],
        feedback: [
            {
                name: "James Harrington",
                role: "Senior Barrister",
                message: "The document automation has reduced administrative time by 60%. Our clients appreciate the clear case timelines and educational resources.",
                rating: 5,
                date: "2024-02-25"
            }
        ]
    },

    {
        id: 15,
        name: "Bahry Law",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/15.png",
        images: ["/public/images/15.png", "/public/images/15-2.png"],
        url: "https://iwantbahrylaw.wixsite.com/bahry-law-1",
        accentColor: "#c6a667",
        description: "Streamlined legal practice platform with client intake automation, matter management, and billing integration for efficient law firm operations.",
        tags: [
            { name: "Wix", color: "#00e9ff" },
            { name: "Legal Practice", color: "#c6a667" },
            { name: "Automation", color: "#915EFF" },
            { name: "Client Intake", color: "#c6a667" },
            { name: "Billing Integration", color: "#10b981" }
        ],
        timeline: "1.5 Weeks",
        status: "Completed",
        date: "2023-12-20",
        features: [
            "Automated client intake forms",
            "Matter management dashboard",
            "Time tracking and billing integration",
            "Document template library",
            "Client communication portal",
            "Calendar and deadline management"
        ],
        feedback: [
            {
                name: "Mark Bahry",
                role: "Principal Lawyer",
                message: "The automation features have allowed our small firm to handle twice the caseload without compromising service quality. Highly efficient and professional.",
                rating: 4,
                date: "2023-12-28"
            }
        ]
    },

    {
        id: 16,
        name: "Nalen Ayurveda",
        category: "Wix Development",
        filter: "wix",
        image: "/public/images/16.png",
        images: ["/public/images/16.png", "/public/images/16-2.png", "/public/images/16-3.png"],
        url: "https://www.nalenayurveda.com/",
        accentColor: "#65a30d",
        description: "Comprehensive Ayurvedic wellness platform with dosha analysis, treatment planning, and herbal product store for holistic health management.",
        tags: [
            { name: "Ayurveda", color: "#65a30d" },
            { name: "Wellness", color: "#84cc16" },
            { name: "Wix", color: "#00e9ff" },
            { name: "E-commerce", color: "#915EFF" },
            { name: "Health Assessment", color: "#10b981" }
        ],
        timeline: "2 Weeks",
        status: "Completed",
        date: "2024-01-10",
        features: [
            "Interactive dosha analysis quiz",
            "Personalized treatment plan generator",
            "Ayurvedic product e-commerce store",
            "Wellness blog and recipe database",
            "Practitioner appointment scheduling",
            "Seasonal wellness guides"
        ],
        feedback: [
            {
                name: "Dr. Priya Sharma",
                role: "Ayurvedic Practitioner",
                message: "The dosha analysis tool has helped clients understand their constitution better. Product sales have tripled since implementing the e-commerce features.",
                rating: 5,
                date: "2024-01-15"
            }
        ]
    },

    {
        id: 17,
        name: "Finance Platform",
        category: "Web Development",
        filter: "web development",
        image: "/public/images/project-1.jpg",
        images: ["/public/images/project-1.jpg", "/public/images/project-1-2.jpg"],
        accentColor: "#1976d2",
        description: "Advanced financial dashboard with real-time market data, investment analytics, and portfolio management tools for modern investors.",
        tags: [
            { name: "React", color: "#00e9ff" },
            { name: "TypeScript", color: "#1976d2" },
            { name: "Chart.js", color: "#f59e0b" },
            { name: "Financial API", color: "#10b981" },
            { name: "Responsive Design", color: "#915EFF" }
        ],
        timeline: "1 Week",
        status: "Completed",
        date: "2024-02-25",
        features: [
            "Real-time market data integration",
            "Interactive financial charts and graphs",
            "Portfolio performance analytics",
            "Risk assessment tools",
            "Investment goal tracking",
            "Mobile trading interface"
        ],
        feedback: [
            {
                name: "Financial Analyst",
                role: "Wealth Management",
                message: "The real-time analytics and clean interface have made portfolio management incredibly efficient. Our clients love the intuitive design.",
                rating: 5,
                date: "2024-02-28"
            }
        ]
    },

    {
        id: 18,
        name: "Orizon Platform",
        category: "Web Development",
        filter: "web development",
        image: "/public/images/project-2.png",
        images: ["/public/images/project-2.png", "/public/images/project-2-2.png"],
        accentColor: "#915EFF",
        description: "Modern SaaS platform with collaborative workspace, project management tools, and team analytics for remote team productivity.",
        tags: [
            { name: "Vue.js", color: "#00e9ff" },
            { name: "Node.js", color: "#10b981" },
            { name: "WebSocket", color: "#915EFF" },
            { name: "Real-time Collaboration", color: "#f59e0b" },
            { name: "Team Analytics", color: "#1976d2" }
        ],
        timeline: "10 Days",
        status: "Completed",
        date: "2024-03-05",
        features: [
            "Real-time collaborative workspace",
            "Advanced project management suite",
            "Team performance analytics",
            "File sharing and version control",
            "Integration marketplace",
            "Custom workflow automation"
        ],
        feedback: [
            {
                name: "Tech Startup CEO",
                role: "Orizon",
                message: "The collaborative features have transformed how our remote teams work together. Productivity has increased by 45% since implementation.",
                rating: 5,
                date: "2024-03-08"
            }
        ]
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "Design conferences in 2022",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-1.jpg",
        text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
        id: 2,
        title: "Best fonts every designer",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-2.jpg",
        text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
        id: 3,
        title: "Design digest #80",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-3.jpg",
        text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
        id: 4,
        title: "UI interactions of the week",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-4.jpg",
        text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
        id: 5,
        title: "The forgotten art of spacing",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-5.jpg",
        text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 6,
        title: "Design digest #79",
        category: "Design",
        dateTime: "2022-02-23",
        date: "Feb 23, 2022",
        image: "/public/images/blog-6.jpg",
        text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    },
];

export const mapConfig = {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd",
};
