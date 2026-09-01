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
    description: 'Full-featured food ordering and restaurant management platform with cart, menu management, toppings, orders, and payment integration.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
    features: [
      'Cart & Menu Management',
      'Toppings & Customization',
      'Order Tracking',
      'Restaurant Management Dashboard',
      'Google Maps Integration',
      'Razorpay Payment Gateway',
      'Role-based Authentication',
      'Production Deployment',
    ],
    architecture: 'Microservices',
    color: '#FF6B35',
    accentColor: '#FF9A5C',
    github: undefined,
    live: undefined,
  },
  {
    id: 2,
    title: 'AI School ERP',
    subtitle: 'Comprehensive School Management System with AI',
    description: 'Enterprise-grade School ERP system with AI chatbot integration, covering all academic and administrative modules.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Redis', 'WebSockets', 'PostgreSQL', 'Docker', 'Nginx'],
    features: [
      'Student Management',
      'Library Management',
      'HRMS Module',
      'Transport Management',
      'Accounts & Finance',
      'Inventory Management',
      'Exam Management',
      'LLM Chatbot Integration',
      'CI/CD Pipeline',
    ],
    architecture: 'Microservices',
    color: '#5B7CFF',
    accentColor: '#8B5CF6',
    github: undefined,
    live: undefined,
  },
  {
    id: 3,
    title: 'Rental Application',
    subtitle: 'Item Rental Management Platform',
    description: 'Monolithic rental application for managing item listings, bookings, and user-based item management with search capabilities.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    features: [
      'Item Listing & Catalog',
      'User Management',
      'Booking System',
      'Advanced Search',
      'Full CRUD Operations',
      'User-based Item Management',
    ],
    architecture: 'Monolithic',
    color: '#22C55E',
    accentColor: '#4ADE80',
    github: undefined,
    live: undefined,
  },
];
