import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityItemButton } from './severity-item-button';
import { inputBinding, outputBinding } from '@angular/core';

describe('SeverityItemButton', () => {
  let component: SeverityItemButton;
  let fixture: ComponentFixture<SeverityItemButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverityItemButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SeverityItemButton, {
      bindings: [
        inputBinding('isImportant', () => true),
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display severity icon', () => {
    const severityIcon = fixture.nativeElement.querySelector('img');
    expect(severityIcon).toBeTruthy();
    expect(severityIcon.src).toContain('/icons/severity.svg');
    expect(severityIcon.getAttribute('aria-label')).toBe('Change severity');
  });
  it('change severity when is clicked', () => {
    const spy = vi.spyOn(component.isImportantChange, 'emit');
    const severityIcon = fixture.nativeElement.querySelector('button');
    severityIcon.click();
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('display severity icon with important class', () => {
    const severityIcon = fixture.nativeElement.querySelector('img');
    expect(severityIcon.classList).toContain('important');
  });

  it('display severity icon with not-important class', async () => {
    fixture = TestBed.createComponent(SeverityItemButton, {
      bindings: [
        inputBinding('isImportant', () => false),
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
    const severityIcon = fixture.nativeElement.querySelector('img');
    expect(severityIcon.classList).toContain('not-important');
  });
});
