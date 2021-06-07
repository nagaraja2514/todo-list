import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class FilterPipe implements PipeTransform {

  transform(listData: any[], serchData: string): any {
    //if (!listData) return [];
    // if (listData) return listData;
    //serchData = serchData.toLowerCase();
    if (!listData || !serchData) {
      return listData;
    }
    return listData.filter(data => data.name.toLowerCase().indexOf(serchData) !== -1)
    // if (listData.length === 0 || filter === "" || propName === "") {
    //   return listData;
    // }3
    // for (const item of listData) {
    //   if (item[propName] === filter) {
    //     resultArray.push(item)
    //   }
    // }
    // return resultArray;
  }

}
