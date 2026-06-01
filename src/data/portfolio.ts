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

export const personal = {
  name: 'Atharva Gangrade',
  firstName: 'Atharva',
  title: 'Computer Science Student',
  tagline: 'Building production-grade ML systems & distributed data pipelines',
  location: 'Charlotte, NC',
  email: 'atharvagangrade8@gmail.com',
  phone: '(704) 369-6432',
  linkedin: 'https://linkedin.com/in/atharva-gangrade',
  github: 'https://github.com/atharva-0085',
}

export const summary =
  'Computer Science student building production-grade ML systems and distributed data pipelines processing large-scale datasets. Improved model accuracy (R² up to 0.89) and reduced system runtime by up to 28% through optimization and scalable backend design. Strong in Python, Java, distributed systems, and performance-driven engineering.'

export const education = {
  school: 'University of North Carolina at Charlotte',
  degree: 'B.S. Computer Science',
  location: 'Charlotte, NC',
  period: 'August 2023 – May 2027 (Expected)',
  gpa: '3.66',
  honors: ["Dean's List: Fall 2023, Spring 2024", "Chancellor's List: Fall 2024, Spring 2025, Fall 2025"],
  courses: [
    'Data Structures & Algorithms',
    'Database Design & Implementation',
    'Operating Systems & Networking',
    'Data Mining',
    'Cloud Computing & Data Analysis',
    'Machine Learning',
    'Visual Analytics',
    'Software Engineering',
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'C#', 'SQL'],
  },
  {
    category: 'ML & Data',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Random Forest', 'Regression', 'Feature Engineering'],
  },
  {
    category: 'Distributed Systems',
    skills: ['Hadoop MapReduce', 'Apache Spark'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Django', 'React', 'REST APIs'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Git'],
  },
  {
    category: 'Data Tools',
    skills: ['Power BI'],
  },
]

export const projects: Project[] = [
  {
    title: 'Global Food Wastage Predictive Analytics',
    subtitle: 'End-to-End ML Pipeline',
    period: 'Oct 2025 – Dec 2025',
    github: 'https://github.com/atharva-0085/Global-Food-Wastage-Predictive-Analytics',
    tags: ['Python', 'Scikit-Learn', 'Random Forest', 'Feature Engineering'],
    metrics: [
      { label: 'R² Score', value: '0.87' },
      { label: 'RMSE Reduction', value: '18%' },
    ],
    highlights: [
      'Built end-to-end ML pipeline on multi-country, multi-year economic dataset with feature engineering, model tuning, and validation.',
      'Optimized Random Forest (400 estimators), achieving R² = 0.87 and reducing RMSE by 18% vs baseline on 20% holdout.',
      'Identified top economic loss drivers via feature importance and correlation modeling.',
      'Designed reproducible training workflow with structured experimentation and evaluation tracking.',
    ],
  },
  {
    title: 'Used Car Price Prediction',
    subtitle: 'Advanced Regression Modeling',
    period: 'June 2025 – Aug 2025',
    github: 'https://github.com/atharva-0085/Used-Car-Price-Prediction',
    tags: ['Python', 'Regression', 'Hyperparameter Tuning', 'Cross-Validation'],
    metrics: [
      { label: 'R² Score', value: '0.89' },
      { label: 'CV Improvement', value: '13%' },
    ],
    highlights: [
      'Engineered structured dataset with encoding, scaling, and outlier handling, improving 5-fold CV performance by 13%.',
      'Benchmarked regression models, selecting optimal model achieving R² = 0.89 with minimized RMSE/MAE.',
      'Extracted key pricing drivers to support data-driven valuation strategy.',
      'Applied systematic hyperparameter tuning for performance optimization.',
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
      'Engineered distributed Hadoop MapReduce jobs in Java to process large public datasets for compliance and risk aggregation.',
      'Reduced end-to-end runtime by 28% through partitioning strategy, combiner optimization, and reducer parallelism.',
      'Implemented fault-tolerant batch workflows for reliable large-scale data processing.',
      'Optimized key distribution to minimize shuffle bottlenecks.',
    ],
  },
  {
    title: 'UniSphere',
    subtitle: 'Full-Stack Platform for International Students',
    period: 'Feb 2025 – May 2025',
    github: 'https://github.com/atharva-0085/UniSphere',
    tags: ['Django', 'React', 'REST APIs', 'PostgreSQL'],
    metrics: [{ label: 'Query Latency', value: '-15%' }],
    highlights: [
      'Architected scalable Django backend with normalized relational schema and REST APIs for housing & roommate workflows.',
      'Reduced query latency by 15% via indexing and execution plan optimization under concurrent usage.',
      'Implemented modular backend architecture with secure authentication and role-based access control.',
      'Designed database schema to minimize redundancy and improve join efficiency.',
    ],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
