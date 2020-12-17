#!/bin/bash
apt-get update
apt-get install -y nodejs
rm -f /etc/systemd/system/myapp.service
cp /app/scripts/myapp.service  /etc/systemd/system/myapp.service
chmod 644 /etc/systemd/system/myapp.service
systemctl daemon-reload
systemctl enable --now myapp.service
systemctl is-enabled myapp.service
systemctl status myapp.service
# systemctl start myapp.service

sleep 10
curl -v http://localhost:1337