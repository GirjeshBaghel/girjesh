// Projects data - From Girjesh Baghel's Resume

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture: string;
  color: string;
  accentColor: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Treat24',
    subtitle: 'Food Ordering & Restaurant Management Platform',
    description: 'Developed and maintained scalable backend microservices for food ordering with Cart, Menu, Toppings, Order APIs, Google Maps API, and Razorpay Payment Gateway integration.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'Razorpay', 'Google Maps'],
    features: [
      'Cart, Menu, Toppings & Order Management APIs',
      'Secure Role-Based Authentication & Authorization (RBAC)',
      'Google Maps API for Location & Delivery Optimization',
      'Redis Caching & PostgreSQL Query Performance Optimization',
      'Razorpay Payment Gateway Integration across Super Admin & Restaurant Panels',
      'Production Deployment with Docker, Nginx, PM2, and Linux Cloud Servers',
    ],
    architecture: 'Microservices Architecture',
    color: '#FF6B35',
    accentColor: '#FF9A5C',
    github: undefined,
    live: 'https://treats24.com/',
  },
  {
    id: 2,
    title: 'FinTech Payment Platform',
    subtitle: 'Scalable Financial Services & Payment Gateway Middleware',
    description: 'Built middleware APIs and financial microservices for secure communication between client applications, payment gateways, and third-party financial services with BBPS integration handling 1,000+ concurrent requests.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'BBPS API', 'Payment Gateways', 'Docker', 'JWT'],
    features: [
      'Scalable Financial Services using Java & Spring Boot',
      'Middleware APIs for Client Applications & Payment Gateways',
      'Payment Processing, Transaction Management & Reconciliation Workflows',
      'BBPS & 3rd-Party Payment API Integration with Error Handling',
      'Optimized APIs & Database Queries for 1,000+ Concurrent Requests',
      'Transaction Consistency, Exception Handling & Security Controls',
    ],
    architecture: 'Distributed Systems',
    color: '#00E5FF',
    accentColor: '#3B82F6',
    github: undefined,
    live: 'https://scrizapay.in/',
  },
  {
    id: 3,
    title: 'AI School ERP',
    subtitle: 'Comprehensive AI-Driven School Management System',
    description: 'Designed and developed a complete AI-driven School ERP system using Microservices Architecture covering Student, Library, HRMS, Transport, Accounts, Inventory, Exams, and LLM Chatbot integration.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'LLM Chatbot', 'Redis', 'WebSockets', 'PostgreSQL', 'Docker', 'CI/CD'],
    features: [
      'Student, Library, HRMS, Transport, Accounts, Inventory & Exam Modules',
      'Role-Based Authentication & Secure REST APIs',
      'Integrated LLM-based Chatbot for Natural Language Interaction & AI Assistance',
      'Redis Caching, WebSockets & PostgreSQL for Real-Time Performance',
      'Automated CI/CD Pipelines & Docker Deployment for Production Environments',
    ],
    architecture: 'Microservices Architecture',
    color: '#8B5CF6',
    accentColor: '#A78BFA',
    github: undefined,
    live: 'https://edu2all.in/',
  },
];

