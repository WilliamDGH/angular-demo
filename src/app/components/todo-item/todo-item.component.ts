import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses () {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  // onToogle()
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  // onDelete()
  onDelete(todo) {
    console.log('delete');
  }

}
