const logotext = "MIN'S ROOM";
const meta = {
    title: "Kevin (Min) Tu",
    description: "I'm Kevin (Min) Tu _ Full-Stack Developer, Currently Based in NYC",
};

const introdata = {
    title: "I'm Kevin (Min) Tu!",
    animated: {
        first: "Experienced Software Engineer",
        second: "Also a Digital Illustrator",
        third: "Please Feel Free to Reach Out",
    },
    description: `I'm a Software Engineer with years of professional experience specializing in architecting backend systems and building fullstack microservices from the ground up using the following technologies:`,
    description2:`Python / Django, Ruby on Rails, Node.js / Express.js, React.js / TypeScript, Next.js, and Remix.run using both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.`,
    description3: 'Additional Technologies: Docker, Jenkins, Kubernetes, AWS (Amazon Web Services), Argo CD',
    description4: 'Please click below to see my Experiences, learn more About Me, or feel free to Contact Me by using the links on the side panel',
    your_img_url:"https://i.imgur.com/s2Jek8X.png",
};

const dataabout = {
    title: "Overview",
    aboutme: `My name is Kevin Tu, and I'm a Software Engineer with professional Frontend, Backend, and Fullstack experience with some contributions to configuring CI/CD Pipelines and DevOps. As someone who likes taking the initiative, I've grown more and more invested in changing the world through tech. I take pride in standing up applications that are scalable, maintainable, and testable.`,
    aboutme2:`I'm enthusiastic about jumping onto new interesting projects, creating third-party API integrations, contributing to building out new features, and leading architecting on microservices to make business logic and applications more responsive and scalable. In addition to taking charge of contructing backend systems and flow along with optimizing parts of the DevOps / CI/CD pipeline, I always am enthusiastic about building out responsive user-friendly UIs to maximize UX and SEO (Next.js, Remix.run).`,
    aboutme3:`Since then, I continue to combine my experiences across the stack to become a competent and robust Software Engineer who can jump onto any project with passion and drive. I enjoy creating intelligent solutions with a focus on understanding a tight feedback loop, end user experience, and scaling for rapid growth.`
};

const worktimeline = [
    {
        jobtitle: "Senior Backend Engineer",
        where: "Boll & Branch",
        desc:"Integrated new technologies, automation, and dashboards with existing web apps, ensuring rapid and consistent enhancements",
        date: "2023-Present",
        skills: ['Ruby on Rails', 'Python', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'React.js', 'Remix.run', 'JavaScript', 'TypeScript', 'Redis', 'Sidekiq'],
        bullets: [
            'Lead transformation of legacy Rails monolith codebase by identifying areas of inefficiency, eliminating 80% of deprecated code, and proactively building out and spinning up scalable, resilient microservices to protect key business logic flows and integrations',
            'Develop comprehensive fullstack solutions for a dozens of cross-functional needs such as responsive frontend analytics dashboards, warehouse and shipping status integrations and dashboard, and a small pub/sub microservice for key e-commerce storefront events',
            'Implement seamless integration with multiple critical third-party APIs for e-commerce and payments including Stripe, Loop, Shopify, various warehousing systems to increase fulfillment efficiency by over 40%'
        ]
    },
    {
        jobtitle: "Fullstack Software Engineer",
        where: "Flatiron School",
        desc:"Integrated new technologies, automation, and dashboards with existing web apps, ensuring rapid and consistent enhancements",
        date: "2022-2023",
        skills: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'Ruby on Rails', 'Django'],
        bullets: [
            'Designed and wrote out a litany of React.js Components for the website',
            'Converted core main website pages from React.js to Next.js to optimize SEO'
        ]
    },
    {
        jobtitle: "Applications Developer",
        where: "JPMorgan Chase & Co.",
        desc:"Integrated new technologies, automation, and dashboards with existing web apps, ensuring rapid and consistent enhancements",
        date: "2021-2022",
        skills: ['Django', 'Python', 'Celery', 'Tableau', 'Alteryx'],
        bullets: [
            'Convert outdated pipeline feeding Investment Bank data on ECM, DCM, and M&A deals into an automated pipeline using Tableau / Alteryx for more accurate real-time reporting to inform critical global investment bank deals',
            'holder'
        ]
    },
    {
        jobtitle: "Software Development Product Manager",
        where: "JPMorgan Chase & Co.",
        desc:"Managed app development according to the AGILE method, wrote stories, schedule sprints, and provided rigorous QA testing for UI/UX",
        date: "2020-2021",
        bullets: [
            'managing',
            'product'
        ]
    },
    {
        jobtitle: "Xfinity Mobile Marketing Analyst",
        where: "Comcast NBCUniversal",
        desc:"Analyzed and aggregated market trends and leveraged my research to help open over 65+ new retail locations for Comcast in this fast-paced, start-up environment",
        date: "2019",
        bullets: [
            'marketing',
            'analytics'
        ]
    },
];

const skills = [
    {
        name: "Python",
        value: 100,
    },
    {
        name: "Django",
        value: 100,
    },
    {
        name: "Ruby",
        value: 100,
    },
    {
        name: "Ruby on Rails",
        value: 100,
    },
    {
        name: "TypeScript",
        value: 100,
    },
    {
        name: "React.js",
        value: 100,
    },
    {
        name: "JavaScript",
        value: 100,
    },
    {
        name: "Next.js",
        value: 100,
    },
    {
        name: "Remix.run",
        value: 100,
    },
    {
        name: "Express.js",
        value: 100,
    },
    
    {
        name: "Node.js",
        value: 100,
    },
    {
        name: "Django",
        value: 100,
    },
    {
        name: "AWS - Amazon Web Services",
        value: 100,
    },
    {
        name: "MySQL",
        value: 100,
    },
    {
        name: "PostgreSQL",
        value: 100,
    },
    {
        name: "MongoDB",
        value: 100,
    },
    {
        name: "Microservices",
        value: 100,
    }
];

const services = [{
        title: "Full-Stack App Development",
        description: "From the front-end to the back-end, I am well-versed in full-stack app development. Ready to hop on any project and quick to learn!",
    },
    {
        title: "UI & UX Design",
        description: "Having a strong focus in design and UX from my professional experience QA testing as a Product Manager, I've carried that with me into a career in programming.",
    },
    {
        title: "Digital Illustration",
        description: "Finally, I am an avid digital illustrator and strive to integrate that with my endeavors in coding.",
    },
];

const dataportfolio = [{
    img: "https://i.imgur.com/Bx0Ftkl.gif",
        desctiption: "Natural One - DnD Partymaker and tracker built with TypeScript for static typing and Ruby for the backend, leveraging React.js and Sinatra API with Redux for state management",
        link: "https://github.com/min-verse/natural-one-team-builder",
    },{
        img: "https://i.imgur.com/6HWZuaR.gif",
        desctiption: "Lumbini - A private, secure \n diary app built on a React, Express.js, and SQLite stack with JWToken Authentication",
        link: "https://github.com/min-verse/lumbini-app",
    },
    {
        img: "https://i.imgur.com/KchxOCv.gif",
        desctiption: "The 11th Power - A Clone of the Hit Game 2048 built entirely in React, updates continuing to be made",
        link: "https://github.com/min-verse/the-11th-power",
    },
    {
        img: "https://i.imgur.com/XX4fPQC.gif",
        desctiption: "Beyond Lunar - A website that aggregates news about space discoveries from across the world. Includes an original moon animation I made for the logo as well as a live Twitter feed of some of the world's biggest space agencies.",
        link: "https://github.com/disposable-kiwi/Beyond-Lunar",
    }
];

const contactConfig = {
    YOUR_EMAIL: "ktu2020@hotmail.com",
    description: "Please contact me for any business inquiries. Glad to be of service!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/min-verse",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/kevin-tu-305805131/",
    twitter: "https://twitter.com/min_verse",
    youtube: "https://youtube.com",
    twitch: "https://twitch.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
