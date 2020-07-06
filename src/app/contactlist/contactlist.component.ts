import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhonebookService } from '../phonebook.service';
import { Entry } from '../Models/Entry';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  entry: Entry;
  closeResult: string;
  entries: Entry[];

  @Output() public childEvent = new EventEmitter<Entry>();
  
  constructor(private _phonebookService: PhonebookService, private modalService: NgbModal) { 
    this.entry = new Entry();
  }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(){
    this._phonebookService.getAllEntries()
        .subscribe((data) => {
        if(data){
          this.entries = data;
          this.childEvent.emit(this.entries[0]);
        } 
      },error => console.error(error));
  }

  getEntry(event){
    this.entries = new Array<Entry>();
    this._phonebookService.getEntry(event.target.value).subscribe(
        data => {
          this.entries = data;
        },error => console.error(error));
  }

  saveEntry(){
    this.entry.entryID = "0";
    this._phonebookService.saveEntry(this.entry)
        .subscribe((data) => {
            this.getEntries();
        }, error => this.getEntries());  
    this.modalService.dismissAll();
  }

  onSelectionChange(entry: Entry){      
      this.childEvent.emit(entry);
  }

  open(content) {
    this.entry = new Entry();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
