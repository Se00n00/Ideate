import { Component, ViewChild} from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { TauriService } from '../../../tauri.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  // constructor(){
  //   super()
  // }
  
  documents:{document_name:string,file_type:string}[]=[];
  file_type_image:string='';
  open_document(document_file:{document_name:string,file_type:string}){

  }
  // constructor(private tauriService: TauriService) {}

  // openFileInDesktop() {
  //   this.tauriService.openFileInDesktop('path/to/file/in/database');
  // }
}
