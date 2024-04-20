import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";
import { IdeasComponent } from './app/ideas/ideas.component';
import { SchedulesComponent } from './app/schedules/schedules.component';

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
  initiate_new(){
    
  }
  hide_others:boolean=true;
  disappear_atStarting(){
    this.hide_others=false;
  }
}
