import { Component } from '@angular/core';
import { ViewComponent } from './view/view.component';
import { CommonModule } from '@angular/common';
import { db, IdeaList, Appdetail} from '../../dexie.service';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [ViewComponent, CommonModule],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.css'
})

export class IdeasComponent extends ViewComponent{
  // constructor(fileComponenet:FilesComponent){};
  //introduction part whenever user opens the app first time


  // -------whenever Ideas.length ==0 : into =true;


  // visible:boolean=false;
  // show_files(){
  //   this.visible=true;
  // }
  // Ideas:any[]=[];
  intro:boolean=true;
  IdeaList$ =liveQuery(()=>db.IdeaList.toArray());
  // intro:boolean=(db.IdeaList.count===0)? true :false;
  // db.IdeaList.count().then((count) => {
  //   intro = count === 0;
  // }).catch((error) => {
  //   console.error('Error getting IdeaList count:', error);
  //   // Handle the error as needed
  // });
  IdeaTitle:string=this.Title;
  IdeaDescription:string=this.Description;

  i:number =0;
  links:{name: string, href:string}[]=this.Links;
  async initiate_new(){

    await db.IdeaList.add({
      id: this.i++,
      title: this.IdeaTitle,
      description: this.IdeaDescription,
      links: this.links,
    });
    // async resetDatabase() {
    //   await db.transaction('rw', 'IdeaList');
    // }
  }
  identifyList(index: number, list:IdeaList){
    return `${list.id}${list.title}`
  }
}
