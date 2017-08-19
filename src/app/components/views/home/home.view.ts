import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-view-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeViewComponent implements OnInit {
    viewTitle = 'Home View';
    private apiUrl = 'https://images-api.nasa.gov/search?q=';
    private query: string;
    data: any = {};

    dataLoaded = false;
    showFilter = false;

    constructor(
        private http: Http
    ) {}

    toggleFilter() {
        $('.filterArea').toggle('down');
        if (this.showFilter) {
            $('.filterPointerUp').switchClass('filterPointerUp', 'filterPointerDown', 500, 'swing', this.showFilter = !this.showFilter);
        } else {
            $('.filterPointerDown').switchClass('filterPointerDown', 'filterPointerUp', 500, 'swing', this.showFilter = !this.showFilter);
        }
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.getData('moon&media_type=image,video&year_start=2005&year_end=2006');
    }

    getData(q: any) {
        return this.http.get(this.apiUrl + q)
          .map((res: Response) => res.json())
          .subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    onSubmit(form: any) {
        console.log('you submitted value: ', form);
        this.query = form.q;
        if (form.mt_I !== false || form.mt_V !== false) {
            this.query += '&media_type=';
        }
        if (form.mt_I !== false && form.mt_V !== false) {
            this.query += 'image,video';
        } else if (form.mt_I !== false) {
            this.query += 'image';
        } else if (form.mt_V !== false) {
            this.query += 'video';
        }
        console.log(this.query);
        return this.query;
    }

}
