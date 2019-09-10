import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from "todo";

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {


  todos:Todo[];
  constructor (private httpClient:HttpClient) { }

  ngOnInit() {
  }

  getTodos(){
this.httpClient.get('http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5').subscribe(res=>{this.addTodo(res);
},
err=>{
  console.log(err)
}
)

  };

  addTodo(result){
    for(let i =0; i < result.length; i++){
      this.todos.push({id:result[i],title:result[i],completed:result[i]});
    }

  }

}
