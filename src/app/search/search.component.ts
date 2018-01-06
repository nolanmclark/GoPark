import { Component, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import { parkService } from '../parkService/parkService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    q: any;
    data: any;
    park: any;
    parkSuggestions: any;
    parkData: any;
    parkImages: any;
    parkImageData: any;
    view = false;
    ran: any;
    imagesLength: any;
    sub: any;

    constructor(private route: ActivatedRoute, public parkService: parkService){
        this.q = '';
    }

    ngOnInit() {
      // let incomingPark = this.route.snapshot.params.park;
      // console.log(incomingPark.fullName);
      // this.select(incomingPark);
      this.sub = this.route.data.subscribe((park) => {
        this.select(park);
        console.log(park);
      });
    }

    onKey(event) {
        if(this.q.length <= 2) {
            this.parkData = [];
            this.view = false;
        }
        if(this.q.length > 2) {
            this.getSearchResults();
            console.log("here");
        }
    }

    select(park) {
        this.park = park;
        this.q = park.fullName;
        this.parkData = [];
        this.view = true;
        this.parkImages = park.images;
        this.imagesLength = park.images.length;
        this.ran = Math.floor(Math.random() * this.imagesLength);
        console.log(this.ran)
    }

    getSearchResults() {
        if(this.q.length > 2) {
            let url = this.parkService.search(this.q);
            this.parkSuggestions = this.parkService.getData(url);
            this.parkSuggestions.subscribe(data => {
                this.parkData = data.data;
                console.log(data);
            })
            console.log(this.parkData);
        } else {
            return;
        }
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

 }
