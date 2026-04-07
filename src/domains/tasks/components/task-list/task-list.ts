import { Component, computed, input, output, signal } from '@angular/core';
import { Task, TaskStatus } from '../../models/Task';
import { TaskListItem } from './task-list-item/task-list-item';
import { TaskFilter } from './task-filter/task-filter';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItem, TaskFilter],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = input<Task[]>([]);
  updateTasksLists = output<Task[]>();
  protected filter = signal<TaskStatus | 'all'>('all');

  protected orderedTasks = computed(() => this.orderTaskByImportance());

  protected updateTask(task: Task) {
    this.updateTasksLists.emit(this.tasks().map((t: Task) => t.id === task.id ? task : t));
  }

  protected setFilter(filter: TaskStatus | 'all') {
    this.filter.set(filter);
  }
  // Sort tasks without modify the original array. Just for display.
  private orderTaskByImportance() {
    return [...this.tasks()].sort((a: Task, b: Task) => a.isImportant === b.isImportant ? 0 : a.isImportant ? -1 : 1);
  }

}
