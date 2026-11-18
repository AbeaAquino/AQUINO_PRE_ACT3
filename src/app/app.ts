 import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  imports: [Header, ProfileCard, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Abea Venice P. Aquino';
  headline = 'Web Development Student';
  location = 'City of San Fernando, Pampanga';
  email = 'abeaaquino29@gmail.com';
  phone = '0926 228 7984';

  profile = [
    'I am a motivated student with a strong interest in web development and a passion for turning ideas into clean, functional applications. I enjoy the full process of building something: planning the structure, writing the code, and refining the design until it feels polished and easy to use.',
    'I am currently developing my skills in HTML, CSS, JavaScript, TypeScript and Angular. I learn best by building, so I spend much of my time practicing with small projects, exploring new tools and studying how modern web applications are structured.',
  ];

  education = {
    school: 'Holy Angel University',
    location: 'Angeles City, Pampanga',
    program: 'Web Development',
    year: '2024-2028',
    highlights: [
      'Building responsive websites using HTML, CSS and JavaScript',
      'Developing component-based applications with Angular and TypeScript',
      'Learning web development best practices, including clean code and user-friendly design',
      'Applying classroom lessons through hands-on practice projects',
    ],
  };

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Git and GitHub',
    'Figma',
  ];


  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Figma', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' },
  ];

  message = signal('Click any skill above to select it.');

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message.set(`You selected: ${skill}`);
  }
}

