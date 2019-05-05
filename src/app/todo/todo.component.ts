import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist: any[] = [];
  todoVal: string;
  constructor() { }

  ngOnInit() {
  }
  addTodo() {
    if (this.todoVal != "") {

      this.todolist.push({ name: this.todoVal, status:"open" });
    }
    this.todoVal = "";
  }
  deleteTodo(i:number) {
    this.todolist.splice(i,1)
  }
  updateTodo(i: number,sts:string) {
    sts =  (sts == "open") ? "Closed" : "open";
    this.todolist[i].status = sts;
  }
}
