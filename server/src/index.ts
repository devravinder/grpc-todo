import path from 'path'
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/todo';
import todoServiceImpl from './services/todoServiceImpl'

const PROTO_PATH = path.resolve('../proto/todo.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const todoProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const todoPackage = todoProto.todo

const PORT = process.env.PORT || 8080

const main = () => {
  const server = new grpc.Server();

  server.addService(todoPackage.TodoService.service, todoServiceImpl); // we can add many like this

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err)
      console.error(err)
    console.log(`Server running on port ${port}`)
  });
}

main();