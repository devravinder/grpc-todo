import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _todo_TodoServiceClient, TodoServiceDefinition as _todo_TodoServiceDefinition } from './todo/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  todo: {
    CreateTodo: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Priority: MessageTypeDefinition
    StatusUpdate: MessageTypeDefinition
    Todo: MessageTypeDefinition
    TodoId: MessageTypeDefinition
    TodoService: SubtypeConstructor<typeof grpc.Client, _todo_TodoServiceClient> & { service: _todo_TodoServiceDefinition }
    TodoStatus: EnumTypeDefinition
    UpdateTodo: MessageTypeDefinition
  }
}

