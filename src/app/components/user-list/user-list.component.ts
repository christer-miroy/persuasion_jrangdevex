import { Component, OnInit } from '@angular/core';
import { User } from './model/userModel';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filterUsers: User[] = [];
  filterGender: string = 'all';
  error: string | null = null;

  constructor(private apiService: MockApiService) {  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.applyFilter(this.filterGender);
      },
      (error) => {
        this.error = 'Failed to fetch users.';
      }
    );
  }

  applyFilter(gender: string): void {
    this.filterGender = gender;

    if (gender === 'all') {
      this.filterUsers = this.users;
    } else {
      this.filterUsers = this.users.filter(user => user.gender === gender);
    }
  }

  resetFilter(): void {
    this.applyFilter('all');
  }
}
