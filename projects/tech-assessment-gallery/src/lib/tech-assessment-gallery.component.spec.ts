import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechAssessmentGalleryComponent } from './tech-assessment-gallery.component';

describe('TechAssessmentGalleryComponent', () => {
  let component: TechAssessmentGalleryComponent;
  let fixture: ComponentFixture<TechAssessmentGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechAssessmentGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechAssessmentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
