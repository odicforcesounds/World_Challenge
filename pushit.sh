#!/bin/bash
# IF you are using another domain to push your code... 
git add . 
git commit -m "Make it Right for a better Ride"
echo "all changes added to commit state"
pkill -x ssh-agent 
sleep 1
echo "ssh-agents killed"
eval $(ssh-agent)
sleep 1 
echo "ssh-agent inicialized"
ssh-add ~/.ssh/thinkpad_github
sleep 1
echo "ssh-key-id added"
git push git@github.com:odicforcesounds/stats
echo "Push completed"
sleep 3
clear
