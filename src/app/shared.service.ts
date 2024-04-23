import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Point comment
  PointComment:{text:string,imageUrl:string | ArrayBuffer | null}[]=[];
  commentLinkList:{linkTitle:string,linkHref:string}[]=[];
  constructor() { }
  getPointComment():{ text: string, imageUrl: string | ArrayBuffer | null }[] {
    return this.PointComment;
  }
  getCommentLinkList(): { linkTitle: string, linkHref: string }[] {
    return this.commentLinkList;
  }
  addPointComment(comment: { text: string, imageUrl: string | ArrayBuffer | null }) {
    this.PointComment.push(comment);
  }

  addCommentLink(link: { linkTitle: string, linkHref: string }) {
    this.commentLinkList.push(link);
  }

  //Idea details
  // ImageUrl:string='';
  IdeaLinkList:{linkImage:string | ArrayBuffer | null ,linkText:string,linkHref:string}[]=[];
  getIdeaLinkList():{linkImage:string | ArrayBuffer | null ,linkText:string,linkHref:string}[]{
    return this.IdeaLinkList;
  }
  addIdeaLinkList(idealink:{linkImage:string | ArrayBuffer | null ,linkText:string,linkHref:string}){
    this.IdeaLinkList.push(idealink);
  }
  deleteIdeaLinkList(idealink:{linkImage:string | ArrayBuffer | null ,linkText:string,linkHref:string}){
    const index = this.IdeaLinkList.findIndex((item) =>
        item.linkText === idealink.linkText
    );

    if (index !== -1) {
      this.IdeaLinkList.splice(index, 1);
    }
  }



  //Idea Databse array
  intro:boolean=true;
  id:Number=0;
  Ide:any;
  Ideas:{id:Number,IdeaTitle:string,IdeaDescription:String,IdeaImage:String}[]=[];
  //          ---GET
  getIdeas():{id:Number,IdeaTitle:string,IdeaDescription:String,IdeaImage:String}[]{
    return this.Ideas;
  }
  //          ---ADD
  addIdeas(ideates:{IdeaTitle:string,IdeaDescription:String,IdeaImage:String}){
    this.Ide={id:this.id,IdeaTitle:ideates.IdeaTitle,IdeaDescription:ideates.IdeaDescription,IdeaImage:ideates.IdeaImage};
    this.id=this.id.valueOf()+1;
    this.Ideas.unshift(this.Ide);
    this.intro=false;
  }
  //         ---CHANGE
  changeIdeasTitle(newTitle:{id:number,IdeaTitle:string}){
    
  }
  changeIdeasDescription(newDescription:{id:number,IdeaDesciption:String}){

  }
  changeIdeasImage(newImage:{id:number,IdeaImage:String}){

  }
  //          ---DELETE
  deleteIdeas(singleidea:{id:Number,IdeaTitle:string,IdeaDescription:String}){
    const index=this.Ideas.findIndex((item)=>{
      item.id===singleidea.id;
      item.IdeaTitle===singleidea.IdeaTitle;
      item.IdeaDescription===singleidea.IdeaDescription;
    });
    this.Ideas.splice(index,1);
    if(this.Ideas.length===0){
      this.intro=true;
    }
  }
  // IdeasLinks:{id:number,}
}