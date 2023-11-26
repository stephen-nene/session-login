#!/bin/bash

# Step 1: Navigate to the client directory
echo "Step 1: Navigating to the client directory..."
cd client

# Step 2: Building the client application
echo "Step 2: Building the client application..."
npm run build

# Step 3: Returning to the main project directory
echo "Step 3: Returning to the main project directory..."
cd ..

# Step 4: Copying assets from the client's dist directory to the API's public directory
echo "Step 4: Copying assets from the client's dist directory to the API's public directory..."
cp -r client/dist/* backend/public/

# Completion: Script finished!
echo "Script completed. Assets have been copied to the API's public directory."


# write a script that can run git add , git commit git push and fetch first
# first ask if you used git flow or not and initiate a git flow else
# if terminal goes into hybernation do cmatrix
