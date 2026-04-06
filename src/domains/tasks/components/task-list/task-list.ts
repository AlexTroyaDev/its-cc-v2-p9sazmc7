import { Component, signal } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  protected taskList = signal<Task[]>([])

}
