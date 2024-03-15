// app.component.ts

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser, editUser, deleteUser } from './store/action';

interface User {
  name: string;
  id: number;
  message: string;
  editing?: boolean;
  editName?: string;
  editMessage?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  users: User[] = [];
  newUser: { name: string, message: string } = { name: '', message: '' };
  constructor(private store: Store<{ user: User[] }>) {
    store.select('user').subscribe((users: User[]) => {
      this.users = users.map(user => ({
        ...user,
        editing: false,
        editName: user.editName || '',
        editMessage: user.editMessage || ''
      }));
    });
  }
  addUser() {
    this.store.dispatch(addUser(this.newUser));
    this.newUser = { name: '', message: '' };
  }
  editUserForm(user: User) {
    this.users = this.users.map(u => ({
      ...u,
      editing: u.id === user.id,
      editName: u.name,
      editMessage: u.message
    }));
  }
  saveEdit(user: User) {
    const { id, editName, editMessage } = user;
    if (editName !== undefined && editMessage !== undefined) {
      this.store.dispatch(editUser({ id, name: editName, message: editMessage }));
    }
    this.users = this.users.map(u => ({ ...u, editing: false }));
  }
  cancelEdit(user: User) {
    this.users = this.users.map(u => ({ ...u, editing: false }));
  }
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(deleteUser({ id }));
    }
  }
}
