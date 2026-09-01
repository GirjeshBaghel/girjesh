// Portfolio Data - Content from Girjesh Baghel's Resume

export const personalInfo = {
  name: 'Girjesh Baghel',
  title: 'Backend Java Developer',
  email: 'girjesh62586@gmail.com',
  phone: '+91 8802612236',
  linkedin: 'https://www.linkedin.com/in/girjesh-baghel',
  github: 'https://github.com/girjesh2310',
  resumeUrl: 'https://drive.google.com/file/d/1lEqoERqzg1DfMjGJC8tY_-KOKPul8d_1/view?usp=drive_link',
  location: 'Noida, India',
  summary: `Backend-focused Java Developer with 2+ years of experience building scalable microservices using Spring Boot, designing high-performance REST APIs, implementing secure authentication systems, and optimizing applications using Redis and Kafka.`,
  aboutSummary: `Backend-focused Java Developer with 2+ years of experience in building scalable microservices using Spring Boot. Experienced in designing high-performance REST APIs, implementing secure authentication systems, and optimizing applications using Redis and Kafka.

Proven track record of improving system performance, leading development teams, and handling production deployments in real-world environments.`,
};

export const stats = [
  { value: '2+', label: 'Years Experience', icon: 'user' },
  { value: '200+', label: 'REST APIs Built', icon: 'code2' },
  { value: '80%', label: 'Reduced Support Load', icon: 'trending-up' },
  { value: '40%', label: 'Faster Deployments', icon: 'zap' },
  { value: '6+', label: 'Team Members Led', icon: 'users' },
];

export const coreTechnologies = [
  { name: 'Java', icon: 'java', color: '#E76F00' },
  { name: 'Spring Boot', icon: 'spring', color: '#6DB33F' },
  { name: 'Microservices', icon: 'microservices', color: '#5B7CFF' },
  { name: 'Kafka', icon: 'kafka', color: '#231F20' },
  { name: 'Docker', icon: 'docker', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'kubernetes', color: '#326CE5' },
  { name: 'Redis', icon: 'redis', color: '#DC382D' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
  { name: 'AWS', icon: 'aws', color: '#FF9900' },
  { name: 'Nginx', icon: 'nginx', color: '#009639' },
];

export const experience = [
  {
    company: 'Scriza Pvt Ltd',
    location: 'Noida, India',
    role: 'Backend Developer',
    period: 'Apr 2024 — Present',
    type: 'current',
    achievements: [
      'Promoted from Associate Software Developer within 7 months for outstanding performance and ownership.',
      'Built 200+ scalable REST APIs using Spring Boot with clean architecture.',
      'Implemented JWT authentication and Role-Based Access Control (RBAC) for enterprise applications.',
      'Integrated LLM-based chatbot using AI APIs, reducing customer support workload by 80%.',
      'Automated CI/CD pipelines with GitLab, Docker and Jenkins for faster deployments.',
      'Managed production systems, handled deployment, server setup and code reviews.',
      'Led a team of 4–6 developers, assigning tasks, reviewing PRs and mentoring junior members.',
    ],
  },
  {
    company: 'Scriza Pvt Ltd',
    location: 'Noida, India',
    role: 'Associate Software Developer',
    period: 'Sep 2023 — Mar 2024',
    type: 'past',
    achievements: [
      'Developed REST APIs using Spring Boot & clean architecture patterns.',
      'Optimized database schemas and improved query performance significantly.',
      'Tested APIs using Postman and resolved critical production issues.',
      'Assisted in deployment, server setup and code reviews.',
    ],
  },
];

export const achievements = [
  {
    icon: '🏆',
    title: 'Employee of the Year',
    description: 'Awarded at Scriza Pvt Ltd for delivering outstanding performance across production systems and customer-facing application quality.',
    color: '#F59E0B',
  },
  {
    icon: '🚀',
    title: 'Promoted in 7 Months',
    description: 'Promoted from Associate to Backend Developer within 7 months for exceptional ownership, leadership, and technical delivery.',
    color: '#5B7CFF',
  },
  {
    icon: '🤖',
    title: '80% Support Reduction',
    description: 'Reduced customer support workload by 80% through LLM-based chatbot integration and AI calling system automation.',
    color: '#22C55E',
  },
  {
    icon: '⚡',
    title: '30% Performance Improvement',
    description: 'Improved API response times by 30%+ using caching strategies with Redis and optimized database query correlation.',
    color: '#8B5CF6',
  },
  {
    icon: '♾️',
    title: '40% Faster Deployments',
    description: 'Achieved 40% reduction in deployment time by implementing automated CI/CD pipelines using GitLab and Jenkins.',
    color: '#22D3EE',
  },
];

export const architectureItems = [
  { icon: 'microservices', label: 'Microservices' },
  { icon: 'kafka', label: 'Kafka' },
  { icon: 'loadbalancing', label: 'Load Balancing' },
  { icon: 'kubernetes', label: 'Kubernetes' },
  { icon: 'docker', label: 'Docker' },
  { icon: 'cicd', label: 'CI/CD Pipelines' },
];
