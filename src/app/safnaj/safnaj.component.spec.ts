import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafnajComponent } from './safnaj.component';

describe('SafnajComponent', () => {
  let component: SafnajComponent;
  let fixture: ComponentFixture<SafnajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafnajComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafnajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
