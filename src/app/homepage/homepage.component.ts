import { Component, OnInit } from '@angular/core';
import { items } from '../Item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  items = items;

}
