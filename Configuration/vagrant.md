---
todo : Host the application on Ubuntu VM using Vagrant
---

Vagrant is a tool for building and managing virtual machine environments in a single workflow.  

```
mkdir vagrant_node
cd vagrant_node
vagrant init hashicorp/bionic64
```

Vagrantfile
```
// forwarding the port
config.vm.network "forwarded_port", guest: 1337, host: 8080
// Share the data
config.vm.synced_folder "../bhavya/Laptop-Store-Project", "/laptop_store_app"
// Shell script
 config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nodejs
    echo '''
    [Unit]
    Description=My Laptop Server Application
    ConditionPathExists=/myapp/index.js

    [Service]
    WorkingDirectory=/myapp
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
 SHELL
end
```

This application will be invoked automatically in VM as a service, whenever the VM is restarted.

