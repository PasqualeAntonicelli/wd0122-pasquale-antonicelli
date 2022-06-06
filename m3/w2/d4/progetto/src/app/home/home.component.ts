import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos:Todo[]|undefined = undefined
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos(false).then(res=>{
      this.todos = res
    })
  }

  aggiungi(){
  

  }

  completa(id:number){
    this.todoService.updateTodo(id).then(res=>{
      console.log(res);
    })  }
}
