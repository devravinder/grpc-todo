// Original file: ../proto/todo.proto

import type { TodoStatus as _todo_TodoStatus, TodoStatus__Output as _todo_TodoStatus__Output } from '../todo/TodoStatus';

export interface UpdateTodo {
  'id'?: (string);
  'name'?: (string);
  'priority'?: (number);
  'status'?: (_todo_TodoStatus);
  '_name'?: "name";
  '_priority'?: "priority";
  '_status'?: "status";
}

export interface UpdateTodo__Output {
  'id'?: (string);
  'name'?: (string);
  'priority'?: (number);
  'status'?: (_todo_TodoStatus__Output);
}
