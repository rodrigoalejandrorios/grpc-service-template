export interface PdfParams {
  template: string;
  body: Record<string, any>;
}

export interface TemplateToObject {
  bucket: string;
  key: string;
  ext: string;
}

export interface TemplateUsage {
  bucket: string;
  key: string;
  ext: string;
  body: Record<string, any>;
}
