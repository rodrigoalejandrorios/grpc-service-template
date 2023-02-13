
import { DefinePackageProps, InyectServiceProps } from "./libs/service.register.util";
import { ProtoGrpcType } from './interfaces/test';
import { HelloHanlder } from './hello.handler';


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
