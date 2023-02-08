import { join } from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { PdfCreatorServiceClient } from "src/interfaces/pdf_creator/PdfCreatorService";
import { ProtoGrpcType } from "src/interfaces/pdf";
import { Results__Output } from "src/interfaces/pdf_creator/Results";

export class GrpcClient {
  private _proto!: ProtoGrpcType;
  private _package!: protoLoader.PackageDefinition;
  private _client: PdfCreatorServiceClient;
  constructor() {
    this._package = protoLoader.loadSync(
      join(process.cwd(), `src/config/proto/pdf.proto`)
    );

    this._proto = grpc.loadPackageDefinition(
      this._package
    ) as unknown as ProtoGrpcType;

    this._client = new this._proto.pdf_creator.PdfCreatorService(
      "localhost:50051",
      grpc.credentials.createInsecure()
    );
  }

  async createPdf({ template, body }: { template: string; body: any }) {
    return new Promise<Results__Output | undefined>((resolve, reject) => {
      this._client.CreatePdf(
        { template, body },
        (error?: grpc.ServiceError | null, result?: Results__Output) => {
          if (error) {
            console.error(error.message);
            reject(error.message);
          } else {
            return resolve(result);
          }
        }
      );
    });
  }
}
