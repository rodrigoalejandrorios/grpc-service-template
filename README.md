# Node.JS and gRPC PDF Generator (Server)

### Technologies
- gRPC
- NodeJS
- AWS and S3 service
- Puppeteer
- Handlebars

## How to initialize the microservice

1) Install dependencies with `npm install`
2) Set the environment variables as follows:
```txt
AWS_ACCESS_KEY_ID=your_variable
AWS_SECRET_ACCESS_KEY=your_variable
BUCKET_NAME=your_variable
REGION=your_variable
```
3) Initialize the service with the following command `npm run start:server`

**The service will be initialized by default with the port: 50051**

## Optional

If you need to run a modification to the `pdf.proto` (path file: `src/proto/pdf.proto` ) file you must run the `npm run proto:build` command which will initialize the interface creation command.

## Client connect example

In `src/utils/client.exaple.ts` you will find an example of how to implement the client to connect with the service.
If you have a REST API that will act as a client, you should copy the same ``*.proto`` file, execute the same command that is in the `proto-gen.sh` file and connect like this in the example.

