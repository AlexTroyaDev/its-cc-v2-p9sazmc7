import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList } from './task-list';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display message when task list is empty', () => {

  });
  it('display task list when tasks are present', () => {
    // Just mock the item component. Functionality is under test in task-list-item component
  });
  it('display tasks title, status and severity', () => { });
  it('show task list count when tasks are present', () => { });

});
