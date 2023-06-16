/* Change this file to get your personal Portfolio */

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
  username: "Wei Cheng",
  title: "Hi all, I'm Wei",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Python / Reactjs / Nodejs / MongoDB / Mongoose and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1R2cHupi6gNW2vBO71-avbndve2IuUaca/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chengwei0815",
  linkedin: "https://www.linkedin.com/in/weicheng611/",
  gmail: "wcheng2@babson.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle:
    "Love to use MERN stack to build projects, and willing to learn other new tech stacks",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CodeSquad Software Engineering Bootcamp",
      logo: require("./assets/images/codesquadLogo.png"),
      subHeader: "Certificate",
      duration: "September 2022 - June 2023",
      desc: "700+ hours intensive course in Software Engineering methodologies and technologies Portfolio Projects."
    },
    {
      schoolName: "University of Massachusetts Boston",
      logo: require("./assets/images/umassbostonLogo.png"),
      subHeader: "Master of Science in Finance",
      duration: "February 2020 - August 2022",
      desc: "Ranked top 10% in the program. Honored TA/RA. Took courses about Python, Data Structures, Stata, Research Skills, Financial Modeling, Risk Management..."
    },
    {
      schoolName: "Babson College",
      logo: require("./assets/images/babsonLogo.png"),
      subHeader: "Master of Science in Accounting",
      duration: "February 2014 - December 2014",
      desc: "Took courses about Logit Model, EViews, Financial Reporting, Financial Analysis..."
    },
    {
      schoolName: "University of Massachusetts Boston",
      logo: require("./assets/images/umassbostonLogo.png"),
      subHeader: "Bachelor of Science in Business Administration",
      duration: "February 2010 - December 2013",
      desc: "Minored Computer Science. Ranked top 10% in the program. Took courses about Algorithms, Linear Algebra, Probability, Java..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
      role: "Software Engineer Intern",
      company: "BANGOR CHINESE SCHOOL",
      companylogo: require("./assets/images/bangorLogo.png"),
      date: "Jan 2023 – Jun 2023",
      desc: "I have developed a user-friendly website where individuals can share their experiences. To improve the overall user experience, I have added functionalities for administrators to create, edit, and delete content. This empowers administrators to efficiently manage the website, ensuring up-to-date and relevant content. Users can actively participate by sharing their experiences, while administrators have greater control over content curation and management. These additions have made the website more dynamic and interactive, enhancing the user interface."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Individual Projects",
  subtitle: "Those projects are all full-stack projects done by myself",
  projects: [
    {
      image: require("./assets/images/codesquadComicsLogo.png"),
      projectName: "CodeSquad Colics",
      projectDesc:
        "CodeSquad Comics is a full-stack application with HTML, CSS, and JavaScript for the frontend, and Node.js, MongoDB, and Express.js for the backend. Users can create, update, and remove comics from the admin panel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amused-teddy-calf.cyclic.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bookstore.png"),
      projectName: "Wei's Bookstore",
      projectDesc:
        "Bookstore App is a web application that sells books adapted into movies and TV shows, built according to the specifications of the CodeSquad course project. It utilizes RESTful routes, CRUD operations, Node.js, and a NoSQL (MongoDB) database.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://curious-wasp-pantsuit.cyclic.app/"
        }
      ]
    },
    {
      image: require("./assets/images/bangorSchool.png"),
      projectName: "Bangor School",
      projectDesc:
        "Developed websites and UI designs using HTML, CSS, JavaScript, Node/Express, and MongoDB for various clients, including potential applicants, enabling them to sign up, sign in, and perform essential tasks such as editing, deleting, updating, and adding courses provided by the school.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://brainy-pear-viper.cyclic.app/"
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
      title: "CodeSquad Software Engineering",
      subtitle:
        "Accomplished CodeSquad Bootcamp with over 700 hours of intensive coursework in software engineering methodologies and technologies",
      image: require("./assets/images/codesquadLogo.png"),
      imageAlt: "CodeSquad Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? I am open to talking with you! My Inbox is open for all.",

  email_address: "wcheng2@babson.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
