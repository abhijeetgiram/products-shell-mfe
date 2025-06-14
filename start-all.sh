#!/bin/bash

# Function to kill background processes on exit
cleanup() {
  echo "Stopping applications..."
  kill $PRODUCTS_SHELL_MFE $PRODUCTS_REMOTE_MFE $ORDERS_REMOTE
  exit 0
}

# Trap EXIT signal to run the cleanup function
trap cleanup EXIT

# Navigate to Products Shell MFE and start it in the background
npm install &
# npm run start &
# npm run dev &
npm run preview:mfe &
PRODUCTS_SHELL_MFE=$!

# Navigate to Products Remote MFE and start it in the background
cd ../products-remote-mfe
npm install &
# npm run start &
npm run preview:mfe &
PRODUCTS_REMOTE_MFE=$!

# Navigate to Orders Remote MFE and start it in the background
cd ../orders-remote-mfe
npm install &
# npm run start &
npm run preview:mfe
ORDERS_REMOTE=$!

# Wait for all background processes to finish
wait $PRODUCTS_REMOTE_MFE
wait $ORDERS_REMOTE_MFE
wait $PRODUCTS_SHELL_MFE

# Cleanup will be called automatically on exit
echo "All applications stopped."
