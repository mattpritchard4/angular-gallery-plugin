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

    selectResults$: number;
    images$: Object;
    pages$: Array<number>;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getImages().subscribe(
            data => this.images$ = data
        );
        this.pages$ = [5, 10, 15, 20];
        this.selectResults$ = parseInt(this.resultsPerPage, 10);
    }

    selectChangeHandler(event: any) {
        this.selectResults$ = event.target.value;
    }

}
