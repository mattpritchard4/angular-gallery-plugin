import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [GalleryComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    exports: [
        GalleryComponent,
        CommonModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule,
        Ng2SearchPipeModule
    ]
})
export class GalleryModule { }
