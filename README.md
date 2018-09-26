# atomOS Desktop Environment
![alt text](https://raw.githubusercontent.com/ruslang02/atomos/0.7-dev/PREVIEW.png)
**Tested on Electron 3.0.0-beta.13. Previous versions of Electron are not guaranteed to work with AtomOS 0.7.**

Latest version: 0.7 (build 157). [Download .iso (0.6)](https://github.com/ruslang02/atomos/releases).

Fully web-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with absolute Node.JS access.
There is also an operating system available based on this.

## Installation (for Linux)

Clone:
```
$ git clone https://github.com/ruslang02/atomos.git -b 0.7-dev
```

Firstly, you should have Node.JS and NPM installed (instructions for Ubuntu-based systems):
```
# apt install -y nodejs npm
```
Then you need Electron to work:
```
$ npm install -g electron
```
Install the libraries and launch:
```
$ cd atomos
atomos/$ npm update
atomos/$ npm start
```

## Extras
lightdm-webkit theme: https://github.com/ruslang02/atomos-lightdm-webkit-theme

## Changelog
Changelog is available [here](https://github.com/ruslang02/atomos/blob/master/CHANGELOG.md).

## Hacking
You can edit your desktop envionment in real-time, adding features and modifying the look and feel.
