import { Component, OnInit } from '@angular/core';
import { DataMenuItem } from 'src/app/components/menu/menu.component';
import { MenuDataService } from 'src/app/services/menu-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data: DataMenuItem[] = [];

  constructor(
    private menuDataSrv: MenuDataService
  ) { }

  ngOnInit(): void {
    this.menuDataSrv.getDataMenu().subscribe(data => {
      this.data = data;
      const rs = this.data.filter(parent => !parent.parentId).map(parent => {
        return {
          ...parent,
          children: this.data.filter(child => child.parentId === parent.id)
        }
      });
    });
  }

}
