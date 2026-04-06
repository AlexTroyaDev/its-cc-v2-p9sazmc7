import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityItemButton } from './severity-item-button';

describe('SeverityItemButton', () => {
  let component: SeverityItemButton;
  let fixture: ComponentFixture<SeverityItemButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverityItemButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SeverityItemButton);
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
  });
  it('display severity icon with proper class', () => {
  });
});
