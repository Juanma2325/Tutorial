import { Component } from '@angular/core';
import { ProductsComponent } from '@angular-monorepo/products';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ProductsComponent, NxWelcomeComponent, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}