import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterItemComponent, CarouselComponent, ProductItemComponent, LaptopComponent, SmartphoneComponent],
  exports: [HeaderComponent, FooterComponent, FooterItemComponent, CarouselComponent, ProductItemComponent, LaptopComponent, SmartphoneComponent],
  imports: [
    CommonModule
  ]
})
export class HomeworkModule { }
