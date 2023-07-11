import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySlideComponent } from './category-slide.component';

describe('CategorySlideComponent', () => {
  let component: CategorySlideComponent;
  let fixture: ComponentFixture<CategorySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
