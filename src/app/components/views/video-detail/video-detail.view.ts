import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-view-video',
    templateUrl: './video-detail.view.html',
    styleUrls: ['./video-detail.view.css']
})
export class VideoViewComponent implements OnInit {
    private apiAssetUrl = 'https://images-api.nasa.gov/asset/';
    private apiMetaUrl = 'https://images-api.nasa.gov/metadata/';
    data: any = {};

    constructor(
        private http: Http
    ) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.getData(this.apiAssetUrl);
        this.getData(this.apiMetaUrl);
    }

    getData(theUrl: any) {
        return this.http.get(theUrl)
          .map((res: Response) => res.json())
          .subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
}
