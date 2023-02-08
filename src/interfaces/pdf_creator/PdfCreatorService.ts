// Original file: src/proto/pdf.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Params as _pdf_creator_Params, Params__Output as _pdf_creator_Params__Output } from '../pdf_creator/Params';
import type { Results as _pdf_creator_Results, Results__Output as _pdf_creator_Results__Output } from '../pdf_creator/Results';

export interface PdfCreatorServiceClient extends grpc.Client {
  CreatePdf(argument: _pdf_creator_Params, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  CreatePdf(argument: _pdf_creator_Params, metadata: grpc.Metadata, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  CreatePdf(argument: _pdf_creator_Params, options: grpc.CallOptions, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  CreatePdf(argument: _pdf_creator_Params, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  createPdf(argument: _pdf_creator_Params, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  createPdf(argument: _pdf_creator_Params, metadata: grpc.Metadata, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  createPdf(argument: _pdf_creator_Params, options: grpc.CallOptions, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  createPdf(argument: _pdf_creator_Params, callback: grpc.requestCallback<_pdf_creator_Results__Output>): grpc.ClientUnaryCall;
  
}

export interface PdfCreatorServiceHandlers extends grpc.UntypedServiceImplementation {
  CreatePdf: grpc.handleUnaryCall<_pdf_creator_Params__Output, _pdf_creator_Results>;
  
}

export interface PdfCreatorServiceDefinition extends grpc.ServiceDefinition {
  CreatePdf: MethodDefinition<_pdf_creator_Params, _pdf_creator_Results, _pdf_creator_Params__Output, _pdf_creator_Results__Output>
}
