import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
