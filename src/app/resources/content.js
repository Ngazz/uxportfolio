import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Joseph ',
    lastName: 'Ngahu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Design Engineer',
    avatar: '/images/avatar.jpg',
    location: 'Africa/Nairobi', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Swahili'] // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: < > Talk to { person.firstName } < />,
    description: < > I like to Talk.I like to engage with brilliant minds like yourself about how we can build the next great project together.I 'm just a call away! </>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/NGAZZ',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/josephngahu',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ngahujoseph@proton.me',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: < > Design engineer < />,
    subline: < > I 'm Ngahu, a Graphics and UX design engineer. I delight in crafting intuitive user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: < > Ngahu is a Kenyan - based design engineer with a passion
        for transforming complex challenges into simple,
        elegant design solutions.His work spans digital interfaces,
        interactive and creative experiences,
        and the convergence of design and technology. < />
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [{
                company: 'Freelance Designer',
                timeframe: '2023 - Present',
                role: 'Grapics and UX Design Engineer',
                achievements: [ < >
                    Designed the UI / UX
                    for the Denloy Inv.Ltd.Point of Sale System(POS), resulting in a 40 % increase efficiency on tracking operation of multiple shops. < />, < >
                    Spearheaded a unified data driven strategy with a real - time insights in sales, customer trends and inventory levels across multiple shops, enabling informed business decisions. < />
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'ICONS Hub, Kisii',
                timeframe: '2022 - 2023',
                role: 'UX Designer',
                achievements: [ < >
                    Developed a design system that unified the brand across multiple platforms, improving design consistency by 20 % . < />, < >
                    Redesigned the main ICONS Hub website improving its user experience and 25 % faster load time. < />
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [{
                name: 'Kisii University',
                description: < > Studied software engineering. < />,
            },
            {
                name: 'Google Market Garage',
                description: < > Studied digital marketing,
                branding and Search Engine Optimization. < />,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [{
                title: 'Prototyping',
                description: < > Able to prototype in: Figma,
                Sketch and Adobe Create Suite with unnatural speed. < />,
                // optional: leave the array empty if you don't want to display images
                images: [{
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Web Development',
                description: < > Building next gen web apps with Next.js + React.js + MySQL. < />,
                    // optional: leave the array empty if you don't want to display images
                images: [{
                    src: '/images/projects/project-01/cover-04.jpg',
                    alt: 'Project image',
                    width: 16,
                    height: 9
                }, ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog routeiu
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [{
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };