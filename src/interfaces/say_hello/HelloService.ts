// Original file: src/proto/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Params as _say_hello_Params, Params__Output as _say_hello_Params__Output } from '../say_hello/Params';
import type { Results as _say_hello_Results, Results__Output as _say_hello_Results__Output } from '../say_hello/Results';

export interface HelloServiceClient extends grpc.Client {
  SayHello(argument: _say_hello_Params, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _say_hello_Params, metadata: grpc.Metadata, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _say_hello_Params, options: grpc.CallOptions, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _say_hello_Params, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _say_hello_Params, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _say_hello_Params, metadata: grpc.Metadata, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _say_hello_Params, options: grpc.CallOptions, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _say_hello_Params, callback: grpc.requestCallback<_say_hello_Results__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_say_hello_Params__Output, _say_hello_Results>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_say_hello_Params, _say_hello_Results, _say_hello_Params__Output, _say_hello_Results__Output>
}
