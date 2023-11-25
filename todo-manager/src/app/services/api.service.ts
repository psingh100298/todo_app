import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080';
  constructor(private httpService:HttpClient) { }

  addTodo(todo:Todo){
    return this.httpService.post('${this.baseUrl}/todos', todo);
  }

}
