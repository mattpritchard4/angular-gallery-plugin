import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'my-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() feed: string;

    images$: Object;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getImages().subscribe(
            data => this.images$ = data
        );
    }
}
