import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServiceClient as _say_hello_HelloServiceClient, HelloServiceDefinition as _say_hello_HelloServiceDefinition } from './say_hello/HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  say_hello: {
    HelloService: SubtypeConstructor<typeof grpc.Client, _say_hello_HelloServiceClient> & { service: _say_hello_HelloServiceDefinition }
    Params: MessageTypeDefinition
    Results: MessageTypeDefinition
  }
}

