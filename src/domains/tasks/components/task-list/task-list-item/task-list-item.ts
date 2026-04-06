import { Component, input, signal } from '@angular/core';
import { Task, TaskStatus } from '../../../models/Task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  protected readonly TaskStatus = TaskStatus;
  protected task = input.required<Task>();
}
