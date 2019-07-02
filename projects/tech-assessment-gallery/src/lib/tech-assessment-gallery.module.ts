// import { NgModule } from '@angular/core';
// import { TechAssessmentGalleryComponent } from './tech-assessment-gallery.component';

// @NgModule({
//   declarations: [TechAssessmentGalleryComponent],
//   imports: [
//   ],
//   exports: [TechAssessmentGalleryComponent]
// })
// export class TechAssessmentGalleryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechAssessmentGalleryComponent } from './tech-assessment-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [TechAssessmentGalleryComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    exports: [
        TechAssessmentGalleryComponent,
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule,
        Ng2SearchPipeModule
    ]
})
export class GalleryModule { }

