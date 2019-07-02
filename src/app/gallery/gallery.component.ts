import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs';

@Component({
    selector: 'my-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


    @Input() feed: string;
    @Input() resultsPerPage: number = 10;
    @Input() pagination: boolean = true;
    @Input() sortable: boolean = true;
    @Input() search: boolean = true;
    @Input() autoRotateTime: number = 4;

    paginationResults$: number;
    sortResults$: string;
    images$: any;
    isPaginated$: boolean;
    isSortable$: boolean;
    isVisible$: boolean;
    isSearchable$: boolean;
    slideShow$: boolean;
    pages$: Array<number>;
    sorts$: Array<string>;
    currentImage$: object;
    imageIndex: number;
    slideShowTick: any;
    blackList$: Array<object>;
    sub: any;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.blackList$ = this.getLocalStorageBlackList();
        this.sub = this.data.getImages(this.feed).subscribe(
            (data) => {
                this.images$ = data;
                this.deleteImage(this.blackList$);
            }
        );
        this.pages$ = [5, 10, 15, 20];
        this.sorts$ = ["Select", "Alphabetical (A-Z)", "Date: (Newest)"];
        this.paginationResults$ = this.resultsPerPage;
        this.sortResults$ = "Select";
        this.isPaginated$ = this.pagination;
        this.isSortable$ = this.sortable;
        this.isSearchable$ = this.search;
        this.isVisible$ = false;
        this.slideShow$ = false;
        this.currentImage$ = null;
        this.imageIndex = 0;
        this.slideShowTick = null;
    }


    perPageChangeHandler(event: any) {
        this.paginationResults$ = event.target.value;
    }

    sortChangeHandler(event: any) {
        this.sortResults$ = event.target.value;
        if (this.sortResults$ === "Alphabetical (A-Z)") {
            this.images$ =
                this.images$.sort((left: any, right: any): number => {
                    if (left.title < right.title) return -1;
                    if (left.title > right.title) return 1;
                    return 0;
                })
        };
        if (this.sortResults$ === "Date: (Newest)") {
            this.images$ =
                this.images$.sort((left: any, right: any): number => {
                    if (Date.parse(left.date) < Date.parse(right.date)) return 1;
                    if (Date.parse(left.date) > Date.parse(right.date)) return -1;
                    return 0;
                })
        };
    }

    showModal(image: object) {
        this.isVisible$ = !this.isVisible$;
        this.currentImage$ = image;
    }

    nextImage(current: object) {
        this.imageIndex = this.images$.indexOf(current);
        if (this.imageIndex >= 0 && this.imageIndex < this.images$.length - 1) {
            this.currentImage$ = this.images$[this.imageIndex + 1];
        }

    }

    prevImage(current: object) {
        this.imageIndex = this.images$.indexOf(current);
        if (this.imageIndex > 0 && this.imageIndex < this.images$.length) {
            this.currentImage$ = this.images$[this.imageIndex - 1];
        }

    }

    toggleSlideshow() {
        this.slideShow$ = !this.slideShow$;
        this.currentImage$ = this.images$[this.imageIndex];
        if (this.slideShow$) {
            this.slideShowTick = setInterval(() => this.nextImage(this.currentImage$), this.autoRotateTime * 1000);
        }
        if (this.slideShow$ === false) {
            clearInterval(this.slideShowTick);
        }
    }

    blackList(image: object) {
        this.blackList$.push(image);
        this.setLocalStorageBlackList(this.blackList$);
        this.deleteImage(this.getLocalStorageBlackList());
    }

    setLocalStorageBlackList(blacklist: Array<object>) {
        localStorage.setItem('blacklist', JSON.stringify({ blacklist: blacklist }));
    }

    getLocalStorageBlackList(): Array<object> {
        let localStorageItem = JSON.parse(localStorage.getItem('blacklist'));
        return localStorageItem == null ? [] : localStorageItem.blacklist;
    }

    deleteImage(blacklist: any) {
        blacklist.forEach((image: any) => {
            this.images$ = this.images$.filter((element: any) => element.title !== image.title);
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
