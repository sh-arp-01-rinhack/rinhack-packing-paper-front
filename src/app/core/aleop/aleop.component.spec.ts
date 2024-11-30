import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleopComponent } from './aleop.component';

describe('AleopComponent', () => {
  let component: AleopComponent;
  let fixture: ComponentFixture<AleopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AleopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AleopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
