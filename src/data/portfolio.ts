export interface Project {
  title: string
  subtitle: string
  period: string
  github: string
  tags: string[]
  highlights: string[]
  metrics?: { label: string; value: string }[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const personal = {
  name: 'Atharva Gangrade',
  firstName: 'Atharva',
  title: 'Computer Science Student',
  tagline: 'Product management, data analytics & software development',
  location: 'Charlotte, NC',
  email: 'atharvagangrade8@gmail.com',
  phone: '(704) 369-6432',
  linkedin: 'https://linkedin.com/in/atharva-gangrade',
  github: 'https://github.com/atharva-0085',
  website: 'https://agangrad2.wixsite.com/atharva-gangrade',
}

export const summary =
  'Computer Science student with experience in product management, data analytics, and software development. Skilled at translating business requirements into data-driven solutions, optimizing workflows, and collaborating across cross-functional teams.'

export const education = {
  school: 'University of North Carolina at Charlotte',
  degree: 'B.S. Computer Science',
  location: 'Charlotte, NC',
  period: 'August 2023 – May 2027 (Expected)',
  gpa: '3.71',
  honors: [
    "Dean's List: Fall 2023, Spring 2024",
    "Chancellor's List: Fall 2024, Spring 2025, Fall 2025, Spring 2026",
  ],
  courses: [
    'Introduction to Java',
    'Introduction to Python',
    'Introduction to Software Engineering',
    'Data Structures & Algorithms',
    'Database Design & Implementation',
    'Operating Systems & Networking',
    'Data Mining',
    'Cloud Computing & Data Analysis',
    'Machine Learning',
    'Visual Analytics',
  ],
}

export const experience: Experience[] = [
  {
    role: 'Product Management Intern',
    company: 'Stirista',
    location: 'San Antonio, TX',
    period: 'May 2026 – Present',
    highlights: [
      'Collaborate with Product, AI Engineering, Data, and Client Services teams to evaluate workflows and drive product improvement initiatives.',
      'Analyze user journeys across StiristaOne to identify usability gaps, feature enhancement opportunities, and workflow inefficiencies.',
      'Research and propose AI-driven solutions for audience discovery, campaign planning, and customer targeting.',
      'Gather stakeholder requirements and translate business needs into user stories, feature recommendations, and product specifications.',
      'Perform product testing and QA for audience segmentation and activation features.',
      'Designed and presented an AI-assisted audience planning solution to streamline targeting workflows.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C#'],
  },
  {
    category: 'Data',
    skills: ['SQL', 'Data Modeling', 'ETL/ELT', 'KPI Analysis'],
  },
  {
    category: 'Data Engineering',
    skills: ['Spark', 'Hadoop', 'MapReduce'],
  },
  {
    category: 'BI & Visualization',
    skills: ['Power BI'],
  },
  {
    category: 'Cloud & Tools',
    skills: ['AWS', 'Azure', 'Git', 'Docker'],
  },
  {
    category: 'Backend',
    skills: ['Django', 'REST APIs'],
  },
]

export const projects: Project[] = [
  {
    title: 'Used Car Price Prediction',
    subtitle: 'Advanced Regression Modeling & Feature Intelligence',
    period: 'June 2025 – Aug 2025',
    github: 'https://github.com/atharva-0085/Used-Car-Price-Prediction',
    tags: ['Python', 'Regression', 'Cross-Validation', 'Hyperparameter Tuning'],
    highlights: [
      'Cleaned and transformed structured datasets for modeling and reporting.',
      'Benchmarked models using cross-validation to select optimal performance.',
      'Extracted interpretable drivers to support data-driven valuation and reporting.',
      'Applied hyperparameter tuning for systematic performance optimization.',
    ],
  },
  {
    title: 'Chicago Food Inspections Big Data Pipeline',
    subtitle: 'Hadoop MapReduce at Scale',
    period: 'Aug 2025 – Dec 2025',
    github: 'https://github.com/atharva-0085/Chicago-Food-Inspections-',
    tags: ['Java', 'Hadoop', 'MapReduce', 'Distributed Systems'],
    metrics: [{ label: 'Runtime Reduction', value: '28%' }],
    highlights: [
      'Designed distributed data processing workflows for large public datasets.',
      'Optimized relational outputs for analytics and reporting use cases.',
      'Reduced runtime by 28% through partitioning strategy and reducer parallelism.',
      'Ensured data integrity through validation logic in batch pipelines.',
    ],
  },
  {
    title: 'UniSphere',
    subtitle: 'Full-Stack Platform for International Students',
    period: 'Feb 2025 – May 2025',
    github: 'https://github.com/atharva-0085/UniSphere',
    tags: ['Django', 'REST APIs', 'SQL', 'RBAC'],
    metrics: [{ label: 'Query Latency', value: '-15%' }],
    highlights: [
      'Designed normalized relational schemas for high-volume transactions.',
      'Optimized SQL queries and indexing to reduce latency by 15% under concurrent usage.',
      'Implemented role-based access control (RBAC) with secure authentication.',
      'Structured backend APIs for clean data flow across housing and roommate workflows.',
    ],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
