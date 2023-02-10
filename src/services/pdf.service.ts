import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import * as hbs from "handlebars";
import puppeteer from "puppeteer";
import {
  TemplateToObject,
  TemplateUsage,
} from "./interfaces/pdf.params.interface";

export class PdfService {
  private async getTemplate({ bucket, key, ext }: TemplateToObject) {
    try {
      //  const bk = process.env.S3_PDF_BUCKET;
      const s3 = new S3Client({ region: process.env.REGION });
      const data = await s3.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: `${key}.${ext}`,
        })
      );

      const template = await data.Body.transformToString();

      return template;
    } catch (error) {
      throw new Error(error);
    }
  }

  private generateBase64(blob: Buffer) {
    try {
      const b64 = blob.toString("base64");
      const json = {
        base64: b64,
      };
      return json;
    } catch (e) {
      console.error(e);
    }
  }

  public async createPDFByTemplate({ bucket, key, ext, body }: TemplateUsage) {
    const temp = await this.getTemplate({ bucket, key, ext });

    const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <link href="css/base.css" rel="stylesheet">
          </head>
          <body>
            ${temp}
          </body>
        </html>    
      `;

    let htmlResult = hbs.compile(html);

    let hbResult = htmlResult({ ...body });

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setContent(hbResult);
    const pdf = await page.pdf({
      format: "a4",
      printBackground: true,
    });
    const b64 = this.generateBase64(pdf);
    return b64;
  }
}
