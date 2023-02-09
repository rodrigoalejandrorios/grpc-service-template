import * as grpc from "@grpc/grpc-js";
import * as dotenv from "dotenv";
import * as protoLoader from "@grpc/proto-loader";
import { join } from "path";
import { ProtoGrpcType } from "./interfaces/pdf";
import { PdfCreatorServiceHandlers } from "./interfaces/pdf_creator/PdfCreatorService";
import { PdfService } from "./handler"

dotenv.config();

class GrpcInitialize {
  private _Server!: grpc.Server;
  private _proto!: ProtoGrpcType;
  private _package!: protoLoader.PackageDefinition;
  private _service!: ProtoGrpcType["pdf_creator"];
  constructor() {
    this._package = protoLoader.loadSync(
      join(process.cwd(), `src/proto/pdf.proto`)
    );
    this._proto = grpc.loadPackageDefinition(
      this._package
    ) as unknown as ProtoGrpcType;

    this._service = this._proto.pdf_creator;

    this._Server = new grpc.Server();
  }

  grpcStart() {
    const grpsServicesDef = new PdfService();
    this._Server.addService(this._service.PdfCreatorService.service, {
      CreatePdf: grpsServicesDef.CreatePdf,
    } as PdfCreatorServiceHandlers);

    this._Server.bindAsync(
      "localhost:50051",
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
