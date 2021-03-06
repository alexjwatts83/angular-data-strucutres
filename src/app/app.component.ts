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
          name: 'Priority Queues',
          link: '/trees/priority-queues'
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
    },
    {
      name: 'Algorithms',
      link: '/algorithms',
      children: [
        {
          name: 'Info',
          link: '/algorithms/info'
        },
        {
          name: 'Factorials',
          link: '/algorithms/factorials'
        },
        {
          name: 'Fibonacci',
          link: '/algorithms/fibonacci'
        },
        {
          name: 'Reverse Strings',
          link: '/algorithms/reverse-string'
        },
        {
          name: 'Sorting',
          link: '/algorithms/sorting'
        },
        {
          name: 'Searching',
          link: '/algorithms/searching'
        },
      ]
    },
  ];
  // lols months start at 0, setting month to 2 as I started in march
  started = new Date(2020, 2, 22, 16, 50, 0, 0);
}
