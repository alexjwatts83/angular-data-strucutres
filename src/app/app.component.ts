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
    },
    {
      name: 'Linked Lists',
      link: '/linked-lists',
      children: [
        {
          name: 'Singly Linked Lists',
          link: '/linked-lists/singly'
        },
        {
          name: 'Doubly Linked Lists',
          link: '/linked-lists/doubly'
        },
      ]
    },
    {
      name: 'Stacks',
      link: '/stacks'
    },
    {
      name: 'Queues',
      link: '/queues'
    },
    {
      name: 'Trees',
      link: '/trees',
      children: [
        {
          name: 'Binary Search Trees',
          link: '/trees/binary-search-trees'
        },
        {
          name: 'Binary Heaps',
          link: '/trees/binary-heaps'
        },
        {
          name: 'Tries',
          link: '/trees/tries'
        }
      ]

    },
    {
      name: 'Graphs',
      link: '/graphs'
    }
  ];
  started = new Date(2020, 3, 22, 16, 50, 0, 0);
}
