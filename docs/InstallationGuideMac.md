# What You Will Be Installing - Mac OSX

1. Xcode
2. Homebrew
3. Git
4. Node.js and NPM Packages
5. Visual Studio Code (Recommended) and Plugins
6. Chrome (Recommended) or Firefox
7. Slack

We are going to install software over the command line, so before starting, open your terminal window. (You can open it by pressing `command+space` and searching for _terminal_).

## Xcode

Xcode can be found in the App Store. It will take around 50 minutes to install, so please intall ASAP.

## Homebrew

[Homebrew](https://brew.sh/) is a package manager for Mac, meaning that it will help make installing and managing a lot of command line software easier. We will be installing Node.js with Homebrew to avoid permission issues.

If you already have Homebrew installed or if you are not sure whether you have it installed, type `brew -v` in your terminal. If you see a response like _Homebrew 1.9.2_, then you have it intalled. Update homebrew with `brew update` and then you can skip ahead to the next section. If you get a _command not found_ error, you will need to install Homebrew.

To install Homebrew, type this in your terminal:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Hit enter when the installation prompts you to hit enter. At some point, you may be requested to enter your password. The password is the same password you use to login with your computer.

Once installed, type `brew -v` to confirm that everything worked. As a safe measure, type `brew doctor`. You should see _Your system is ready to brew_.

Type `echo $PATH`. Make sure that _/usr/local/bin_ is somewhere in the response. If it is not, then type:

```bash
export PATH="/usr/local/bin:$PATH"
```

## Git

Git is version control software. It is used for sharing code, combining team members' code and managing different versions of your code.

If you are not sure whether you have it installed, type `git --version` in your terminal. If you see output like this - _git version 2.20.1_ - then congratulations! You already have git installed and you can skip ahead to the next section.

To install git, type this in your terminal:

```bash
brew install git
```

When it's finished, type `git --version` to confirm that it has installed.

## Node.js and NPM Packages

Node.js is a JavaScript runtime engine. Basically, it allows you to run JavaScript programs outside of the browser.

You will need to have the latest LTS version of Node installed as of February 4, 2019 (10.15.1). If you already have Node.js installed, type `node -v`. If you do not have the latest version, see https://flaviocopes.com/how-to-update-node/ for instructions on how to upgrade.

You should also update NPM. You can update it with:

```bash
npm install -g npm@latest
```

If you do not have Node.js installed, type this is your terminal:

```bash
brew install node@10
```

When it’s finished, type `node -v` to confirm that it has installed.

### ESLint

ESLint is a linter, meaning that it will point out potential errors while you are typing in a code editor like Visual Studio Code, Atom or Sublime.

To install ESLint and its React plugin, type:

```bash
npm install -g eslint
npm install -g eslint-plugin-react
```

When it’s finished, type `eslint -v` in your terminal to confirm it has installed.

## Visual Studio Code (Recommended) and Plugins

Visual Studio Code is an IDE, which is an intelligent code editor. We will be teaching with Visual Studio Code and highly recommend that you use it too. If you are experienced with programming and command line, and you believe that you can translate whatever we teach you in Visual Studio Code to your editor of choice, you may opt for another editor, but we will not be able to help you if problems arise.

To install, go to https://code.visualstudio.com and click on _Download for Mac_.

When it finishes downloading, double click on the downloaded ZIP file and move Visual Studio Code from your Downloads folder to your Applications folder. You many need to enter your password.

Open Visual Studio Code.

### Adding Visual Studio Code to Your Path Variable

You should configure your computer so that you can open Visual Studio Code via the terminal. Press `command+shift+p`, search for _shell command_ and click on _Shell Command: Install 'code' command in PATH_.

![](install-screens/vscode-mac-path.png)

### ESLint Extension

Open the Extensions tab on the left, search for _ESLint_ and install _ESLint_.

![](install-screens/vscode-eslint.png)

Once its installed, click on _Reload_.

![](install-screens/vscode-eslint-reload.png)

### Quokka.js

[Quokka.js](https://quokkajs.com/docs/?editor=vsc) is a sandbox that lets you play with JavaScript inside Visual Studio Code and other popular code editors. Search for _Quokka_ in the Extensions tab on the left and install _Quokka.js_. Once its installed, click on _Reload_.

If Quokka prompts you to go Pro, select _'Community' features only_.

![](install-screens/vscode-quokka-prompt.png)

### Prettier Extension (Optional)

Prettier automatically formats your code and you can configure it to format your code whenever you save a file. Installing this is optional for now but we will require it for the final project.

If you would like to use prettier, search for _Prettier_ in the Extensions tab on the left and install _Prettier - Code formatter_. Once its installed, click on _Reload_.

You can now adjust Visual Studio's settings so that it will format on save and will play nicely with Prettier's defaults. Press `command+,` and click on the `{}` icon in the top right.

![](install-screens/settings-icon.png)

In the right-hand panel underneath where it says "USER SETTINGS", append the options to the list and then save. Do not overwrite any settings that you already have.

```json
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
```

![](install-screens/prettier-settings.png)

## Chrome (Recommended) or Firefox

You are required to use Chrome or Firefox because the React and Redux extensions for debugging your code are only available for these browsers. We recommend Chrome because we will be demostrating Chrome's tools in class, but you are free to download any of following:

- [Chrome](https://www.google.com/chrome/)
- [FirefoxDeveloperEdition](https://www.mozilla.org/en-US/firefox/developer/)
- [Firefox](https://www.mozilla.org/en-US/firefox/)

## Slack

Before installing Slack, please accept the invite to AlbanyCanCode's channel (_albanycancode_). You should have received an email before class.

Use can use the web or desktop version. The desktop version can be found in the App Store.
