import * as grpc from "@grpc/grpc-js";
import * as dotenv from "dotenv";
import {
  InyectServiceGrpc,
  definePackage,
} from "./service.register";
import { ServiceRegister } from "./libs/service.register.util";

dotenv.config();

class GrpcInitialize {
  private _Server!: grpc.Server;
  constructor() {
    this._Server = new grpc.Server();
  }

  grpcStart() {
    InyectServiceGrpc.forEach((inyect) => {
      const { protoFileName, namePackage } = definePackage;
      const { declareHandler, services } = new ServiceRegister({
        hanlder: inyect.hanlder,
        namePackage,
        protoName: protoFileName,
      }).inyectServices(inyect.nameService);
      this._Server.addService(declareHandler, services);
    });

    this._Server.bindAsync(
      `localhost:${process.env.GRPC_PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (err: Error | null, bindPort: number) => {
        if (err) {
          throw err;
        }
        console.log("Server gRPC initialized on PORT :: " + bindPort);
        this._Server.start();
      }
    );
  }
}

new GrpcInitialize().grpcStart();
