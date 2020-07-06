import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchcontact',
  templateUrl: './searchcontact.component.html',
  styleUrls: ['./searchcontact.component.scss']
})

export class SearchcontactComponent implements OnInit {
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.update.emit('');
  }
}
