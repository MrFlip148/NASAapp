import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-view-image',
    templateUrl: './image-detail.view.html',
    styleUrls: ['./image-detail.view.css']
})
export class ImageViewComponent implements OnInit {
    private apiAssetUrl = 'https://images-api.nasa.gov/asset/';
    private apiMetaUrl = 'https://images-api.nasa.gov/metadata/';
    data: any = {};
    metaDataLoc: any = {};
    metaData: any = {};

    toggled: boolean = false;

    constructor(
        private http: Http,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.route.paramMap
            .switchMap((params: ParamMap) => this.getData(this.apiAssetUrl, params.get('nasa_id')))
            .subscribe(data => {
                console.log(data);
                this.data = data;
            });
        this.route.paramMap
            .switchMap((params: ParamMap) => this.getData(this.apiMetaUrl, params.get('nasa_id')))
            .subscribe(data => {
                console.log(data);
                this.getMeta(data.location);
            });
    }

    getData(url: any, q: any) {
        return this.http.get(url + q)
          .map((res: Response) => res.json());
    }

    getMeta(url: any) {
        this.http.get(url)
            .map((res: Response) => res.json())
            .subscribe(meta => {
                console.log(meta);
                this.metaData = meta;
            });
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
