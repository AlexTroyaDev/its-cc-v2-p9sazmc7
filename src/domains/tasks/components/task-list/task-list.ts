import { Component, input, signal } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskListItem } from './task-list-item/task-list-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = input<Task[]>([]);

}
