import { Component, Input, input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { FormControlDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {




  
  image_source: string | ArrayBuffer | null = null;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image_source = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  //comments as whole in databses
  comments:{text:string, image:string | ArrayBuffer | null}[]=[{text:'This is a Sample Comment',image:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}];
  crousel_comments:{text:string, image:string | ArrayBuffer | null}[]=[];
  // i:number=0;
  currentIndex:number=0;
  // initiate_crousel(){
  //   this.crousel_comments[0]=this.comments[0];
  // }
  comment:string='';
  image_url:string='';


  
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
  IdeaPoint:{text:string,imageUrl:string}[]=[{text:'This is a Sample Comment',imageUrl:'../../../../assets/flowers.jpg'},{text:'This is a Sajvksdnkvbsdvbbsdkb sdk bksbks mple Comment',imageUrl:'../../../../assets/idea_image.jpg'},{text:'This is a ml jns wii ih wefiwfSamp j oiro ioijojre oj eoj j erj ole Comment',imageUrl:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}];
  IdeaPointLinks:{linkTitle:string,linkHref:string}[]=[{linkTitle:'googlehafisaf',linkHref:'www.google.com'},{linkTitle:'googledksnfkjd',linkHref:'www.google.com'},{linkTitle:'googlejfsdhidf',linkHref:'www.google.com'}];
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
