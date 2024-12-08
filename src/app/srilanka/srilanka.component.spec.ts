import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankaComponent } from './srilanka.component';

describe('SrilankaComponent', () => {
  let component: SrilankaComponent;
  let fixture: ComponentFixture<SrilankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrilankaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrilankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
