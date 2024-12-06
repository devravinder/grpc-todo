// Original file: ../proto/todo.proto

export const TodoStatus = {
  PENDING: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
  CANCELLED: 3,
} as const;

export type TodoStatus =
  | 'PENDING'
  | 0
  | 'IN_PROGRESS'
  | 1
  | 'COMPLETED'
  | 2
  | 'CANCELLED'
  | 3

export type TodoStatus__Output = typeof TodoStatus[keyof typeof TodoStatus]
