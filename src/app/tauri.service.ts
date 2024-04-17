import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';
@Injectable({
  providedIn: 'root'
})
export class TauriService {

  // constructor() { }
  async openFileInDesktop(filePath: string) {
    try {
      await invoke('open_file', { path: filePath });
    } catch (error) {
      console.error('Error opening file:', error);
    }
  }
}
