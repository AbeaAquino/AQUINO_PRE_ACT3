import { Component, computed, signal } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly fullName = 'Abea Venice P. Aquino';
  readonly headline = 'Web Development Student';
  readonly location = 'City of San Fernando, Pampanga';
  readonly email = 'abeaaquino29@gmail.com';
  readonly phone = '0926 228 7984';

  readonly profile = [
    'I am a motivated student with a strong interest in web development and a passion for turning ideas into clean, functional applications. I enjoy the full process of building something: planning the structure, writing the code, and refining the design until it feels polished and easy to use.',
    'I am currently developing my skills in HTML, CSS, JavaScript, TypeScript and Angular. I learn best by building, so I spend much of my time practicing with small projects, exploring new tools and studying how modern web applications are structured.',
  ];

  readonly education = {
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

  readonly skills = ['HTML and CSS', 'JavaScript', 'TypeScript', 'Angular'];

  private readonly clickCount = signal(0);

  readonly message = computed(() => {
    const count = this.clickCount();
    return count === 0
      ? 'Welcome to my profile!'
      : `You clicked the button ${count} ${count === 1 ? 'time' : 'times'}.`;
  });

  showMessage() {
    this.clickCount.update((n) => n + 1);
  }
}
