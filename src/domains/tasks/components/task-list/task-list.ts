import { Component, input, signal } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskListItem } from './task-list-item/task-list-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  protected tasks = input<Task[]>([]);

}
