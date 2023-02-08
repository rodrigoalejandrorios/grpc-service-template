#!/bin/bash

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/interfaces/ src/proto/*.proto