import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  allTodos:Todo[] = []

  constructor() { }

  getTodos(comp:boolean):Promise<Todo[]> {
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        let filteredTodos = this.allTodos.filter(res=>res.completed == comp)
       succ(filteredTodos)
      },2000)
    })
  }

  removeTodo(id:number):Promise<any>{}
  updateTodo(id:number):Promise<any>{}
  addTodo(title:string):Promise<any>{}
}

