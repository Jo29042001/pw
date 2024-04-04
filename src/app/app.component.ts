import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShipperHeaderComponent } from './shipper-header/shipper-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent, FooterComponent, ShipperHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping_Cart';
 
  
  constructor(private router: Router) {

  }

  isAdmin(): boolean {
    if(this.router.url.startsWith('/admin'))
      return true;
    else if(this.router.url.startsWith('/signup'))
      return true;
    else if(this.router.url.startsWith('/seller-login'))
      return true;
    else if(this.router.url.startsWith('/shipper-login'))
      return true;
    else return false;

  }
  // isShipper(): boolean {
  //   return this.router.url.startsWith('/admin');
  // }
}
