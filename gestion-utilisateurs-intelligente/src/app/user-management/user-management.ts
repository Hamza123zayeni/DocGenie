import { Component } from '@angular/core';

type UserRole = 'Admin' | 'Manager' | 'Developer' | 'Viewer';

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  search = '';

  users: User[] = [
    {
      id: 1,
      name: 'Omar Zayeni',
      email: 'omar.zayeni@example.com',
      role: 'Developer',
      active: true,
    },
    {
      id: 2,
      name: 'Jalel Bouazizi',
      email: 'jalel.bouazizi@example.com',
      role: 'Admin',
      active: true,
    },
    {
      id: 3,
      name: 'Moatez Bouazizi',
      email: 'moatez.bouazizi@example.com',
      role: 'Manager',
      active: false,
    },
  ];

  get filteredUsers(): User[] {
    const query = this.search.trim().toLowerCase();

    if (!query) {
      return this.users;
    }

    return this.users.filter((user) =>
      `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query)
    );
  }

  toggleStatus(user: User): void {
    user.active = !user.active;
  }

  updateRole(user: User, role: UserRole): void {
    user.role = role;
  }
}