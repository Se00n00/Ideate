import { Component, Input , ElementRef, ViewChild, input, Output} from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { FilesComponent } from '../files/files.component';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from '../ideas.component';
import { liveQuery } from 'dexie';
import { db, IdeaList, Idea } from '../../../dexie.service';
import { FormsModule } from '@angular/forms';
import { __exportStar } from 'tslib';
import { SharedService } from '../../../shared.service';

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
  image_url:string | ArrayBuffer | null ='';



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


  constructor(private sharedService:SharedService){

  }
  // EDIT : ADD POINTS WITH LINKS

  commentLinkList:{linkTitle:string,linkHref:string}[]=this.sharedService.commentLinkList
  linkTitle:string='';
  linkHref:string='';
  addLink(){
    if(this.linkHref===''||this.linkTitle===''){
      alert('Please Fill the both Title and Link Input');
    }else{
      this.sharedService.addCommentLink({linkTitle:this.linkTitle,linkHref:this.linkHref})
      // this.commentLinkList.push({linkTitle:this.linkTitle,linkHref:this.linkHref});
      this.linkHref='';
      this.linkTitle='';
    }
  }
  //                   => Point's Image
  pointImage: string | ArrayBuffer | null = "../../../../assets/addImage.png";
  getPointImage(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pointImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  pointComment:string='';
  PointComment:{text:string,imageUrl:string | ArrayBuffer | null}[]=[];
  AddComment(){
    if(this.pointComment==='' || this.pointImage===null){
      alert('Please Add at least a word and Image');
    }else{
      this.sharedService.addPointComment({text:this.pointComment,imageUrl:this.pointImage});
      // this.PointComment.push({text:this.pointComment,imageUrl:this.pointImage})
      this.pointComment='';
      this.pointImage=null;
    }
  }

  //EDIT :IDEA HEADER
  delete_idea(){
    
  }

  // EDIT: IDEA - IDEA DETAILS
  new_ideaTitle:string='Add a new Title of Your Idea';
  new_description:string='Add a description to your Idea';
  new_viewImageSrc: string | ArrayBuffer | null = '../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp';
  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const currentId=this
        this.new_viewImageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  addTitleToDb(newTitle:string){

  }
  addDescriptionToDb(newDescription:string){

  }



  // EDIT: IDEA -LINKS
  linkImage: string | ArrayBuffer | null ="../../../../assets/icons/links.svg";
  addLinkImage(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.linkImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  ideaLinkText:string='';
  ideaLinkHref:string='';
  addIdeaLinks(){
    if(this.ideaLinkText==='' && this.ideaLinkText===''){
      alert('Please Enter Both Link Title and Link Refrence');
    }else{
      this.sharedService
    .addIdeaLinkList({linkImage:this.linkImage,linkText:this.ideaLinkText,linkHref:this.ideaLinkHref});
    this.ideaLinkHref='';
    this.ideaLinkText='';
    this.linkImage="../../../../assets/icons/links.svg";
    }
  }
  ShowIdeaLinkList:{linkImage:string | ArrayBuffer | null ,linkText:string,linkHref:string}[]=this.sharedService.IdeaLinkList;
  deleteIdeaLink(linkImage:string | ArrayBuffer | null,linkHref:string,linkText:string){
    this.sharedService.deleteIdeaLinkList({linkImage:this.linkImage,linkText:this.ideaLinkText,linkHref:this.ideaLinkHref});
    this.ShowIdeaLinkList=this.sharedService.IdeaLinkList;
  }
}
