import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PdfCreatorServiceClient as _pdf_creator_PdfCreatorServiceClient, PdfCreatorServiceDefinition as _pdf_creator_PdfCreatorServiceDefinition } from './pdf_creator/PdfCreatorService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pdf_creator: {
    Body: MessageTypeDefinition
    Params: MessageTypeDefinition
    PdfCreatorService: SubtypeConstructor<typeof grpc.Client, _pdf_creator_PdfCreatorServiceClient> & { service: _pdf_creator_PdfCreatorServiceDefinition }
    Results: MessageTypeDefinition
  }
}

