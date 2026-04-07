import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList } from './task-list';
import { Task, TaskStatus } from '../../models/Task';
import { inputBinding } from '@angular/core';

const MockTasks: Task[] = [
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
];

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskList, {
      bindings: [
        inputBinding('tasks', () => MockTasks)
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display message when task list is empty', async () => {
    fixture = TestBed.createComponent(TaskList, {
      bindings: [
        inputBinding('tasks', () => [])
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();

    const taskListEmptyMessage = fixture.nativeElement.querySelector('p');
    expect(taskListEmptyMessage).toBeTruthy();
    expect(taskListEmptyMessage.textContent).toContain('No tasks found');
  });
  it('display task list when tasks are present', () => {
    const taskList = fixture.nativeElement.querySelector('app-task-list-item');
    expect(taskList).toBeTruthy();
  });
  it('display tasks title, status and severity', () => { });
  it('show task list count when tasks are present', () => { });

});
