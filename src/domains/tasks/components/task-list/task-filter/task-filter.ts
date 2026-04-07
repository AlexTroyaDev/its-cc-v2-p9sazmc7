import { Component, output } from '@angular/core';
import { TaskStatus } from '../../../models/Task';

@Component({
  selector: 'app-task-filter',
  imports: [],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilter {
  protected readonly TaskStatus = TaskStatus;
  filterChange = output<TaskStatus | 'all'>();

  protected filterTasks(filter: TaskStatus | 'all') {
    this.filterChange.emit(filter);
  }
}
