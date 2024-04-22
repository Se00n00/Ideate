import { Component, Input , ElementRef, ViewChild, input, Output} from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { FilesComponent } from '../files/files.component';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from '../ideas.component';
import { liveQuery } from 'dexie';
import { db, IdeaList, Idea } from '../../../dexie.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommentsComponent, FilesComponent, CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  closedResize:boolean=false;
  Resize(){
    if(this.closedResize===true){
      this.closedResize=false;
    }else{
      this.closedResize=true;
    }
  }
  new_ideaTitle:string='';
  new_description:string='';
  new_viewImageSrc: string | ArrayBuffer | null = null;
  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.new_viewImageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  DatbaseName_first_Letter:string='L';
  DatbaseName:string='Name';
  delete_Idea(){
    
  }
  username:string='';

  bool_ideaDetails:boolean=true;
  bool_databaseSecurity:boolean=false;
  bool_links:boolean=false;
  bool_files:boolean=false;
  show_ideaDetails(){
    this.bool_databaseSecurity=false;
    this.bool_files=false;
    this.bool_ideaDetails=true;
    this.bool_links=false;
  }
  show_databaseSecurity(){
    this.bool_databaseSecurity=true;
    this.bool_files=false;
    this.bool_ideaDetails=false;
    this.bool_links=false;
  }
  show_links(){
    this.bool_databaseSecurity=false;
    this.bool_files=false;
    this.bool_ideaDetails=false;
    this.bool_links=true;
  }
  show_files(){
    this.bool_databaseSecurity=false;
    this.bool_files=true;
    this.bool_ideaDetails=false;
    this.bool_links=false;
  }


  // idealist$ = liveQuery(()=>this.)
  Description:string='Add Description about your Idea';
  Title:string='Idea Title'
  Links:{name: string, href:string}[]=[{name:'Google', href:'Google.com'}]

  //image url
  image_url:string | ArrayBuffer | null ='../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp';



  //view files or not
  viewFiles:boolean=false;
  view:string='View Files';
  view_files(){
    if(this.viewFiles===false){
      this.viewFiles=true;
      this.view='Hide Files';
    }else{
      this.viewFiles=false;
      this.view='View Files';
    }
  }
  //add Files
  Files:{Name:string,File_in_database:string}[]=[{Name:'Sample File',File_in_database:''}];  //add image of file also
  newFiles:{Name:string,File_in_database:string}[]=[];
  //editable Window and it's changes
  editable_window:boolean=false;
  view_edit:boolean=true;
  start_edit(){
    this.editable_window=true;
    this.view_edit=false;
  }
  end_edit(){
    this.editable_window=false;
    this.view_edit=true;
  }
  onApply_ideaDetails(){
    this.Description=this.new_description
    this.Title=this.new_ideaTitle
    this.Links=[];
    this.image_url=this.new_viewImageSrc;
    this.end_edit();
  }

  changeMenu:string='idea';
  changeToMenu(str:string){
    if(str==='idea'){
      this.changeMenu='idea';
    }else if(str==='files'){
      this.changeMenu='files';
    }else if(str==='points'){
      this.changeMenu='points';
    }else{
      this.changeMenu='edit';
    }
  }


  // EDIT : ADD POINTS WITH LINKS
  commentLinkList:{linkTitle:string,linkHref:string}[]=[{linkTitle:'Backyard',linkHref:'www.backyard.com'}];
  linkTitle:string='';
  linkHref:string='';
  addLink(){
    if(this.linkHref===''||this.linkTitle===''){
      alert('Please Fill the both Title and Link Input');
    }else{
      this.commentLinkList.push({linkTitle:this.linkTitle,linkHref:this.linkHref});
      this.linkHref='';
      this.linkTitle='';
    }
  }
}
