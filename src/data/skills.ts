// Skills data - From Girjesh Baghel's Resume

export interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    color: '#E76F00',
    skills: ['Java', 'OOPs', 'Data Structures'],
  },
  {
    category: 'Backend',
    color: '#6DB33F',
    skills: ['Spring Boot', 'Microservices', 'REST APIs', 'Hibernate', 'JPA'],
  },
  {
    category: 'Databases',
    color: '#336791',
    skills: ['PostgreSQL', 'Redis'],
  },
  {
    category: 'Messaging',
    color: '#231F20',
    skills: ['Kafka', 'RabbitMQ'],
  },
  {
    category: 'DevOps',
    color: '#2496ED',
    skills: ['Docker', 'Jenkins', 'AWS', 'GitLab CI/CD', 'Nginx'],
  },
  {
    category: 'Tools',
    color: '#F05032',
    skills: ['Git', 'Postman', 'Linux'],
  },
  {
    category: 'Security',
    color: '#DC382D',
    skills: ['Spring Security', 'JWT', 'RBAC'],
  },
  {
    category: 'Architecture',
    color: '#5B7CFF',
    skills: ['Distributed Systems', 'Event-Driven Architecture', 'System Design'],
  },
  {
    category: 'AI / ML',
    color: '#8B5CF6',
    skills: ['LLM Integration', 'Chatbots', 'Voice AI'],
  },
];
