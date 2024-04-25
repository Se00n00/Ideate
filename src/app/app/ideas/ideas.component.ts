import { Component, OnInit, ElementRef, ViewChild, Renderer2} from '@angular/core';
import * as THREE from 'three';
import { ViewComponent } from './view/view.component';
import { CommonModule } from '@angular/common';
import { db, IdeaList, Appdetail} from '../../dexie.service';
import { liveQuery } from 'dexie';
import { SharedService } from '../../shared.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [ViewComponent, CommonModule],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.css'
})

export class IdeasComponent{
  constructor(private sharedService:SharedService,private appcomponent:AppComponent){
    // super();
  }
  IdeaList:{id:Number,IdeaTitle:string,IdeaDescription:String,IdeaImage:String}[]=this.sharedService.Ideas;
  // constructor(fileComponenet:FilesComponent){};
  //introduction part whenever user opens the app first time


  // -------whenever Ideas.length ==0 : into =true;


  // visible:boolean=false;
  // show_files(){
  //   this.visible=true;
  // }
  // Ideas:any[]=[];
  // intro:boolean=this.sharedService.into;
  ideas_createNewIdea(){
    this.appcomponent.app_createIdea();
  }
  ideas_getIntroInfo(){
    return this.sharedService.intro
  }
  // IdeaList$ =liveQuery(()=>db.IdeaList.toArray());
  // intro:boolean=(db.IdeaList.count===0)? true :false;
  // db.IdeaList.count().then((count) => {
  //   intro = count === 0;
  // }).catch((error) => {
  //   console.error('Error getting IdeaList count:', error);
  //   // Handle the error as needed
  // });
  // IdeaTitle:string=this.Title;
  // IdeaDescription:string=this.Description;

  // i:number =0;
  // links:{name: string, href:string}[]=this.Links;
  // async initiate_new(){

  //   await db.IdeaList.add({
  //     id: this.i++,
  //     title: this.IdeaTitle,
  //     description: this.IdeaDescription,
  //     links: this.links,
  //   });
  //   // async resetDatabase() {
  //   //   await db.transaction('rw', 'IdeaList');
  //   // }
  // }
  // identifyList(index: number, list:IdeaList){
  //   return `${list.id}${list.title}`
  // }


  //Select Themes
  Select_Themes:boolean=false;
  selectThemes(){
    if(this.Select_Themes===true){
      this.Select_Themes=false;
    }else{
      this.Select_Themes=true;
    }
  }
  //     Themes variable
  Themes=this.sharedService.Themes[0];
  Themesimages=this.Themes.images;
  ideaBackground=this.Themesimages.center;
}
