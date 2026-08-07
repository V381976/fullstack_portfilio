export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  liveUrl: string
  githubUrl: string
  techStack: string[]
  category: string
  featured: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  years: number
  projects: number
  icon: string
  featured: boolean
  order: number
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: Date
  endDate?: Date
  current: boolean
  technologies: string[]
  order: number
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate: Date
  gpa?: string
  description: string
  order: number
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  date: Date
  url: string
  image: string
  order: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  featured: boolean
  order: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  published: boolean
  readingTime: number
  createdAt: Date
  updatedAt: Date
}

export interface Service {
  id: string
  title: string
  description: string
  priceFrom?: string
  features: string[]
  icon?: string
  active: boolean
  sortOrder: number
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  username: string
}

export interface GitHubProfile {
  login: string
  id: number
  avatar_url: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string
  blog: string
  company: string
  created_at: string
}

export interface GitHubRepository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  type: 'GENERAL' | 'HIRE'
  service?: string
  budget?: string
  timeline?: string
  message: string
}
