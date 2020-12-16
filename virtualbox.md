---
todo : Host the application on Ubuntu VM
---

## Problem Statement

Host NodeJs application on Ubuntu Virtual Machine

## Approach

1. Install Ubuntu Virtual Machine
2. Install Node run time
3. Create a service
4. Restart the machine and verify

## Steps

### Installing VM
1. Install virtual box
2. Create a new ubuntu Virtual Machine
Hard disk file types:  
* VDI - VirtualBox Disk image
  This format is used when we create new VM with a new disk.
* VHD - Virtual hard disk
  This format is used to store the complete contents of hard drive in a disk image file format.  
* VMDK - Virtual Machine Disk
  This format describes containers for virtual hard disk drives to be used in VM.
3. Download ubuntu CD and link that to the VM.
4. Install Ubuntu on VM
5. Run the following commands in terminal


```shell
sudo su
apt -y update && apt -y install nodejs npm git curl openssh-server
nodejs -v
npm -v
git --version
mkdir dev
cd dev
git clone https://github.com/BhavyaSree/Laptop-Store-Project.git
systemctl status sshd.service
ip addr
```

In host machine
```
ssh username@ip
sudo su

echo '''
[Unit]
Description=My Laptop Server Application
ConditionPathExists=/home/bhavya/dev/Laptop-Store-Project/index.js

[Service]
WorkingDirectory=/home/bhavya/dev/Laptop-Store-Project
ExecStart=node index.js
ExecReload=killall node && node index.js
KillMode=process
Restart=on-failure
RestartPreventExitStatus=255
Type=forking

[Install]
WantedBy=multi-user.target
Alias=myapp.service
''' > /etc/systemd/system/my.service

systemctl daemon-reload
systemctl status my.service
systemctl enable my.service
systemctl is-enabled my.service
systemctl start my.service
systemctl status my.service
```

This application will be invoked automatically in VM as a service, whenever the VM is restarted.