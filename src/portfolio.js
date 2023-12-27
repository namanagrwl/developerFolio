/* Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naman Agrawal",
  title: "Hi all, I'm Naman",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 skilled in Kubernetes, Ansible, Jenkins, Docker, Terraform, Prometheus, Elastic Stack, and other essential tools for streamlined, efficient, and scalable development workflows."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1mZNRrGkeIBhkUq0EvIpvbedYtnT4bfuWOQC_JmnTFXg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/namanagrwl",
  linkedin: "https://www.linkedin.com/in/namanagrawallinkdin/",
  gmail: "namanagrawal6222@gmail.com",
  twitter: "https://twitter.com/_Naman_Agrawal/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONTE DEVOPS ENGINEER WHO WANTS TO LEARN AND EXPLORE THE WORLD OF DEVOPS",
  skills: [
    emoji(
      "⚡ Certified Kubernetes Administrator with expertise in overseeing Kubernetes clusters, whether deployed on-premises or in cloud environments."
    ),
    emoji(
      "⚡ Automation Skills: Proficient in scripting languages such as Python and Shell, with experience in using configuration management tools like Ansible and Terraform."
    ),
    emoji(
      "⚡ Continuous Integration/Continuous Deployment (CI/CD): Experienced with CI/CD tools like Jenkins and Git Actions to stramline the software delivery process."
    ),
    emoji(
      "⚡ Containerization: Knowledgeable about Docker, Docker Compose, and container orchestration tools such as Kubernetes."
    ),
    emoji(
      "⚡ Monitoring and Logging: Experienced with monitoring tools like ELK Stack, Prometheus,and Grafana."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "kuberenetes",
      fontAwesomeClassname: "fab fa-empire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fab fa-adn"
    },
    {
      skillName: "Elastic Stack",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "DevOps",
      fontAwesomeClassname: "fas fa-infinity"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "prometheus",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/medi_capsLogo.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Acquired 9.03 CGPA out of 10.0 CGPA, with strong knowledge of progamming and computer networks.",
      descBullets: [
        "Head of Finance at Medi-Caps Incubation and Innovation Centre(MIIC).",
        "Active member of Students' Technical and Innovation Club(STIC)."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Security",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "ConsultAdd Inc.",
      companylogo: require("./assets/images/consultAddLogo.png"),
      date: "May 2023 – Present",
      desc: "Responsible of the automation of monitoring infrastructure",
      descBullets: [
        "Automated the deployment and configuration of Elastic Beats using Ansible across 20+ on-prem RHEL VMs to monitor diverse applications.",
        "Automated the deployment and Configuration of Elastic Beats on Windows on-perm VMs using Python Scripts to monitor applications like MSSQL.",
        "Actively contributed to the successful deployment and automation of Elastic Cloud on Kubernetes (ECK) using Ansible.",
        "Deployed Filebeat and Metricbeat to monitor a 25+ node Kubernetes cluster with the ECK Kubernetes operator, ensuring comprehensive monitoring coverage.",
        "To streamline the deployment and configuration processes, We employed Jenkins pipelines to execute Ansible playbooks across multiple environments, including DEV, QA,SDE and PROD.",
        "This orchestration facilitated efficient and consistent deployment practices across various stages of the development lifecycle reducing efforts by 70%, aligning seamlessly with DevOps methodologies "
      ]
    },
    {
      role: "ISE  Intern",
      company: "ConsultAdd Inc.",
      companylogo: require("./assets/images/consultAddLogo.png"),
      date: "Jan 2023 – May 2023",
      desc: "Internship as an Information System Engineer, specializing in Elastic Stack and DevOps tools.",
      descBullets: [
        "Configured an on-premises Elastic Cluster to efficiently ship Filebeat and Metricbeat logs to Elasticsearch via Logstash.",
        "Implemented various use cases, including Monitoring, Enterprise Search, and Observability, leveraging the Elastic Stack.",
        "Actively contributed to the successful deployment and automation of Elastic Cloud on Kubernetes (ECK) using Ansible.",
        "Assisted in the migration of CentOS to Alma Linux, ensuring a smooth transition while maintaining system stability and performance.",
        "Received training in GitOps methodologies and successfully integrated them into the development workflow.",
        "Demonstrated proficiency in containerization technologies, such as Docker, to package and deploy applications consistently across different environments."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true  // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED WHILE LEARNING AND EXPORING DEVOPS",
  projects: [
    {
      projectName: "CI/CD pipeline with Jenkins",
      projectDesc: "Simple java-maven-app to build a complete CI/CD pipeline using Jenkins. Different Stages involve, building of a jar file, building a docker image, creating a deployment server through Terraform on AWS, and finally deploying the docker image on development server.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/namanagrwl/Complete_CI-CD_pipeline?tab=readme-ov-file#complete-cicd-pipeline"
        }
      ]
    },
    {
      projectName: "Terraform Project",
      projectDesc: "This is a repository which showcase my work during the learning process of Terraform. Different branch of the repository represent different Services implemented through Terraform.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/namanagrwl/terraform-learn?tab=readme-ov-file#learning-terraform"
        }
      ]
    },
    {
      projectName: "Ansible Project",
      projectDesc: "This is a repository which showcase my work during the learning process of Ansible (a automation tool which can be used for configuration management of remote server).",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/namanagrwl/ansible-learn?tab=readme-ov-file#learning-ansible"
        }
      ]
    },
    {
      projectName: "Microservice demo app",
      projectDesc: "In this project, I have monitored google demo-microservice-app deployed on a AWS EKS cluster using Prometheus and Grafana.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/namanagrwl/prometheus-monitoring?tab=readme-ov-file#monitoring-with-prometheus"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified Kubernetes Adminisator",
      subtitle:
        "Completed Certifcation from Linux Foundation for Kubernetes.",
      image: require("./assets/images/ckaLogo.png"),
      imageAlt: "CKA Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f8528edb-efcc-4f52-a2f9-d8f900ab4f7d/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Solution Architech - Associate",
      subtitle:
        "Completed Certifcation from AWS for AWS servies.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/62a57795-c422-4c4d-b58d-8d2563189b9b/public_url"
        }
      ]
    },

    {
      title: "Cisco Certified Network Associate - Introduction to Networks",
      subtitle: "Completed Certifcation from Cisco for CCNA - Introduction to Networks.",
      image: require("./assets/images/CCNALogo.png"),
      imageAlt: "CCNA Badge",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/8086920b-2a65-4857-8f76-db5cf0c7f5bc"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-xxxxx",
  email_address: "namanagrawal6222@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_Naman_Agrawal", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
