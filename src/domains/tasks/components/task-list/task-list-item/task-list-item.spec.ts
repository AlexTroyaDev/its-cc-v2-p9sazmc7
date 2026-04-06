import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListItem } from './task-list-item';
import { Task, TaskSeverity, TaskStatus } from '../../../models/Task';
import { inputBinding } from '@angular/core';

const MockTask = {
  id: '1',
  title: 'Task 1',
  status: TaskStatus.PENDING,
  severity: TaskSeverity.LOW,
}

describe('TaskListItem', () => {
  let component: TaskListItem;
  let fixture: ComponentFixture<TaskListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListItem]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskListItem, {
      bindings: [
        inputBinding('task', () => MockTask)
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display task title', () => {
    // const taskTitle = fixture.nativeElement.querySelector('h3');
    // expect(taskTitle.textContent).toBe(MockTask.title);
  });

  it('display task status checkbox', () => { });
  it('display task severity icon', () => { });
  it('display task severity icon with proper class', () => { });
  it('change severity when click on icon button', () => { });
});
