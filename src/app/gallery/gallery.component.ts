import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'my-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


    @Input() feed: string;
    @Input() resultsPerPage: string;
    @Input() pagination: string;

    selectResults$: number;
    images$: Object;
    pages$: Array<number>;
    isPaginated$: boolean;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getImages(this.feed).subscribe(
            data => this.images$ = data
        );
        this.pages$ = [5, 10, 15, 20];
        this.selectResults$ = parseInt(this.resultsPerPage, 10);
        this.isPaginated$ = JSON.parse(this.pagination);
    }

    selectChangeHandler(event: any) {
        this.selectResults$ = event.target.value;
    }

}
