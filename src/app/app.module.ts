import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { SearchcontactComponent } from './searchcontact/searchcontact.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { ListitemsComponent } from './listitems/listitems.component';

import { HttpClientModule } from '@angular/common/http'
import { PhonebookService } from './phonebook.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    SearchcontactComponent,
    ContactdetailComponent,
    ListitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
