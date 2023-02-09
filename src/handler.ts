import {
  UntypedHandleCall,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import { Params__Output } from "src/interfaces/pdf_creator/Params";
import { PdfCreatorServiceHandlers } from "src/interfaces/pdf_creator/PdfCreatorService";
import { Results } from "src/interfaces/pdf_creator/Results";
import { PdfBucketProvider } from "./services/pdf.service";

export class PdfService implements PdfCreatorServiceHandlers {
  [name: string]: UntypedHandleCall;
  CreatePdf(
    call: ServerUnaryCall<Params__Output, Results>,
    callback: sendUnaryData<Results>
  ) {
    const { body, template } = call.request;
    console.log(body, template);
    console.log(`Call :: ${call.getPeer()} | ${call.getPath()}`);
    new PdfBucketProvider()
      .createPDFByTemplate({
        bucket: process.env.BUCKET_NAME,
        key: template,
        body,
        ext: "hbs",
      })
      .then(({ base64 }) => {
        callback(null, { base64 });
      })
      .catch((err) => {
        callback(err, null);
      });
  }
}
