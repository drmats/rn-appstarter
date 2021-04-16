# node.js setup

Assuming rh-based linux.

<br />




* install from your system repositories:
    ```
    sudo dnf module info nodejs
    sudo dnf module reset nodejs
    sudo dnf module enable nodejs:14
    sudo dnf install nodejs
    ```

* alternatively install from [nodesource](https://node.dev/node-binary)
    - `/etc/yum.repos.d/nodesource.repo` contents:
        ```
        [nodesource]
        name=Node.js Packages for Fedora Linux $releasever - $basearch
        baseurl=https://rpm.nodesource.com/pub_14.x/fc/$releasever/$basearch
        failovermethod=priority
        enabled=1
        gpgcheck=1
        gpgkey=file:///etc/pki/rpm-gpg/NODESOURCE-GPG-SIGNING-KEY-EL

        [nodesource-source]
        name=Node.js for Fedora Linux $releasever - $basearch - Source
        baseurl=https://rpm.nodesource.com/pub_14.x/fc/$releasever/SRPMS
        failovermethod=priority
        enabled=0
        gpgkey=file:///etc/pki/rpm-gpg/NODESOURCE-GPG-SIGNING-KEY-EL
        gpgcheck=1
        ```
    - installation:
        ```
        sudo dnf install nodejs
        ```

* install and update node package managers:
    ```
    npm up -g npm
    npm i -g yarn
    npm i -g lerna
    ```
