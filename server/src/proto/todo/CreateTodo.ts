// Original file: ../proto/todo.proto

import type { TodoStatus as _todo_TodoStatus, TodoStatus__Output as _todo_TodoStatus__Output } from '../todo/TodoStatus';

export interface CreateTodo {
  'name'?: (string);
  'priority'?: (number);
  'status'?: (_todo_TodoStatus);
}

export interface CreateTodo__Output {
  'name'?: (string);
  'priority'?: (number);
  'status'?: (_todo_TodoStatus__Output);
}
