import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  
  constructor()
  {
  }
}
