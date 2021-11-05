import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullreviewsComponent } from './fullreviews.component';

describe('FullreviewsComponent', () => {
  let component: FullreviewsComponent;
  let fixture: ComponentFixture<FullreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
