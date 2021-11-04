import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'Spokane Power Stroke';
  constructor() { }
/* ngOnInit is when the component loads */
  ngOnInit(): void {
  }

}
