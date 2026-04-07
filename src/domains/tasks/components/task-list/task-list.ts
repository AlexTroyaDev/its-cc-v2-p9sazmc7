import { Component, input, output, signal } from '@angular/core';
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
  updateTasksLists = output<Task[]>();

  updateTask(task: Task) {
    this.updateTasksLists.emit(this.tasks().map((t: Task) => t.id === task.id ? task : t));
  }
}
