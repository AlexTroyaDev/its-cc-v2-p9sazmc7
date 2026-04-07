import { Component, input, output } from '@angular/core';
import { Task, TaskStatus } from '../../../models/Task';
import { SeverityItemButton } from '../severity-item-button/severity-item-button';

@Component({
  selector: 'app-task-list-item',
  imports: [SeverityItemButton],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  protected readonly TaskStatus = TaskStatus;
  task = input.required<Task>();
  updateTask = output<Task>();

  protected changeSeverity() {
    this.updateTask.emit({
      ...this.task(),
      isImportant: !this.task().isImportant,
    });
  }

  protected changeStatus() {
    this.updateTask.emit({
      ...this.task(),
      status: this.task().status === TaskStatus.PENDING ? TaskStatus.DONE : TaskStatus.PENDING,
    });
  }
}
