import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-view-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.css']
})
export class HomeViewComponent implements OnInit {
    viewTitle = 'Home View';
    private apiUrl = 'https://images-api.nasa.gov/search?q=';
    private query: string;
    yearRange: number[] = [2010, 2015];
    data: any = {};
    
    toggled = false;

    constructor(
        private http: Http
    ) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        // this.getResult(this.apiUrl, 'moon&media_type=image,video&year_start=2010&year_end=2015');
        // uncomment above to get direct results on homepage load
    }

    getData(url: any, q: any) {
        return this.http.get(url + q)
          .map((res: Response) => res.json());
    }
    getResult(url: any, q: any) {
        this.getData(url, q).subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }

    onSubmit(form: any) {
        console.log('you submitted value: ', form);
        this.query = form.q + '&year_start=' + form.yearRange[0] + '&year_end=' + form.yearRange[1];
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

    toggle() {
        $('.toggleArea').toggle('down');
        if (this.toggled) {
            $('.pUp').switchClass('pUp', 'pDown', 500, 'swing', this.toggled = !this.toggled);
        } else {
            $('.pDown').switchClass('pDown', 'pUp', 500, 'swing', this.toggled = !this.toggled);
        }
    }

}
