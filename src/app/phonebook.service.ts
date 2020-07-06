import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entry } from './Models/Entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  baseUrl = "https://pafela.azure-api.net/entry/";

  constructor(private http: HttpClient) { }

  getAllEntries(): Observable<Entry[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = `${this.baseUrl}phonebook/entries`;
    return this.http.get<Entry[]>(url, {headers: headers});
  }

  getEntry(entry: string): Observable<Entry[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');    
    let url = `${this.baseUrl}phonebook/GetEntry?entry=`+ entry;
    return this.http.get<Entry[]>(url, {headers: headers});
  }

  saveEntry(entry: Entry):Observable<Entry[]> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = `${this.baseUrl}phonebook/SaveEntry?name=`+entry.name+'&phonenumber='+entry.phonenumber;
    return this.http.get<Entry[]>(url, {headers: headers});
  }
}
