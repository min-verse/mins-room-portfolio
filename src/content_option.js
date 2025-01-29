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
    main_img_url:"https://i.imgur.com/s2Jek8X.png",
    contact_url_arr: ['https://i.imgur.com/SMcOE1J.jpeg', 'https://i.imgur.com/mdQMUse.jpeg', 'https://i.imgur.com/uSYwh5F.jpeg']
};

const dataabout = {
    title: "Overview",
    aboutme: `My name is Kevin Tu, and I'm a Software Engineer with professional Backend, Frontend, and Fullstack experience with some contributions to configuring CI/CD Pipelines and DevOps. As someone who likes taking the initiative, I've grown more and more invested in changing the world through tech. I take pride in standing up applications that are scalable, maintainable, and testable.`,
    aboutme2:`I'm enthusiastic about jumping onto new interesting projects, creating third-party API integrations, contributing to building out new features, and leading discussions on microservices architecture to make business logic and applications more responsive and scalable. In addition to taking charge of constructing backend systems and flow along with optimizing parts of the DevOps / CI/CD pipeline, I'm always enthusiastic about building out responsive UIs to maximize UX and SEO (Next.js, Remix.run).`,
    aboutme3:`Even now, I continue to combine my experiences across the stack to become a competent and robust Software Engineer who can jump onto any project with passion and drive. I enjoy creating intelligent solutions with a focus on understanding a tight feedback loop, end user experience, and scaling for rapid growth.`
};

const worktimeline = [
    {
        jobtitle: "Senior Backend Engineer",
        where: "Boll & Branch",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Boll_and_Branch_Logo_Wordmark.jpg/1200px-Boll_and_Branch_Logo_Wordmark.jpg',
        desc:"As a Software Engineer on the Backend team, I mainly oversaw large change management with warehousing systems, modularizing existing integrations, creating scalable microsrevice solutions, and integrating 3rd party APIs related to e-commerce such as Loop, Stripe, Shopify, and more.",
        date: "2023-Present",
        skills: ['Ruby on Rails', 'Python', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'React.js', 'Remix.run', 'JavaScript', 'TypeScript', 'Redis', 'Sidekiq'],
        bullets: [
            'Lead transformation of legacy Rails monolith codebase by identifying areas of inefficiency, eliminating 80% of deprecated code, and proactively building out and spinning up scalable, resilient microservices to protect key business logic flows and integrations',
            'Develop comprehensive fullstack solutions for dozens of cross-functional needs such as responsive frontend analytics dashboards, warehouse and shipping status integrations and dashboard, and a small pub/sub microservice for key e-commerce storefront events',
            'Implement seamless integration with multiple critical third-party APIs for e-commerce and payments including Stripe, Loop, Shopify, various warehousing systems to increase fulfillment efficiency by over 40%'
        ]
    },
    {
        jobtitle: "Fullstack Software Engineer",
        where: "Flatiron School",
        logo: "https://coursereport-production.imgix.net/uploads/school/logo/8/original/flatironschool.png?w=72&h=72&fit=clamp&dpr=1&q=75",
        desc:"While at Flatiron, I also took on fullstack development duties principally dedicated to migrating part of the Flatiron website to Next.js / TypeScript from React.js / JavaScript.",
        date: "2022-2023",
        skills: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'Ruby on Rails', 'Django', 'Python', 'Ruby'],
        bullets: [
            'Built out React.js Component Library for the website',
            'Converted core website pages from React.js to Next.js to optimize SEO',
            'Abstracted certain authentication steps from extenal API into NextAuth'
        ]
    },
    {
        jobtitle: "Applications Developer",
        where: "JPMorgan Chase & Co.",
        logo: "https://pbs.twimg.com/profile_images/1605200105799401474/9cb5qdVk_400x400.png",
        desc:"In JPMorgan's Global Investment Bank, I drove important business decisions regarding bank performance on ECM, DCM, and M&A deals as an Applications Developer ",
        date: "2021-2022",
        skills: ['Django', 'Python', 'Celery', 'Tableau', 'Alteryx'],
        bullets: [
            'Convert outdated polling data pipeline feeding Investment Bank data on ECM, DCM, and M&A deals into an automated pipeline using Alteryx for more accurate real-time reporting to inform critical global investment bank deals',
            'Designed interactive, responsive, and filterable Tableau data visualization dashboards for financial reporting and computed risk models for investment bank in compliance with federal regulatory standards'
        ]
    },
    {
        jobtitle: "Software Development Product Manager",
        where: "JPMorgan Chase & Co.",
        logo: "https://pbs.twimg.com/profile_images/1605200105799401474/9cb5qdVk_400x400.png",
        desc:"During my time as a Product Manager, I became a Developer Advocate as well, and I worked across all lines of business in the bank to implement important features into our internal financial controls inventory tool. I also led cross-functional SCRUM meetings and roadmapped out sprints, product goals, and expectations.",
        date: "2020-2021",
        bullets: [
            'Optimized A/B Testing practices to enhance features before release resulting in a 70% improvement in user satisfaction scores and 50+ UI/UX enhancements to internal applications and systems',
            'Led User Acceptance Testing (UAT) according to acceptance criteria and performed careful QA Testing before providing final sign-off before pushing any feature into production'
        ]
    },
    {
        jobtitle: "Xfinity Mobile Marketing Analyst",
        where: "Comcast NBCUniversal",
        logo: "https://www.xfinity.com/mobile-static/xfinitymobile-logo.jpg",
        desc: "On the Xfinity Mobile Marketing Team, I was at the forefront of a new technology product offering from Comcast NBCUniversal and used my initiative to jump onto a project to revitalize our lead generation and marketing funnel software systems as well as bring Xfinity Mobile to more retail channels.",
        date: "2019",
        bullets: [
            'Built out lead generation application across regional Xfinity call centers to drive conversion and upsell rates for Xfinity Mobile 80% and to track customer funnel',
            'Analyzed and aggregated market trends and leveraged my research to help open over 65+ new retail locations for Comcast in this fast-paced, start-up environment',
        ]
    },
];

const skills = [
    {
        name: "Python",
        value: 100,
    },
    {
        name: "Ruby",
        value: 100,
    },
    {
        name: "JavaScript",
        value: 100,
    },
    {
        name: "Node.js",
        value: 100,
    },
    {
        name: "React.js",
        value: 100,
    },{
        name: "Docker",
        value: 100,
    },
    {
        name: "Kubernetes",
        value: 100,
    },
    {
        name: "Jenkins",
        value: 100,
    },
    {
        name: "MongoDB",
        value: 100,
    }
];

const skills2 = [
    {
        name: "Django",
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
        name: "Express.js",
        value: 100,
    },
    {
        name: "Next.js",
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
        name: "Microservices",
        value: 100,
    }
];

const services = [
    {
        title: "Full-Stack App Development",
        description: "From the front-end to the back-end, even to SQL / NoSQL databases and CI/CD Pipelines, I am well-versed in full-stack app development. Ready to hop on any project and quick to learn!",
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
    description: "Please contact me for any business inquiries, links on the sidebar. Glad to be of service!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/min-verse",
    linkedin: "https://www.linkedin.com/in/kevin-tu-305805131/",
    twitter: "https://twitter.com/min_verse",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    skills2,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
