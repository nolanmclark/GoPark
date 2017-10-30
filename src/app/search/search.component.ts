import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';
import { parkService } from '../parkService/parkService.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent  {

    q: any;
    data: any;
    park: any;
    parkSuggestions: any;
    parkData: any;
    parkImages: any;
    parkImageData: any;
    view = false;

    constructor(public parkService: parkService){
        this.q = '';
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
        this.parkImages = this.parkData.images;
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



 }
