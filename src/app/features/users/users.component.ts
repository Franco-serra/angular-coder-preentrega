import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersActions, selectUsers, selectLoading } from './store';
import { selectIsAdmin, AppState } from '../../core/store';
import { User } from './models/user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: false
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.isAdmin$ = this.store.select(selectIsAdmin);
    
    this.users$.subscribe(users => {
      this.dataSource.data = users || [];
    });
  }

  ngOnInit(): void {
    this.store.dispatch(UsersActions['loadUsers']());
  }

  onDelete(userId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.store.dispatch(UsersActions['deleteUser']({ userId }));
    }
  }

  onEdit(userId: number): void {
    this.store.dispatch(UsersActions['setSelectedUser']({ userId }));
  }

  onView(userId: number): void {
    this.store.dispatch(UsersActions['setSelectedUser']({ userId }));
  }
} 