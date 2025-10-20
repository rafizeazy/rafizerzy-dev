import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Play } from "lucide-react";
import { FaDatabase, FaJava, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiCodeigniter, SiShadcnui, SiNextdotjs } from "react-icons/si";

export const DATA = {
  name: "Rafi Imanullah",
  initials: "RI",
  url: "https://www.rafiimanullah.tech",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/oYjzYs5gZvJzD55Y6",
  description:
    "An IT Enthusiast passionate about building reliable and impactful that balance functionality, performance, and great user experience.",
  summary:
    "I am a final year **Computer Science** student passionate about software development, with a strong focus on **Java**. I enjoy solving problems and creating solutions that combine efficiency, reliability, and usability. I'm always eager to learn, adapt to new challenges, and grow as a developer through hands-on experience and collaboration.",
  avatarUrl: "/rafi.png",
  skills: [
    {
      name: "Java",
      icon: <FaJava className="size-3" />,
    },
    {
      name: "React",
      icon: <FaReact className="size-3" />,
    },
    {
      name: "PHP",
      icon: <FaPhp className="size-3" />,
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="size-3" />,
    },
    {
      name: "Laravel",
      icon: <FaLaravel className="size-3" />,
    },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter className="size-3" />,
    },
    {
      name: "Shadcn UI",
      icon: <SiShadcnui className="size-3" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="size-3" />,
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rafiimanullah@gmail.com",
    tel: "+62 812-9344-1581",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rafizerzy",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rafizerzy",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/rafizerzy",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rafiimanullah@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Smartplus Indonesia",
      href: "https://cvsmartplus.com/",
      badges: [],
      location: "Remote",
      title: "IT Intern - Internship",
      logoUrl: "/work-experience/smartplus.jpg",
      start: "Oct 2025",
      end: "Present",
      description: [
        "- Joined **PT Smartplus Indonesia** as an **IT Intern** in 2025.",
        "---",
        "- Responsible for developing and maintaining the company's **profile website** using **Laravel**.",
        "- Created a **web platform** to display and visualize **IoT product output data**.",
        "- Collaborated with the development team to ensure integration between IoT systems and web interface worked seamlessly.",
        "- Learned and explored **IoT** and **Robotics** technologies to support company projects and improve technical knowledge.",
      ],
      links: [
        {
          type: "Website",
          href: "https://cvsmartplus.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    // {
    //   company: "NTT DATA Indonesia",
    //   href: "https://www.nttdata.com/",
    //   badges: [],
    //   location: "Jakarta, Indonesia",
    //   title: "Software Engineer - Full-time",
    //   logoUrl: "/work-experience/nttdata.jpg",
    //   start: "Sep 2025",
    //   end: "Present",
    //   description: [
    //     "- Joined **NTT DATA Indonesia** as a **Software Engineer** in 2025.",
    //     "---",
    //     "- Responsible for designing, developing, and maintaining scalable backend services using **Java** with **Spring Boot** and **Microservices Architecture**.",
    //     "- Collaborated with cross-functional teams to analyze business requirements and design technical solutions for enterprise-level systems.",
    //     "- Built and optimized several RESTful APIs to ensure high performance and reliability for mission-critical applications.",
    //     "- Contributed to integrating backend services with various internal and external systems, focusing on security, scalability, and maintainability.",
    //     "- Performed code reviews, wrote unit and integration tests, and implemented CI/CD pipelines to ensure code quality and smooth deployments.",
    //     "- Regularly explored and implemented best practices in Java development, Spring Boot, microservices, and cloud-native solutions to improve system robustness.",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://www.nttdata.com/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    // },
    // {
    //   company: "PT Bank Mandiri (Persero) Tbk",
    //   href: "https://www.bankmandiri.co.id/",
    //   badges: [],
    //   location: "Jakarta, Indonesia",
    //   title: "Java Developer - Contract",
    //   logoUrl: "/work-experience/bankmandiri.png",
    //   start: "2024",
    //   end: "2025",
    //   description: [
    //     "- Joined **PT Bank Mandiri (Persero) Tbk** as a **Java Developer** in 2025.",
    //     "---",
    //     "- Responsible for designing, developing, and maintaining scalable backend services using **Java** with **Spring Boot** and **Microservices Architecture**.",
    //     "- Collaborated with cross-functional teams to analyze business requirements and design technical solutions for enterprise-level systems.",
    //     "- Built and optimized several RESTful APIs to ensure high performance and reliability for mission-critical applications.",
    //     "- Contributed to integrating backend services with various internal and external systems, focusing on security, scalability, and maintainability.",
    //     "- Performed code reviews, wrote unit and integration tests, and implemented CI/CD pipelines to ensure code quality and smooth deployments.",
    //     "- Regularly explored and implemented best practices in Java development, Spring Boot, microservices, and cloud-native solutions to improve system robustness.",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://www.nttdata.com/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    // },
    {
      company: "Luckynetwork SEA",
      href: "https://www.luckynetwork.net/en",
      badges: [],
      location: "Remote",
      title: "Java Developer - Self-employed",
      logoUrl: "/work-experience/lucky.jpg",
      start: "2021",
      end: "2025",
      description: [
        "- Joined **LuckyNetwork SEA** as a **Moderator** in 2021.",
        "---",
        "- Started maintaining a safe and fun environment for players as a **Minecraft Server Moderator**.",
        "- Enforced server rules, issued warnings, mutes, kicks, and bans when necessary.",
        "- Utilized **Java** for basic plugin configuration and moderation tools.",
        "---",
        "- Promoted to **Administrator** at **LuckyNetwork SEA** in Aug 2021.",
        "- Successfully enforced LuckyNetwork rules and maintained the community.",
        "- Improved and contributed to the **KitBattle** server, which reached around **60 concurrent players**.",
        "- Transformed a script gamemode called **ThePit** into a Minecraft plugin written in **Java**.",
        "- Used **Maven** and **Spigot API** during development.",
        "---",
        "- Advanced to **Developer** at **LuckyNetwork SEA** in Feb 2023.",
        "- Led the LuckyNetwork development team, consisting of plugin developers, server setup specialists, and builders.",
        "- Developed and maintained multiple Minecraft server plugins, including custom ones for various game modes.",
        "- Implemented new features and improvements to enhance user experience and gameplay.",
        "- Played a key role in the development of **LuckyBedwars1058**, increasing player count to **1800+ concurrent players**, making it the largest server in Southeast Asia.",
        "- Worked extensively with **Java**, **Gradle**, **Maven**, **Bukkit API**, **Spigot API**, and **Paper API**.",
      ],

      links: [
        {
          type: "Website",
          href: "https://www.luckynetwork.net/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  education: [
    {
      school: "Horizon University Indonesia",
      href: "https://horizon.ac.id/",
      degree: "Bachelor of Computer Science | 3.54 GPA",
      logoUrl: "/horizon.png",
      start: "2022",
      end: "2026",
    },
    // {
    //   school: "SMK Sehati Karawang",
    //   href: "https://smksehatikarawang.sch.id/",
    //   degree: "Computer and Network Engineering | 85.5%",
    //   logoUrl: "/sehati.png",
    //   start: "2019",
    //   end: "2022",
    // },
  ],
  projects: [
    {
      title: "Smartplus Indonesia",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description:
        "A website for **PT Smartplus Indonesia** to showcase their company profile, products, and services.",
      technologies: ["Laravel", "MySQL", "Tailwind", "Flowbite"],
      links: [
        {
          type: "Website",
          href: "https://cvsmartplus.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rafizerzy/smartplus-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/smartplus.png",
    },
    {
      title: "Edulify",
      href: "https://edulify-landing.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "**Edulify** is a modern online learning platform that helps you learn smarter with interactive and accessible courses for everyone.",
      technologies: ["PHP", "Laravel", "Tailwind", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://edulify-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rafizeazy/Edulify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/edulify.png",
    },
    {
      title: "SIBAS",
      href: "https://sibas-landing.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description:
        "**SIBAS** is a website for managing trash reports for Dinas Lingkungan Hidup Kota Karawang. Allows users to report trash issues and track their resolution.",
      technologies: ["PHP", "Laravel", "Tailwind", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://sibas-landing.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rafizeazy/sibasv2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sibas.png",
    },
    {
      title: "HorizonDesk",
      href: "https://github.com/rafizeazy/horizondesk",
      dates: "2024",
      active: true,
      description:
        "**HorizonDesk** is a ticketing application for managing student and lecturer requests in **Horizon University**.",
      technologies: ["Dart", "Flutter", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rafizeazy/horizondesk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/horizondesk1.png",
    },
    {
      title: "Blocky Core",
      href: "https://github.com/rafizeazy/blocky-core",
      dates: "2021",
      active: false,
      description:
        "**Blocky Core** is a Minecraft server core plugin that provides essential features for server management, player interactions, and game modes.",
      technologies: ["Java", "Gradle", "Spigot API", "Bukkit API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rafizeazy/blocky-core",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/blockycore.png",
    },
    {
      title: "Atreus",
      href: "https://github.com/rafizeazy/atreus",
      dates: "2022",
      active: false,
      description:
        "**Atreus** is a Minecraft server core plugin that utilizes the micro-service architecture and gRPC to be as performant and scaleable as possible.",
      technologies: ["Java"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rafizeazy/atreus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/luckycore.png",
    },
    {
      title: "LuckyEssential",
      href: "https://github.com/rafizeazy/luckyessential",
      dates: "2023",
      active: false,
      description:
        "Lightweight yet feature-rich plugin designed to improve the gameplay experience and moderation experience for Minecraft servers.",
      technologies: ["Java"],
      links: [
        {
          type: "Source",
          href: "https://github.com/rafizeazy/luckyessential",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/luckyessential.png",
    },
  ],
  positions: [
    {
      title: "Content Writer",
      dates: "July 2024 - Present",
      location: "GeeksForGeeks",
      description:
        "I like to write technical articles for GeeksForGeeks in my past time. Let's me be updated with various kinds of technologies.",
      image: "/gfg.png",
      links: [
        {
          title: "Contributions",
          href: "https://www.geeksforgeeks.org/user/chiragaggarwal5k/contributions/",
        },
      ],
    },
    {
      title: "Summer Immersion Participant",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      description:
        "Participated in a 10-day fully funded Summer Immersion Programme in Vietnam hosted by FPT University, providing rich insights into Vietnamese culture from a entrepreneurship and technological point of view.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_fpt_university.jpg",
      links: [
        {
          title: "Website",
          href: "https://international.fpt.edu.vn/",
        },
        {
          title: "Photos",
          href: "https://www.linkedin.com/posts/bennett-university_bennettuniversity-globalexposure-entrepreneurshipjourney-ugcPost-7232006796473683968-tKMa?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Technical Co-Head",
      dates: "August 2023 - May 2024",
      location: "Computer Society of India, Bennett University",
      description:
        "As the technical co-head of the CSI chapter of my university, I was responsible for organizing various events, workshops, and hackathons. I also mentored and guided students in their technical journey.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s",
      links: [
        { title: "Website", href: "https://csiindia.org/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/csi-india/",
        },
        {
          title: "Welcome Letter",
          href: "https://www.linkedin.com/posts/chiragagg5k_newrole-bennettuniversity-technology-activity-7097467074863636480-M1q6",
        },
      ],
    },
    {
      title: "Rearch Content Management",
      dates: "September 2022 - May 2023",
      location: "Bennett Undergraduate Research Society (BURS)",
      description:
        "The research society peaked my interest in the field of research, allowing me to be guided by seniors to work on various research related projects as well as organizing events like Rescon.",
      image: "/burs.png",
      links: [
        { title: "Website", href: "https://www.burs.bennett.edu.in/" },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/company/buresearchsociety/posts/?feedView=all/",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Summer Immersion in Vietnam",
      dates: "July 2024",
      location: "FPT University, Da Nang, Vietnam",
      image: "/achievements/summer-immersion.jpeg",
    },
    {
      title: "Github Constellation",
      dates: "June 2024",
      location: "Bangalore",
      image: "/achievements/github-constellation.jpeg",
    },
    {
      title: "Hackaccino",
      dates: "April 2024",
      location: "CSI Bennett University",
      image: "/achievements/hackaccino.jpeg",
    },
    {
      title: "HackWithDelhi",
      dates: "April 2024",
      location: "GL Bajaj Institute of Technology and Management",
      image: "/achievements/hackwithdelhi.jpeg",
    },
    {
      title: "HackCBS",
      dates: "November 2023",
      location: "Shaheed Sukhdev College of Business Studies",
      image: "/achievements/hackcbs.jpeg",
    },
    {
      title: "Luminous TechnoX Hackathon",
      dates: "December 2023",
      location: "Taj City Center, Gurugram",
      image: "/achievements/luminous.jpg",
    },
  ],
} as const;
