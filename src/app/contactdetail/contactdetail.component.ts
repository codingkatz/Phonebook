import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.scss']
})
export class ContactdetailComponent implements OnInit {

  @Input() public entry;

  constructor() { }

  ngOnInit(): void {
    
  }

}
