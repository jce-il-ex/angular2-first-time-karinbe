import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
MyList = [

{id:1
},
{id:2
},
{id:3
},
{id:4
},
];
  constructor() { }

  ngOnInit() {
  }

}
