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

  ideate_buttons:string='active_button_class';
  scheduled_buttons:string='change_buttons';

  Ideas:boolean=true;
  Schedule:boolean=false;
  Ideate(){
    this.Ideas=true;
    this.Schedule=false;
    this.ideate_buttons='active_button_class';
    this.scheduled_buttons='change_buttons';
  }
  Scheduled(){
    this.Ideas=false;
    this.Schedule=true;
    this.ideate_buttons='change_buttons';
    this.scheduled_buttons='active_button_class';
  }
  constructor(private sharedService:SharedService){

  }
  // id:Number=0;
  EachIdea:{IdeaTitle:string,IdeaDescription:String,IdeaImage:String}={IdeaTitle:'Add a new Title of Your Idea',IdeaDescription:'Add a description to your Idea',IdeaImage:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}
  initiate_new(){
    this.sharedService.addIdeas(this.EachIdea)
  }
  hide_others:boolean=true;
  disappear_atStarting(){
    this.hide_others=false;
  }
}
