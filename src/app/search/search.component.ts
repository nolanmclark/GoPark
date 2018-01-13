import { Component, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import { parkService } from '../parkService/parkService.service';
import { ActivatedRoute } from '@angular/router';
import {Data} from '../providers/data/data';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { UserService } from '../userService/userService';
import { Profile } from '../models/profile';
import {ModalGalleryModule, Image, Action, ImageModalEvent, Description} from 'angular-modal-gallery';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

    q: any;
    park: any;
    parkSuggestions: any;
    parkData: any;
    parkImages: any;
    parkImageData: any;
    view = false;
    ran: any;
    imagesLength: any;
    sub: any;
    imagesArray: any;
    photos: boolean;
    photoCollection: Array<Image> = [];
    isFavorite: any;
    favoritesList = {};
    isSignedIn: any;
    user: any;

    constructor(private userService: UserService, private data: Data, private route: ActivatedRoute, public parkService: parkService){
        this.q = '';
        this.photos = false;
        let park = this.data.storage;
        if(park != 'none') {
          console.log(park);
          this.select(park);
        }
    }

    async ngOnInit() {
      await this.checkForLogin();
    }

    checkForLogin() {
      let user = firebase.auth().currentUser;
      if(user != null) {
        this.user = user;
        this.isSignedIn = true;
        return;
      } else {
        this.isSignedIn = false;
      }
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

    viewPhotos() {
      this.photos = true;
    }

    select(park) {
        if(this.isSignedIn) {
          this.getUserDetails(park.parkCode);
        }
        this.park = park;
        this.q = park.fullName;
        this.parkData = [];
        this.view = true;
        this.parkImages = park.images;
        this.imagesLength = park.images.length;
        this.ran = Math.floor(Math.random() * this.imagesLength);
        console.log(this.ran);
        this.photoCollection = [];
        for(let i=0; i<this.parkImages.length; i++) {
          this.photoCollection.push(
            new Image(
              this.parkImages[i].url,
              this.parkImages[i].url,
              this.parkImages[i].caption,
              this.parkImages[i].url
            )
          );
        }
        console.log(this.photoCollection);
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

    getUserDetails(post):any {
      const ref: Observable<Profile> = this.userService.getUserDetails();
      ref.subscribe(res => {
        this.favoritesList = res.favorites;
            if(!this.checkEmpty()) {
              console.log(res.favorites);
              if(post in this.favoritesList) {
                    this.isFavorite = true;
                } else {
                    this.isFavorite = false;
                }
            } else {
              this.isFavorite = false;
            }
        });
    }


  favorite(park) {
    let post = this.park.parkCode;

    console.log(this.favoritesList);
    if(post in this.favoritesList) {
      this.isFavorite = false;
      let newFavorites = this.favoritesList;
      delete newFavorites[post];
      this.favoritesList = newFavorites;
    } else {
      this.isFavorite = true;
      let newFavorites = this.favoritesList;
      newFavorites[post] = true;
      this.favoritesList = newFavorites;
    }
      this.userService.addRemFavorites(this.favoritesList);
  }

    checkEmpty() {
      let len = Object.keys(this.favoritesList).length;
        if(len == 0) {
          return true;
        } else {
          return false;
        }
    }

    ngOnDestory() {
      this.data.storage = 'none';
    }
 }
