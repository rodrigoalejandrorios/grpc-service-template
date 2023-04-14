import * as protoLoader from "@grpc/proto-loader";
import { join } from "path";
import * as grpc from "@grpc/grpc-js";

export class ServiceRegister<T> {
  public handler: { new (): any };
  private _proto!: T;
  private _package!: protoLoader.PackageDefinition;
  private _service!: T[keyof T];
  constructor({
    protoName,
    namePackage,
    handler,
  }: {
    protoName: string;
    namePackage: keyof T;
    handler: { new (): any };
  }) {
    this._package = protoLoader.loadSync(
      join(process.cwd(), `src/proto/${protoName}`)
    );
    this.handler = handler;
    this._proto = grpc.loadPackageDefinition(this._package) as unknown as T;
    this._service = this._proto[namePackage];
  }

  public inyectServices(nameService: string) {
    const services = new this.handler();
    return {
      declareHandler: this._service[nameService as any].service,
      services: services,
    };
  }
}


export interface InyectServiceProps {
  handler: { new (): any };
  nameService: string;
}

export interface DefinePackageProps<T> {
    namePackage:  keyof T;
    protoFileName: string
}