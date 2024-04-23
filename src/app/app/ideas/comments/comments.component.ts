import { Component,Injectable, OnInit,Input, input, Inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { FormControlDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from '../view/view.component';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})

export class CommentsComponent {
  constructor(private sharedService:SharedService){
    // super();
  }
  // constructor(PointComment:{text:string,imageUrl:string | ArrayBuffer | null}[],commentLinkList:{linkTitle:string,linkHref:string}[]){
  //   super(PointComment,commentLinkList);
  //   // this.IdeaPoint=PointComment;
  //   // this.IdeaPointLinks=pointImage;
  // }


  
  // image_source: string | ArrayBuffer | null = null;
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.image_source = reader.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // //comments as whole in databses
  // comments:{text:string, image:string | ArrayBuffer | null}[]=[{text:'This is a Sample Comment',image:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}];
  // crousel_comments:{text:string, image:string | ArrayBuffer | null}[]=[];
  // // i:number=0;
  // currentIndex:number=0;
  // // initiate_crousel(){
  // //   this.crousel_comments[0]=this.comments[0];
  // // }
  // comment:string='';
  // imageurl:string='';


  
  // not_create_comment_list:boolean=true;



  //Show / Hide Idea Points
  create_comment_list:boolean=false;
  comments_message:string='Show Idea Points';
  show_create_list(){
    if(this.create_comment_list===false){
      this.comments_message='Hide Idea Points';
      this.create_comment_list=true;
    }else{
      this.comments_message='Show Idea Points'
    this.create_comment_list=false;
    }
  }



  
  //Idea Point Items Array

  IdeaPoint:{text:string,imageUrl:string | ArrayBuffer | null}[]=this.sharedService.PointComment;
  IdeaPointLinks:{linkTitle:string,linkHref:string | ArrayBuffer | null}[]=this.sharedService.commentLinkList;
  IdeaPointInstance:any=this.IdeaPoint[0];
  IdeaPointLinksInstance:any=this.IdeaPointLinks[0];


  
  //Adding Crousel to Comments
  crouselIndex:number=0;
  up_crousel(){
    if(this.crouselIndex<this.IdeaPoint.length-1){
      this.crouselIndex++;
    }else{
      this.crouselIndex=0;
    }
    this.IdeaPointInstance=this.IdeaPoint[this.crouselIndex];
    this.IdeaPointLinksInstance=this.IdeaPointLinks[this.crouselIndex];
    
  }
  down_crousel(){
    if(this.crouselIndex>0){
      this.crouselIndex--;
    }else{
      this.crouselIndex=this.IdeaPoint.length-1;
    }
    this.IdeaPointInstance=this.IdeaPoint[this.crouselIndex];
    this.IdeaPointLinksInstance=this.IdeaPointLinks[this.crouselIndex];
  }
}
