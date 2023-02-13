import {
  UntypedHandleCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { HelloServiceHandlers } from "./interfaces/say_hello/HelloService";
import { HelloService } from "./services/hello.service";
import { Results } from "./interfaces/say_hello/Results";
import { Params__Output } from "./interfaces/say_hello/Params";

export class HelloHanlder implements HelloServiceHandlers {
  [name: string]: UntypedHandleCall;
  SayHello(
    call: ServerUnaryCall<Params__Output, Results>,
    callback: sendUnaryData<Results>
  ) {
    const { name } = call.request;
    console.log(name);
    console.log(`Call :: ${call.getPeer()} | ${call.getPath()}`);
    const service = new HelloService();
    callback(null, { message: service.sayHello(name) });
  }
}
