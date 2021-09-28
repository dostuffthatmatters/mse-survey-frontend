#!/bin/bash

export VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
yarn build

docker build -t gcr.io/fastsurvey-infrastructure/frontend .
docker push gcr.io/fastsurvey-infrastructure/frontend:latest

# https://codelabs.developers.google.com/codelabs/cloud-run-deploy/index.html
gcloud run deploy frontend \
    --image=gcr.io/fastsurvey-infrastructure/frontend:latest \
    --platform managed \
    --no-traffic \
    --tag "commit-$VITE_COMMIT_SHA"
