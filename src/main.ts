import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskList } from './domains/tasks/components/task-list/task-list';
import { Task, TaskStatus } from './domains/tasks/models/Task';
import { AddTask } from './domains/tasks/components/add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [TaskList, AddTask],
  template: `
  <div class="w-full p-2 flex flex-col items-center">
  <h1 class="text-3xl font-bold underline mb-16">Code Challenge</h1>
  <app-task-list [tasks]="tasks()" (updateTasksLists)="updateTasksLists($event)"></app-task-list>
  <app-add-task (newTask)="addTask($event)"></app-add-task>
</div>
`,
})
export class App {
  protected tasks = signal<Task[]>([
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
    },
    {
      id: '3',
      title: 'Task 3',
      status: TaskStatus.PENDING,
      isImportant: false,
    },
    {
      id: '4',
      title: 'Task 4',
      status: TaskStatus.DONE,
      isImportant: true,
    }
  ])

  updateTasksLists(tasks: Task[]) {
    this.tasks.set(tasks);
    // left here intentionally to show the tasks list update
    console.log('tasks', this.tasks);
  }

  addTask(task: Task) {
    this.tasks.update((tasks) => [...tasks, task]);
  }

}

bootstrapApplication(App);
