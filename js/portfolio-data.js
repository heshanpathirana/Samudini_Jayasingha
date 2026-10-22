/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * 
 * This file contains all configurable data for the student's portfolio website.
 * You can customize her name, biography, portrait image, contact links,
 * academic details, laboratory experiences, projects, and CV path right here.
 * 
 * The website will read this configuration and update the entire UI automatically.
 * 
 * IMPORTANT:
 * - Do not invent her name, contact details, degree title, graduation year,
 *   certifications, work experience, research publications, or professional
 *   registrations.
 * - Replace placeholders (enclosed in brackets e.g. [HER FULL NAME]) with
 *   her confirmed details whenever available.
 */

window.PORTFOLIO_DATA = {
  // -----------------------------------------------------------------------
  // 1. STUDENT IDENTITY & CORE INFORMATION
  // -----------------------------------------------------------------------
  student: {
    fullName: "Samudini Jayasingha",
    initials: "USJ", // Shown in the navbar monogram before real initials are set
    tagline: "SCIENCE UNDERGRADUATE · ASPIRING PHARMACIST",
    university: "University of Sri Jayewardenepura, Sri Lanka",
    academicLevel: "Third-year undergraduate",
    subjectCombination: "Zoology, Microbiology, and Chemistry",
    alResults: "B, C, C", // G.C.E. Advanced Level results (configurable to B, B, C or specific subjects)
    alCompletionYear: "2022",
    expectedGraduation: "2028",
    degreePlaceholderTitle: "B.Sc. Undergraduate (Zoology, Microbiology & Chemistry)",

    // Portrait image path (SVG placeholder or JPG/PNG portrait)
    // To use a real photo, place portrait.jpg inside assets/images/ and change path below:
    portraitImage: "assets/images/samudini.jpeg",
    portraitAlt: "Academic profile portrait of science undergraduate at University of Sri Jayewardenepura",

    // Path to the genuine curriculum vitae PDF
    cvPath: "assets/docs/cv.pdf",
    cvFilename: "Curriculum_Vitae_USJ_Undergraduate.pdf",

    // Hero Section Content
    hero: {
      label: "SCIENCE UNDERGRADUATE · ASPIRING PHARMACIST",
      heading: "Exploring Science. Building a Future in Pharmacy.",
      paragraph: "I am a third-year undergraduate at the University of Sri Jayewardenepura, studying Zoology, Microbiology, and Chemistry. Through my academic studies and laboratory practicals, I am developing a strong scientific foundation while working towards my long-term goal of becoming a pharmacist.",
      primaryCtaText: "Explore My Journey",
      primaryCtaTarget: "#pharmacy-journey",
      secondaryCtaText: "Download My CV",
      secondaryCtaTarget: "assets/docs/cv.pdf"
    }
  },

  // -----------------------------------------------------------------------
  // 2. ABOUT ME SECTION
  // -----------------------------------------------------------------------
  about: {
    label: "ABOUT ME",
    heading: "Curious About Science. Committed to Growth.",
    paragraphs: [
      "I am a science undergraduate at the University of Sri Jayewardenepura with an academic background spanning Zoology, Microbiology, and Chemistry. My university studies have introduced me to scientific observation, laboratory practicals, and analytical thinking. I am particularly interested in the relationship between microbiology, chemistry, health, and pharmaceutical science.",
      "I aim to continue developing my scientific knowledge and practical abilities through meaningful learning experiences and suitable internship opportunities. My long-term ambition is to become a pharmacist, and I am preparing towards my planned External Pharmacist Examination pathway for 2028."
    ],
    highlights: [
      {
        title: "Scientific Foundation",
        description: "Zoology, Microbiology, and Chemistry.",
        icon: "foundation"
      },
      {
        title: "Practical Learning",
        description: "University laboratory practicals and academic projects.",
        icon: "flask"
      },
      {
        title: "Future Direction",
        description: "Pharmaceutical science and a career in pharmacy.",
        icon: "pharmacy"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 3. EDUCATION SECTION
  // -----------------------------------------------------------------------
  education: [
    {
      institution: "University of Sri Jayewardenepura, Sri Lanka",
      role: "Undergraduate Studies: Zoology, Microbiology, and Chemistry",
      period: "Current Level: Third Year",
      status: "In Progress",
      expectedGraduation: "Expected Graduation: [TO BE ADDED]",
      description: "Rigorous academic curriculum covering foundational and advanced concepts across zoological diversity, microbial biology and culturing principles, organic and physical chemistry, and comprehensive university laboratory practical sessions.",
      highlights: [
        "Curriculum: Zoology, Microbiology & Chemistry",
        "Extensive practical laboratory hours across all three disciplines",
        "Scientific observation, experimental data recording, and reporting"
      ]
    },
    {
      institution: "G.C.E. Advanced Level Examination",
      role: "Biological Science Stream",
      period: "A/L Completion Year: [TO BE ADDED]",
      status: "Completed",
      expectedGraduation: null,
      description: "Qualified for university admission through the national G.C.E. Advanced Level examination with a strong foundation in biological sciences and chemical principles.",
      highlights: [
        "A/L Results: B, C, C (Biology Stream)",
        "Qualified for state university enrollment at University of Sri Jayewardenepura",
        "Foundational coursework in Biology, Chemistry, and supporting sciences"
      ]
    },
      {
      institution: "G.C.E. Advanced Level Examination",
      role: "Biological Science Stream",
      period: "A/L Completion Year: 2022",
      status: "Completed",
      expectedGraduation: null,
      description: "Qualified for university admission through the national G.C.E. Advanced Level examination with a strong foundation in biological sciences and chemical principles.",
      highlights: [
        "A/L Results: B, C, C (Biology Stream)",
        "Qualified for state university enrollment at University of Sri Jayewardenepura",
        "Foundational coursework in Biology, Chemistry, and supporting sciences"
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 4. SKILLS & COMPETENCIES
  // -----------------------------------------------------------------------
  skillsCategories: [
    {
      category: "Laboratory and Scientific Skills",
      icon: "microscope",
      description: "Hands-on laboratory competencies cultivated through continuous university practical sessions.",
      skills: [
        { name: "Microscope handling", detail: "Brightfield optical microscopy and slide preparation" },
        { name: "University laboratory practicals", detail: "Coursework-aligned laboratory sessions across USJ faculties" },
        { name: "Scientific observation", detail: "Accurate specimen examination and morphological evaluation" },
        { name: "Laboratory safety awareness", detail: "Chemical safety, GLP adherence, and waste protocol awareness" },
        { name: "Recording experimental observations", detail: "Meticulous scientific logbooks and data integrity" }
      ]
    },
    {
      category: "Digital Skills",
      icon: "laptop",
      description: "Computational and productivity tools applied to scientific data organization.",
      skills: [
        { name: "Microsoft Excel", detail: "Formulas, tabular data management, and scientific spreadsheets" },
        { name: "Basic data organization", detail: "Systematic structuring of practical datasets and observations" },
        { name: "Tables & spreadsheet formatting", detail: "Clean, readable report formatting and chart preparation" }
      ]
    },
    {
      category: "Academic Skills",
      icon: "brain",
      description: "Cognitive, investigative, and collaborative abilities refined through undergraduate studies.",
      skills: [
        { name: "Scientific learning & research awareness", detail: "Engaging with academic literature and scientific methods" },
        { name: "Analytical thinking", detail: "Evaluating experimental outcomes and correlating scientific facts" },
        { name: "Attention to detail", detail: "Careful specimen inspection and precise measurement logging" },
        { name: "Time management", detail: "Balancing multi-course lab practicals and academic submissions" },
        { name: "Teamwork through academic activities", detail: "Cooperative lab work, group investigations, and peer review" }
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 5. UNIVERSITY LABORATORY EXPERIENCE
  // -----------------------------------------------------------------------
  laboratoryExperience: {
    label: "PRACTICAL EXPERIENCE",
    heading: "Learning Through Laboratory Practice",
    disclaimer: "All practical experience listed represents rigorous academic learning and laboratory coursework undertaken at the University of Sri Jayewardenepura, not paid commercial employment.",
    blocks: [
      {
        id: "microscopy",
        title: "Microscopy and Scientific Observation",
        badge: "Academic Practical Session",
        image: "assets/images/microscopy.svg",
        imageAlt: "Compound optical microscope and biological slide observation",
        description: "Developing familiarity with microscope handling and observing biological specimens through university practical activities.",
        bulletPoints: [
          "Focusing and optical alignment under varying magnifications",
          "Slide preparation and temporary mount observation",
          "Careful documentation of cellular structures and specimen features"
        ]
      },
      {
        id: "microbiology",
        title: "Microbiology and Biological Science",
        badge: "Academic Practical Session",
        image: "assets/images/microbiology.svg",
        imageAlt: "Petri dish culture plate with streak isolation and bacterial colonies",
        description: "Building foundational knowledge of microorganisms and biological concepts through academic study and relevant practical sessions.",
        bulletPoints: [
          "Understanding aseptic technique and laboratory sterile practice",
          "Observing microbial morphology, colonial growth, and culture media",
          "Relating microbial biology to human health, immunity, and pharmacotherapy"
        ]
      },
      {
        id: "chemistry",
        title: "Chemistry and Laboratory Learning",
        badge: "Academic Practical Session",
        image: "assets/images/chemistry.svg",
        imageAlt: "Chemical glassware, volumetric flask, and solution preparation",
        description: "Strengthening an understanding of chemical principles through coursework and university laboratory activities.",
        bulletPoints: [
          "Solution preparation, stoichiometric calculations, and volumetric analysis",
          "Principles of chemical reactions, qualitative tests, and safety procedures",
          "Developing the analytical precision essential for pharmaceutical science"
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 6. SELECTED ACADEMIC PROJECTS
  // -----------------------------------------------------------------------
  projects: {
    label: "SELECTED WORK",
    heading: "Learning, Investigating, Improving",
    note: "The project cards below reflect genuine undergraduate academic coursework and practical assignments. Specific summaries can be updated with her actual project reports.",
    items: [
      {
        id: "proj-microbiology",
        title: "Microbiology Practical Project",
        field: "Microbiology",
        isPlaceholder: true,
        summary: "[Add the actual practical or project description. E.g., Culturing, isolation, or morphological characterization of microbial specimens during university practical coursework.]",
        skillsDeveloped: "[Add confirmed skills. E.g., Aseptic handling, culture observation, microscopic recording.]",
        status: "Academic Coursework Placeholder",
        docLink: null
      },
      {
        id: "proj-chemistry",
        title: "Chemistry Laboratory Assignment",
        field: "Chemistry",
        isPlaceholder: true,
        summary: "[Add the actual assignment or experiment. E.g., Volumetric titrations, solution standardization, or qualitative organic/inorganic functional group identification.]",
        skillsDeveloped: "[Add confirmed skills. E.g., Analytical measurement, solution preparation, quantitative error analysis.]",
        status: "Academic Coursework Placeholder",
        docLink: null
      },
      {
        id: "proj-zoology",
        title: "Zoology Academic Project",
        field: "Zoology",
        isPlaceholder: true,
        summary: "[Add the actual project description. E.g., Morphological examination of invertebrate/vertebrate specimens, anatomical adaptations, or ecological observation reports.]",
        skillsDeveloped: "[Add confirmed skills. E.g., Taxonomic classification awareness, specimen observation, scientific reporting.]",
        status: "Academic Coursework Placeholder",
        docLink: null
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 7. PHARMACY JOURNEY SECTION (KEY VISUAL HIGHLIGHT)
  // -----------------------------------------------------------------------
  pharmacyJourney: {
    label: "MY FUTURE IN PHARMACY",
    heading: "A Long-Term Goal in Pharmaceutical Science",
    leadText: "My interest in pharmacy grows from my scientific studies and my desire to continue learning about medicines, chemistry, microbiology, and health. I am following the relevant pathway towards the External Pharmacist Examination through the Ceylon Medical College Council (CMCC), with 2028 as my target examination year.",
    details: [
      { label: "Career Ambition", value: "Pharmacist", highlight: true },
      { label: "Pathway", value: "External Pharmacist Examination" },
      { label: "Institution", value: "Ceylon Medical College Council (CMCC)" },
      { label: "Target Year", value: "2028", highlight: true },
      { label: "Current Stage", value: "Science undergraduate preparing towards a future career in pharmacy" }
    ],
    cmccUrl: "https://cmcc.lk/external-pharmacist-course/",
    cmccButtonText: "Visit Official CMCC Website",
    badgeImage: "assets/images/cmcc-badge.svg",

    areasOfInterest: [
      {
        title: "Pharmaceutical Sciences",
        desc: "Formulation fundamentals, pharmacokinetics, and the biochemical basis of therapeutics."
      },
      {
        title: "Microbiology and Health",
        desc: "Pathogen biology, antimicrobials, infection control, and sterile preparation awareness."
      },
      {
        title: "Chemistry and Medicines",
        desc: "Molecular structures, drug properties, chemical stability, and organic synthesis principles."
      },
      {
        title: "Laboratory Science",
        desc: "Analytical precision, quality assurance protocols, and systematic experimental testing."
      },
      {
        title: "Responsible Medicine Use",
        desc: "Patient safety, rational prescribing awareness, and ethical pharmaceutical standards."
      }
    ],

    careerGoals: [
      "Continue developing relevant scientific knowledge across biology, chemistry, and health sciences.",
      "Prepare diligently towards the planned 2028 External Pharmacist Examination.",
      "Strengthen analytical and practical learning skills through continuous laboratory practice.",
      "Seek appropriate internship and practical learning opportunities in scientific environments.",
      "Build a responsible, patient-focused professional mindset grounded in scientific integrity."
    ]
  },

  // -----------------------------------------------------------------------
  // 8. INTERNSHIP OPPORTUNITIES SECTION
  // -----------------------------------------------------------------------
  internships: {
    label: "OPPORTUNITIES",
    heading: "Open to Learning and Contributing",
    leadText: "I am interested in suitable internship and practical learning opportunities that allow me to develop my scientific knowledge, laboratory skills, and understanding of professional working environments.",
    areas: [
      {
        title: "Microbiology Laboratories",
        desc: "Assisting in microbial preparation, sample observation, and sterile procedure support."
      },
      {
        title: "Scientific and Research Support",
        desc: "Supporting academic investigations, observational logging, and literature reviews."
      },
      {
        title: "Laboratory Assistant Internship Opportunities",
        desc: "Benchwork support, glassware hygiene, reagent preparation, and stock cataloging."
      },
      {
        title: "Relevant Pharmaceutical or Healthcare Environments",
        desc: "Observational and administrative support roles aligned with undergraduate qualification and eligibility."
      },
      {
        title: "Opportunities Connected to Chemistry & Biological Sciences",
        desc: "General analytical testing support, data organization, and spreadsheet documentation."
      }
    ],
    ctaText: "Contact Me About Opportunities",
    ctaTarget: "#contact"
  },

  // -----------------------------------------------------------------------
  // 9. SCIENTIFIC IMAGE GALLERY
  // -----------------------------------------------------------------------
  gallery: {
    enabled: true,
    label: "VISUAL PERSPECTIVE",
    heading: "Laboratory, Science & Academic Exploration",
    subtitle: "Curated scientific illustrations and laboratory motifs representing coursework disciplines.",
    disclaimer: "Visuals illustrate laboratory environments, scientific equipment, and disciplinary themes relevant to her academic studies.",
    items: [
      {
        id: "gal-1",
        title: "Optical Microscope Workstation",
        category: "Laboratory Environment",
        image: "assets/images/microscopy.svg",
        caption: "High-magnification brightfield optical microscopy setup for cellular cytology."
      },
      {
        id: "gal-2",
        title: "Microbial Streak Culturing",
        category: "Microbiology",
        image: "assets/images/microbiology.svg",
        caption: "Petri dish culture plate showing bacterial streak isolation technique."
      },
      {
        id: "gal-3",
        title: "Chemical Glassware & Titration",
        category: "Chemistry",
        image: "assets/images/chemistry.svg",
        caption: "Volumetric glassware, Erlenmeyer flasks, and reagent solution chemistry."
      },
      {
        id: "gal-4",
        title: "Biological Specimen Histology",
        category: "Zoology & Botany",
        image: "assets/images/botanical.svg",
        caption: "Cellular tissue structure, stomata patterns, and biological leaf venation."
      },
      {
        id: "gal-5",
        title: "Analytical Laboratory Bench",
        category: "Laboratory Environment",
        image: "assets/images/laboratory.svg",
        caption: "Analytical balance, laboratory notebook, and standard benchwork apparatus."
      },
      {
        id: "gal-6",
        title: "CMCC Pharmacy Pathway Emblem",
        category: "Pharmaceutical Science",
        image: "assets/images/cmcc-badge.svg",
        caption: "Emblem representing external pharmacist examination aspiration (Target 2028)."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 10. CV DOWNLOAD SECTION
  // -----------------------------------------------------------------------
  cvDownload: {
    heading: "A Closer Look at My Background",
    supportingText: "Explore my academic background, scientific skills, and professional interests in my CV.",
    buttonText: "Download CV (PDF)",
    cvPath: "assets/docs/cv.pdf",
    note: "Academic Resume / Curriculum Vitae document (PDF format)."
  },

  // -----------------------------------------------------------------------
  // 11. CONTACT SECTION
  // -----------------------------------------------------------------------
  contact: {
    label: "GET IN TOUCH",
    heading: "Let's Connect",
    supportingText: "I welcome opportunities to learn, collaborate, and develop my experience in scientific and laboratory environments.",
    channels: [
      {
        type: "email",
        label: "Email Address",
        value: "samudinijayasingha2002@gmail.com",
        href: "mailto:example@student.sjp.ac.lk", // replace with mailto:her_actual_email@domain.com
        note: "Preferred channel for academic & internship inquiries"
      },
      {
        type: "phone",
        label: "Phone Number",
        value: "+94703962957",
        href: "tel:+94000000000",
        note: "Available during business hours"
      },
      {
        type: "location",
        label: "Location",
        value: "Nugegoda, Sri Lanka",
        href: null,
        note: "University of Sri Jayewardenepura region, Sri Lanka"
      },
      {
        type: "linkedin",
        label: "LinkedIn Profile",
        value: "https://linkedin.com/in/samudini-jayasingha-193262408",
        href: "https://www.linkedin.com/",
        note: "Connect for professional and academic updates"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 12. FOOTER & METADATA
  // -----------------------------------------------------------------------
  footer: {
    monogram: "USJ",
    studentLine: "Science Undergraduate | Aspiring Pharmacist",
    affiliation: "University of Sri Jayewardenepura, Sri Lanka",
    academicDisclaimer: "Designed as a personal academic and professional portfolio. Prepared for internship, laboratory, and scientific learning applications."
  }
};
