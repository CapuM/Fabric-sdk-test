import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isclicked:false
  baseUrl: "http://localhost:8080/api"
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  get_Cars() {
    this.httpClient.get(this.baseUrl + "/queryallcars").subscribe((res) => {

      console.log(res);
    })
  }
}
