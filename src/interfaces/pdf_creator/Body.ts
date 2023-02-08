// Original file: src/proto/pdf.proto

import type { Long } from '@grpc/proto-loader';

export interface Body {
  'amount'?: (number | string | Long);
  'identity'?: (string);
  'name'?: (string);
}

export interface Body__Output {
  'amount'?: (Long);
  'identity'?: (string);
  'name'?: (string);
}
