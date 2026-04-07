import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFilter } from './task-filter';

describe('TaskFilter', () => {
  let component: TaskFilter;
  let fixture: ComponentFixture<TaskFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFilter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display filtering options', () => {
    const filteringOptions = fixture.nativeElement.querySelectorAll('button');
    expect(filteringOptions.length).toBe(3);
    expect(filteringOptions[0].textContent).toBe('All');
    expect(filteringOptions[1].textContent).toBe('Pending');
    expect(filteringOptions[2].textContent).toBe('Completed');
  });

  it('emit filter change event when a filter option is clicked', () => {
    const filterChangeSpy = vi.spyOn(component.filterChange, 'emit');
    const filteringOptions = fixture.nativeElement.querySelectorAll('button');
    filteringOptions[0].click();
    expect(filterChangeSpy).toHaveBeenCalledWith('all');
  });
});
