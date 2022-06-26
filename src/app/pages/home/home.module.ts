import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { FilterPipeModule } from 'src/app/pipes/filter/filter.pipe.module';
import { MenuDataService } from 'src/app/services/menu-data.service';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    MenuModule,
    FilterPipeModule
  ],
  providers: [MenuDataService]
})
export class HomeModule { }
