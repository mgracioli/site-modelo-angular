import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavigateBarComponent } from './search-navigate-bar.component';

describe('SearchNavigateBarComponent', () => {
  let component: SearchNavigateBarComponent;
  let fixture: ComponentFixture<SearchNavigateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNavigateBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavigateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
