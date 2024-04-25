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





  // Themes Variable
  Theme1:any={images:{start:'../assets/Themes/1st.webp',end:'../assets/Themes/last.webp',center:'../assets/Themes/middle.webp',color1:'pink',color2:'red'},model:{start:'',end:'',center:''}};
  Themes:{images:{start:String|ArrayBuffer|null,end:String|ArrayBuffer|null,center:String|ArrayBuffer|null,color1:String|ArrayBuffer|null,color2:String|ArrayBuffer|null},model:{start:String|ArrayBuffer|null,end:String|ArrayBuffer|null,center:String|ArrayBuffer|null}}[]=[this.Theme1];


  //Files Variable
  FileCollection:{CName:String,Collection:{Cid:number,CFiles:{FTitle:String,FDescription:String}[]}}[]=[];
  File:{Cid:number,FTitle:String,FDescription:String}[]=[];
  deleteFileCollection(Cid:number){
    const index = this.FileCollection.findIndex((collection) => collection.Collection.Cid === Cid);
    if (index !== -1) {
      this.FileCollection.splice(index, 1);
    } else {
      console.error(`Collection with ID ${Cid} not found.`);
    }
  }
  addFileCollection(Collect:{CName:String,Collection:{Cid:number,CFiles:{FTitle:String,FDescription:String}[]}}){
    this.FileCollection.push(Collect);
  }
  renameFileCollection(Cid:number,CName:String){
    const index=this.FileCollection.findIndex((collection)=>collection.Collection.Cid=Cid);
    if(index!==-1){
      this.FileCollection[index].CName=CName;
    }
  }
}