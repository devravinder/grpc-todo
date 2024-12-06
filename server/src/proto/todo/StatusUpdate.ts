// Original file: ../proto/todo.proto

import type { TodoStatus as _todo_TodoStatus, TodoStatus__Output as _todo_TodoStatus__Output } from '../todo/TodoStatus';

export interface StatusUpdate {
  'id'?: (string);
  'status'?: (_todo_TodoStatus);
}

export interface StatusUpdate__Output {
  'id'?: (string);
  'status'?: (_todo_TodoStatus__Output);
}
