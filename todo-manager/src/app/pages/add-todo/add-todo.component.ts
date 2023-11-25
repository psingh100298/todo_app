import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo = new Todo();
  
  constructor(private apiService:ApiService){}

  submitForm(event:FormDataEvent){
    event.preventDefault();
    console.log(event);
    console.log(this.todo);
    this.apiService.addTodo(this.todo).subscribe({
      next:(data)=>{

      },
      error:(error)=>{

      },
      complete:()=>{
        
      }
    })
  }

}
