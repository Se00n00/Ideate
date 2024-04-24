import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";
import { IdeasComponent } from './app/ideas/ideas.component';
import { SchedulesComponent } from './app/schedules/schedules.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IdeasComponent, SchedulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  // CHANGE CSS : changng class of buttons
  app_header_ideatebutton:string='app_header_changeViews_button_active';
  app_header_scheduledbutton:string='app_header_changeViews_button_inactive';

  Ideas:boolean=true;
  Schedule:boolean=false;
  app_showIdeate(){
    this.Ideas=true;
    this.Schedule=false;
    this.app_header_ideatebutton='app_header_changeViews_button_active';
    this.app_header_scheduledbutton='app_header_changeViews_button_inactive';
  }
  app_showScheduled(){
    this.Ideas=false;
    this.Schedule=true;
    this.app_header_ideatebutton='app_header_changeViews_button_inactive';
    this.app_header_scheduledbutton='app_header_changeViews_button_active';
  }





  constructor(private sharedService:SharedService){

  }
  // id:Number=0;
  EachIdea:{IdeaTitle:string,IdeaDescription:String,IdeaImage:String}={IdeaTitle:'Add a new Title of Your Idea',IdeaDescription:'Add a description to your Idea',IdeaImage:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}
  app_createIdea(){
    this.sharedService.addIdeas(this.EachIdea)
  }
  // hide_others:boolean=true;
  // disappear_atStarting(){
  //   this.hide_others=false;
  // }
}
