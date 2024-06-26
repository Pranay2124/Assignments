import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartComponent } from './show-cart.component';

describe('ShowCartComponent', () => {
  let component: ShowCartComponent;
  let fixture: ComponentFixture<ShowCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
