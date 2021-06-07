import { Component } from '@angular/core';
import { ListService } from './list.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'to-list';
  listData: any = ''
  data: string = ''
  serchData:any=''



  constructor(public listService: ListService) {
    this.listData = '';
  }
  ngOnInit(): void {
    this.listData = this.listService.getData();

  }

  add() {
    console.log(this.data)
    this.listData.push({
      name: this.data
    })
  }

  deleteData(name: any) {
    console.log(name)
    for (var i = 0; i < this.listData.length; i++) {
      if (this.listData[i]['name'] == name) {
        this.listData.splice(i, 1);
      }
    }

  }

}
