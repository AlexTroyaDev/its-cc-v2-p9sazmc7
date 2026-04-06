import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListItem } from './task-list-item';
import { Task, TaskStatus } from '../../../models/Task';
import { inputBinding } from '@angular/core';

const MockTask: Task = {
  id: '1',
  title: 'Task 1',
  status: TaskStatus.PENDING,
  isImportant: false,
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
    const taskTitle = fixture.nativeElement.querySelector('label');
    expect(taskTitle.textContent).toContain(MockTask.title);
  });

  it('display task status checkbox', () => {
    const taskStatusCheckbox = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(taskStatusCheckbox).toBeTruthy();
  });
  it('display task severity icon', () => {
    const taskSeverityIcon = fixture.nativeElement.querySelector('button');
    expect(taskSeverityIcon).toBeTruthy();
  });
  it('change severity when click on icon button', () => {
    const spy = vi.spyOn(component.changeSeverity, 'emit');
    const taskSeverityIcon = fixture.nativeElement.querySelector('button');
    taskSeverityIcon.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(MockTask.id, !MockTask.isImportant);
  });
});
