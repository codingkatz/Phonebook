import { Component, Input } from '@angular/core';
import { Entry } from './Models/Entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@Input() public entry : Entry;
   //entry : Entry;
   //contact: Entry;
   name = "";
   phonenumber = "";
   
  title = 'myphonebook';

  constructor(){
    this.initialiseForm();
  }

  private initialiseForm(): void{
    //this.contact = new any();
  }
 

  onSelect(entry: Entry){

    this.name = entry.name;
    this.phonenumber = entry.phonenumber;
  }
}
