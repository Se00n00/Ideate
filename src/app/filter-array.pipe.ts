import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  standalone: true
})
export class FilterArrayPipe implements PipeTransform {

  transform(FileInstance:any[], searchInput: string, property:string):any[]{
    if(!FileInstance)return [];
    if(!searchInput) return FileInstance;
    return FileInstance.filter(item=> 
      item[property].toString().toLowerCase().includes(searchInput.toLowerCase()));
}

}
