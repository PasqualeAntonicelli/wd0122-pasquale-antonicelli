import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  todos:Todo[]|undefined = undefined

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos(false).then(res=>{
      this.todos = res
    })
  }

   elimina(id:number){
     this.todoService.removeTodo(id).then(res=>{
       console.log(res);
     })
   }
}
