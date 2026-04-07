import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList } from './task-list';
import { Task, TaskStatus } from '../../models/Task';
import { Component, input, inputBinding, NO_ERRORS_SCHEMA } from '@angular/core';

// Stub the component to check easily the inputs.
@Component({ selector: 'app-task-list-item', template: '<div>{{task().title}} - {{task().status}} - {{task().isImportant}}</div>' })
class TaskListItemStub {
  task = input.required<Task>();
}

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
      .overrideComponent(TaskList, {
        set: {
          imports: [TaskListItemStub],
          schemas: [NO_ERRORS_SCHEMA],
        }
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
    const taskListItem = fixture.nativeElement.querySelector('app-task-list-item');
    expect(taskListItem).toBeTruthy();
  });
  it('pass tasks title, status and severity to task list item', () => {
    const taskListItem = fixture.nativeElement.querySelector('app-task-list-item');
    expect(taskListItem.textContent).toContain(MockTasks[1].title);
    expect(taskListItem.textContent).toContain(MockTasks[1].status);
    expect(taskListItem.textContent).toContain(MockTasks[1].isImportant);

  });
  it('show task list count when tasks are present', () => {
    const taskListCount = fixture.nativeElement.querySelector('.counter');
    expect(taskListCount).toBeTruthy();
    expect(taskListCount.textContent).toContain(MockTasks.length);
  });

  it('update task when task list item emit updateTask event', () => {
    const taskListItem = fixture.nativeElement.querySelector('app-task-list-item');
    taskListItem.dispatchEvent(new CustomEvent('updateTask', { detail: MockTasks[0] }));
    expect(component.tasks()).toContain(MockTasks[0]);
  });

  it('filter tasks by status', () => {
    const taskListItem = fixture.nativeElement.querySelector('app-task-list-item');
    taskListItem.dispatchEvent(new CustomEvent('updateTask', { detail: MockTasks[0] }));
    expect(component.tasks()).toContain(MockTasks[0]);
  });

});
