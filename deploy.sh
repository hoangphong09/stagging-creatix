#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define variables
PROJECT_ID="magic-eraser-a728d"

# Trigger Google Cloud Build
echo "Submitting build to Google Cloud Build..."
gcloud builds submit --config cloudbuild.yaml . --project="$PROJECT_ID"

echo "Cloud Build process initiated. Check Google Cloud Console for progress."