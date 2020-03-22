import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-data-structures';
  links = [
    {
      name: 'Home',
      link: '/home'
    }    ,
    {
      name: 'Arrays',
      link: '/arrays'
    },
    {
      name: 'Hashes',
      link: '/hashes'
    },    {
      name: 'BST',
      link: '/binary-search-trees'
    }
  ];
  started = new Date(2020, 3, 22, 16, 50, 0, 0);
}
