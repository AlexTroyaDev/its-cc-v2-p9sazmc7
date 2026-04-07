import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTask } from './add-task';

describe('AddTask', () => {
  let component: AddTask;
  let fixture: ComponentFixture<AddTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTask]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add task event when form is submitted', () => {
    const addTaskSpy = vi.spyOn(component.newTask, 'emit');
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    expect(addTaskSpy).toHaveBeenCalled();
  });
});
