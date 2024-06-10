import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Saharsh Bhansali",
  initials: "SB",
  location: "Chennai, India, IST",
  locationLink: "https://www.google.com/maps/place/Chennai",
  about:
    "Cybersecurity and System Administration enthusiast, crafting robust solutions with meticulous attention to detail, pursuing a Bachelors in Computer Science.",
  summary:
    "I’m an Cyber Security enthusiast 👨🏻‍💻 currently pursuing my Bachelors in Computer Science 🎓. I love exploring new technologies everyday and never pass up on an opportunity to learn 📱. I’m also immensely passionate about guiding and mentoring others who are new to the field 👨‍🏫. If there is one motto I live by, it’s “Habits will make or break you. Practice good OpSec!” ",
  avatarUrl: "https://avatars.githubusercontent.com/saharshbhansali",
  personalWebsiteUrl: "https://saharshbhansali.github.io/about-me/",
  contact: {
    email: "saharsh.bhansali15@gmail.com",
    tel: "+919941286420",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/saharshbhansali",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saharsh-bhansali/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/SaharshBhansali",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology - Vellore",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2021",
      end: "2025",
    },
    {
      school: "Bhavan's Rajaji Vidyashram",
      degree: "Higher Secondary School",
      start: "2019",
      end: "2021",
    },
  ],
  work: [
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
  ],
  skills: [
    "Python",
    "Bash/ZSH Scripting",
    "BurpSuite",
    "Metasploit",
    "Go",
    "AWS DevOps",
    "Git/GitHub",
  ],
  projects: [
    {
      title: "CLI-TOP",
      techStack: [
        "Go",
        "BurpSuite",
        "Cobra",
        "Glamour",
      ],
      description: "A CLI interface to access the university’s Learning Management System (LMS).",
      // logo: ConsultlyLogo,
      link: {
        label: "cli-top.acmvit.in",
        href: "https://cli-top.acmvit.in/",
      },
    },
    {
      title: "Career Node",
      techStack: ["Flask", "TypeScript", "ChatGPT 3.5 API", "Hugging Face Models"],
      description:
        "An AI-driven, personalized guidance and skill development platform, winner of the Yantra Hackathon's Quality Education track.",
      // logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/kaushalrathi24/funtimeError",
      },
    },
    {
      title: "Access Denied",
      techStack: ["Python", "Jupyter Notebook", "Javascript"],
      description:
        "Proof Of Concept model showcasing a decentralized authentication system using Zero Knowledge Proofs (ZKPs).",
      // logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ACM-VIT/accessDenied",
      },
    },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
