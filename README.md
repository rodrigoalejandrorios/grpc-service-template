# Node.JS and gRPC Template (Server)

### Technologies
- gRPC
- NodeJS

## How to initialize the microservice

1) Install dependencies with `npm install`,
2) Create `.proto` file with the following command `npm run proto:generate nameFile nameProtoPackage`
3) Configure the proto file that is in the folder `src/proto/`.
4) Create `.env` file to define environments variables. You must necessarily define the variable `GRPC_PORT` hat by default port `50051` is added.
5) Run command `npm run proto:build` to create the interfaces.
6) Inyect the services and the gRPC config in the `service.register.ts`:
```ts
export const definePackage: DefinePackageProps<ProtoGrpcType>  = {
    protoFileName: 'test.proto',
    namePackage: 'say_hello'
}

export const InyectServiceGrpc: InyectServiceProps[] = [
  {
    hanlder: HelloHanlder,
    nameService: "HelloService",
  },
];

```
6) Initialize the service with the following command `npm run start:server`

**The service will be initialized by default with the port: 50051**

## Optional

In the `types` folder, add and declare de environment variables types so you can see the variables in the `process.env`


