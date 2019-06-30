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
    @Input() sortable: string;

    paginationResults$: number;
    sortResults$: string;
    images$: any;
    isPaginated$: boolean;
    isSortable$: boolean
    pages$: Array<number>;
    sorts$: Array<string>;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getImages(this.feed).subscribe(
            data => this.images$ = data
        );
        this.pages$ = [5, 10, 15, 20];
        this.sorts$ = ["Select", "Alphabetical", "Date"];
        this.paginationResults$ = parseInt(this.resultsPerPage, 10);
        this.sortResults$ = "Select";
        this.isPaginated$ = JSON.parse(this.pagination);
        this.isSortable$ = JSON.parse(this.sortable);
    }

    perPageChangeHandler(event: any) {
        this.paginationResults$ = event.target.value;
    }

    sortChangeHandler(event: any) {
        this.sortResults$ = event.target.value;
        if (this.sortResults$ === "Alphabetical") {
            this.images$ =
                this.images$.sort((left: any, right: any): number => {
                    if (left.title < right.title) return -1;
                    if (left.title > right.title) return 1;
                    return 0;
                })
        };
        if (this.sortResults$ === "Date") {
            this.images$ =
                this.images$.sort((left: any, right: any): number => {
                    if (Date.parse(left.date) < Date.parse(right.date)) return -1;
                    if (Date.parse(left.date) > Date.parse(right.date)) return 1;
                    return 0;
                })
        };
    }
}
