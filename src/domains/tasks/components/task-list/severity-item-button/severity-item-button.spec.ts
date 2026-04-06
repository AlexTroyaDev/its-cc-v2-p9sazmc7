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
  });
  it('change severity when is clicked', () => {
  });
  it('display severity icon with proper class', () => {
  });
});
