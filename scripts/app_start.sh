#!/bin/bash
cd //home/ec2-user/server
pm2 start ./node_modules/react-scripts/scripts/start.js --name "potltest" --watch
pm2 startup
pm2 save
pm2 restart all