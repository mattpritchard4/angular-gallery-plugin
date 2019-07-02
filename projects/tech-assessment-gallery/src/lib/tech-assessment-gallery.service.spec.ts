import { TestBed } from '@angular/core/testing';

import { TechAssessmentGalleryService } from './tech-assessment-gallery.service';

describe('TechAssessmentGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechAssessmentGalleryService = TestBed.get(TechAssessmentGalleryService);
    expect(service).toBeTruthy();
  });
});
