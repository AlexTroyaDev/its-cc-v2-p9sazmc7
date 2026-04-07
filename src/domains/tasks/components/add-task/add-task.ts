import { Component, output, signal } from '@angular/core';
import { Task, TaskStatus } from '../../models/Task';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-add-task',
  imports: [FormField],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  newTask = output<Task>();

  private createTaskModel = signal<Pick<Task, 'title' | 'isImportant'>>({
    title: '',
    isImportant: false,
  });

  protected createTaskForm = form(this.createTaskModel);

  protected addTask() {
    this.newTask.emit({
      id: crypto.randomUUID(),
      title: this.createTaskModel().title,
      status: TaskStatus.PENDING,
      isImportant: this.createTaskModel().isImportant,
    });
  }
}
