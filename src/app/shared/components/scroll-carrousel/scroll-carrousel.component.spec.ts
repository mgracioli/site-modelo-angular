import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCarrouselComponent } from './scroll-carrousel.component';

describe('ScrollCarrouselComponent', () => {
  let component: ScrollCarrouselComponent;
  let fixture: ComponentFixture<ScrollCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
