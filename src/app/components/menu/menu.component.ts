import { Component, Input, OnInit } from '@angular/core';

export interface DataMenuItem {
  id: number;
  name: string;
  parentId?: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Input() data: DataMenuItem[] = [];
  @Input() isRootNode: boolean = false;
  @Input() trigger?: string = 'Trigger';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  getIdByName(name?: string): number | undefined {
    return this.data.find(item => item.name === name)?.id;
  }

  hasChildren(id?: number): boolean {
    return id ? this.data.findIndex(item => item.parentId === id) >= 0 : false;
  }

  getData(name?: string): DataMenuItem[] {
    if (!name) {
      return [];
    }
    const parent = this.data.find(item => item.name === name);

    return parent ? this.data.filter(item => item.parentId === parent.id) : [];
  }

}
