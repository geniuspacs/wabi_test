import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FilterPipeModule } from 'src/app/pipes/filter/filter.pipe.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    FilterPipeModule
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class MenuModule { }
