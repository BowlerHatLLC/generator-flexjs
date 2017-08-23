# generator-flexjs

*Note: This project is no longer under active development.*

A generator for [Yeoman](http://yeoman.io/) to create a new Apache FlexJS project. Yeoman may be [run from the command line](http://yeoman.io/learning/) or even using [an extension in Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=samverschueren.yo).

## Installation

Requires [Node.js](https://nodejs.org/) and [Yeoman](http://yeoman.io/).

```
npm install -g yo
npm install -g generator-flexjs
```

## Usage

To create a new Apache FlexJS project, start by creating a new, empty directory. Then, run the `yo` command inside your new project directory:

```
mkdir MyProject
cd MyProject
yo flexjs
```

You'll be asked few quick questions, and then your new project will be generated.

To create a new ActionScript class, you can run the following command from the root of your project:

```
yo flexjs:class
```

It will create a your class in the `src` directory (or in the appropriate sub-directory, if the class is in a package).

Similarly, you can create a new ActionScript interface:

```
yo flexjs:interface
```

Finally, you can create a new MXML component:

```
yo flexjs:mxml
```

## Made with Apache FlexJS

The source code for the `generator-flexjs` Yeoman Generator is written in ActionScript. That's right, it's a Node.js module — written in ActionScript and compiled with Apache FlexJS. Pretty cool, right?

---

Special thanks to the following sponsors for their generous support:

* [YETi CGI](http://yeticgi.com/)

* [Moonshine IDE](http://moonshine-ide.com/)