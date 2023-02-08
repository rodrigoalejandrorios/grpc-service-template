// Original file: src/proto/pdf.proto

import type { Body as _pdf_creator_Body, Body__Output as _pdf_creator_Body__Output } from '../pdf_creator/Body';

export interface Params {
  'template'?: (string);
  'body'?: (_pdf_creator_Body | null);
}

export interface Params__Output {
  'template'?: (string);
  'body'?: (_pdf_creator_Body__Output);
}
