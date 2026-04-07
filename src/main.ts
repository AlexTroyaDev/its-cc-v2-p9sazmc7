import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskList } from './domains/tasks/components/task-list/task-list';
import { Task, TaskStatus } from './domains/tasks/models/Task';

@Component({
  selector: 'app-root',
  imports: [TaskList],
  template: `
  <div class="w-full p-2 flex flex-col items-center">
  <h1 class="text-3xl font-bold underline mb-16">Code Challenge</h1>
  <app-task-list [tasks]="tasks" (updateTasksLists)="updateTasksLists($event)"></app-task-list>
</div>
`,
})
export class App {
  protected tasks = [
    {
      id: '1',
      title: 'Task 1',
      status: TaskStatus.PENDING,
      isImportant: false,
    },
    {
      id: '2',
      title: 'Task 2',
      status: TaskStatus.DONE,
      isImportant: true,
    }
  ]

  updateTasksLists(tasks: Task[]) {
    this.tasks = tasks;
    // left here intentionally to show the tasks list update
    console.log('tasks', this.tasks);
  }

}

bootstrapApplication(App);
