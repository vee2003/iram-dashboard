import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  template: `
  <div class="bg-[#f6f0e7] min-h-screen flex flex-col">
      <div class="flex flex-1">
        <!-- sidebar -->
        <aside class="bg-[#561a28] w-56 flex flex-col items-center py-8 text-white select-none">
          <img alt="Admin" class="rounded-full mb-6" height="120" src="https://storage.googleapis.com/a1aa/image/d256fc9c-566c-48e9-a3c7-f51aaacb6a35.jpg" width="120"/>
          <div class="text-center font-extrabold text-lg leading-tight mb-6">
            Test Name<br/>ADMIN
          </div>
          <hr class="border-t border-[#7a4f56] w-full mb-6"/>
          <nav class="w-full text-lg font-extrabold">
            <a (click)="setActive('dashboard')" class="flex items-center gap-3 px-6 py-3 border-b border-[#7a4f56] cursor-pointer" [ngClass]="{'underline decoration-[#bba7a7] decoration-2': activeSection === 'dashboard'}">Dashboard</a>
            <a (click)="setActive('news')" class="flex items-center gap-3 px-6 py-3 border-b border-[#7a4f56] cursor-pointer" [ngClass]="{'underline decoration-[#bba7a7] decoration-2': activeSection === 'news'}">News Updates</a>
            <a (click)="setActive('schedules')" class="flex items-center gap-3 px-6 py-3 border-b border-[#7a4f56] cursor-pointer" [ngClass]="{'underline decoration-[#bba7a7] decoration-2': activeSection === 'schedules'}">Schedules</a>
            <a (click)="setActive('teachers')" class="flex items-center gap-3 px-6 py-3 border-b border-[#7a4f56] cursor-pointer" [ngClass]="{'underline decoration-[#bba7a7] decoration-2': activeSection === 'teachers'}">Teachers</a>
          </nav>
          <div class="mt-auto mb-2 cursor-pointer" (click)="logout()" title="Logout">
            <i class="fas fa-sign-out-alt text-xl"></i>
          </div>
        </aside>
        <!-- main -->
        <main class="flex-1 p-8 overflow-auto">
          <h1 class="text-white font-extrabold text-2xl mb-6">IRAM II ELEMENTARY SCHOOL</h1>
          <section *ngIf="activeSection === 'dashboard'">
            <h2 class="text-[#bba7a7] font-extrabold text-xl mb-4">DASHBOARD</h2>
            <div class="flex flex-col md:flex-row gap-6 mb-6">
              <div class="bg-[#561a28] rounded-xl flex-1 p-6 text-white flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2 font-extrabold text-sm">No. of Announcements</div>
                <div class="font-extrabold text-4xl">{{ announcements.length }}</div>
              </div>
              <div class="bg-[#561a28] rounded-xl flex-1 p-6 text-white flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2 font-extrabold text-sm">No. of Events Posted</div>
                <div class="font-extrabold text-4xl">15</div>
              </div>
              <div class="bg-[#561a28] rounded-xl flex-1 p-6 text-white flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2 font-extrabold text-sm">No. of Teachers</div>
                <div class="font-extrabold text-4xl">12</div>
              </div>
            </div>
            <form (ngSubmit)="addAnnouncement()" #announcementForm="ngForm" class="bg-[#561a28] rounded-xl flex-1 p-6 flex flex-col gap-4">
              <input [(ngModel)]="newAnnouncement.title" name="title" placeholder="Title" required class="rounded-md p-3 focus:outline-none"/>
              <input [(ngModel)]="newAnnouncement.date" name="date" type="date" required class="rounded-md p-3 focus:outline-none"/>
              <input [(ngModel)]="newAnnouncement.description" name="description" placeholder="Description" required class="rounded-md p-3 focus:outline-none"/>
              <button type="submit" class="bg-white text-[#561a28] font-extrabold rounded-md py-2 hover:bg-gray-200 transition">Add Announcement</button>
            </form>
            <ul>
              <li *ngFor="let announcement of announcements">{{ announcement.title }} ({{ announcement.date }}): {{ announcement.description }}</li>
            </ul>
          </section>
          <section *ngIf="activeSection === 'news'" class="text-[#561a28] font-extrabold">
            <h2 class="mb-4 text-2xl">News Updates</h2>
            <p class="mb-2">No news updates available.</p>
          </section>
          <section *ngIf="activeSection === 'schedules'" class="text-[#561a28] font-extrabold">
            <h2 class="mb-4 text-2xl">Schedules</h2>
            <p class="mb-2">School schedules are shown on the dashboard.</p>
          </section>
          <section *ngIf="activeSection === 'teachers'" class="text-[#561a28] font-extrabold">
            <h2 class="mb-4 text-2xl">Teachers</h2>
            <p class="mb-2">No teacher data available.</p>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    body {
      font-family: 'Inter', sans-serif;
    }
  `]
})
export class AppComponent {
  activeSection: string = 'dashboard';
  announcements = [
    { title: "Welcome Back!", date: "2024-01-10", description: "School reopens for the new semester." },
    { title: "Science Fair", date: "2024-02-15", description: "Annual science fair event." },
    { title: "Parent-Teacher Meeting", date: "2024-03-05", description: "Discuss student progress." },
    { title: "Sports Day", date: "2024-04-20", description: "Annual sports competition." }
  ];
  newAnnouncement = { title: '', date: '', description: '' };

  setActive(section: string) {
    this.activeSection = section;
  }

  addAnnouncement() {
    if (this.newAnnouncement.title && this.newAnnouncement.date && this.newAnnouncement.description) {
      this.announcements.push({ ...this.newAnnouncement });
      this.newAnnouncement = { title: '', date: '', description: '' };
    } else {
      alert("Please fill in all fields.");
    }
  }

  logout() {
    alert("Logging out...");
    // logout logic
  }
}
