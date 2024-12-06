
packages:
-------
1. dotenv-cli:  for loading env variables  
        eg: dotenv -e .env  -- node server.js  
   '--' in the package.json makes sure the env varables are loaded before running the next command   
   ref: https://www.npmjs.com/package/dotenv-cli  


2. del-cli: for deleting files/folders   
        eg: npx del-cli build  

3. @grpc/proto-loader: for loading .proto files & for generating files from .proto  
    eg: proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=$PROTO_FILES_OUT $PROTO_FILES_SRC/*.proto 

4. @grpc/grpc-js: to create gRPC server     


5. google-protobuf: for serialization/de-serialization of photobuf messages & for generating types from .proto  
   or for generating language specific files

   Note:- '@grpc/proto-loader' internally uses 'google-protobuf'. But '@grpc/proto-loader' mainly focuses on loading .proto files...with some special configuration. eg: some times load long 'values' as 'string'


6. grpc-tools: 
        - 'protoc' compiler for compiling proto files
        - 'grpc_tools_node_protoc' plugin to generating files for nodejs ( server & clinet )

7. grpc_tools_node_protoc_ts: it is plugin for protoc (grpc_tools_node_protoc) for generating data type files from .proto files
        


Note:- @grpc/proto-loader & grpc-tools  both are for generating files only, but
       
       @grpc/proto-loader: loands .proto files & generates .js files at *runtime*  - suitable for backned apps

       grpc-tool:  loands .proto files & generates .js files at *buildtime*  - suitable for client apps apps ( static files )
       

       







Things todo:

Node-client


    "gen:js": "grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/proto --grpc_out=./src/proto --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) -I ../proto ../proto/*.proto",


        "gen:types": "grpc_tools_node_protoc --plugin=protoc-gen-ts=$(which protoc-gen-ts) --ts_out=grpc_js:./src/proto  -I ../proto ../proto/*.proto",



    "gen:js": "grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/proto --grpc_out=./src/proto --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) -I ../proto ../proto/*.proto",
    "gen:web-js": "grpc_tools_node_protoc -I=../proto ../proto/*.proto --plugin=protoc-gen-grpc-web=$(which protoc-gen-grpc-web)  --js_out=import_style=commonjs,binary:./src/proto  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/proto",
    "gen:web-js-ts": "pnpx protoc -I=../proto ../proto/*.proto  --plugin=protoc-gen-ts=$(which protoc-gen-ts) --js_out=import_style=commonjs,binary:./src/proto --ts_out=service=grpc-web:./src/proto --ts_opt=esModuleInterop=true",
    "gen:whs": "pnpx protoc --plugin=protoc-gen-ts=$(which protoc-gen-ts) --js_out=import_style=commonjs,binary:./src/proto --ts_out=./src/proto -I ../proto ../proto/*proto",
    "gen:clean": "dotenv -e .env -- npx del-cli ./src/proto",
    "g:t:whs": "pnpx protoc -I=../proto ../proto/*.proto --js_out=import_style=es6:./src/proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto"
 



https://www.npmjs.com/package/@grpc-web/proxy









