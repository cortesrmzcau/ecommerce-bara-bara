import { Component, OnInit } from '@angular/core';
import { interfaceObjets } from './interfaceObjets';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  arrayExample: string[] | null = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5'
  ];

  objetsExample: interfaceObjets[] = [
    {
      id: 1,
      name: 'Cesar',
      age: 27,
      money: 200
    },
    {
      id: 2,
      name: 'Yummi',
      age: 20,
      money: 100
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
