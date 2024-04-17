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
  comments:{text:string, image:string | ArrayBuffer | null}[]=[{text:'This is a Sample Comment',image:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'},{text:'This is a Sample Comment',image:'../../../../assets/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp'}];
  crousel_comments:{text:string, image:string | ArrayBuffer | null}[]=[];
  // i:number=0;
  currentIndex:number=0;
  // initiate_crousel(){
  //   this.crousel_comments[0]=this.comments[0];
  // }
  comment:string='';
  image_url:string='';
  create_comment_list:boolean=false;
  not_create_comment_list:boolean=true;
  show_create_list(){
    this.create_comment_list=true;
    this.not_create_comment_list=false;
  }
  dont_show_creation(){
    this.create_comment_list=false;
    this.not_create_comment_list=true;
    this.image_source='';
    this.comment='';
  }
  add_comments(){
    this.comments.push({text:this.comment, image:this.image_source});
    this.create_comment_list=false;
    this.not_create_comment_list=true;
    this.image_source='';
    this.comment='';
  }
  up_crousel(){
    // this.currentIndex=(this.currentIndex===this.comments.length-1)? 0 :this.currentIndex+1;

    // this.currentIndex = (this.currentIndex === this.comments.length - 1) ? 0 : this.currentIndex + 1;
  }
  down_crousel(){
    // this.currentIndex = (this.currentIndex === 0) ? this.comments.length - 1 : this.currentIndex - 1;
  }
}
