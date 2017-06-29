"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var suite = require("mocha").suite;
var test = require("mocha").test;

suite("app generator", () =>
{
	let appGeneratorPath = path.join(__dirname, "../generators/app");
	test("generates FlexJS app and initial view in src", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "No configuration file"
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp.mxml",
					"src/MyView.mxml"
				]);
				assert.noFile(
				[
					"asconfig.json",
					"MyApp-config.xml"
				]);
				assert.fileContent("src/MyApp.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:Application xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\"\n" +
						"\txmlns:local=\"*\">\n" +
						"\t<js:initialView>\n" + 
							"\t\t<local:MyView/>\n" +
						"\t</js:initialView>\n" +
					"</js:Application>");
				assert.fileContent("src/MyView.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:View xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\">\n" +
						"\n" + 
						"\t<js:Label text=\"Hello Apache FlexJS!\" />\n" + 
						"\n" +
					"</js:View>");
			});
	});
	test("generates initial view with package in sub-directory of src", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "com.example.MyView",
				config: "No configuration file"
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp.mxml",
					"src/com/example/MyView.mxml"
				]);
				assert.noFile(
				[
					"asconfig.json",
					"MyApp-config.xml"
				]);
				assert.fileContent("src/MyApp.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:Application xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\"\n" +
						"\txmlns:local=\"com.example.*\">\n" +
						"\t<js:initialView>\n" + 
							"\t\t<local:MyView/>\n" +
						"\t</js:initialView>\n" +
					"</js:Application>");
				assert.fileContent("src/com/example/MyView.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:View xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\">\n" +
						"\n" + 
						"\t<js:Label text=\"Hello Apache FlexJS!\" />\n" + 
						"\n" +
					"</js:View>");
			});
	});
	test("generates asconfig.json in project root", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "asconfig.json"
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp.mxml",
					"src/MyView.mxml",
					"asconfig.json"
				]);
				assert.noFile(
				[
					"MyApp-config.xml"
				]);
			});
	});
	test("generates asconfig.json with -targets=JSFlex", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "asconfig.json",
				targets: ["JSFlex"]
			}).then(function()
			{
				assert.file(
				[
					"asconfig.json"
				]);
				assert.jsonFileContent("asconfig.json",
				{
					"compilerOptions": {
						"targets": ["JSFlex"]
					},
					"files": [
						"src/MyApp.mxml"
					]
				});
			});
	});
	test("generates asconfig.json with -targets=SWF", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "asconfig.json",
				targets: ["SWF"]
			}).then(function()
			{
				assert.file(
				[
					"asconfig.json"
				]);
				assert.jsonFileContent("asconfig.json",
				{
					"compilerOptions": {
						"targets": ["SWF"]
					},
					"files": [
						"src/MyApp.mxml"
					]
				});
			});
	});
	test("generates asconfig.json with -targets=JSFlex,SWF", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "asconfig.json",
				targets: ["JSFlex", "SWF"]
			}).then(function()
			{
				assert.file(
				[
					"asconfig.json"
				]);
				assert.jsonFileContent("asconfig.json",
				{
					"compilerOptions": {
						"targets": ["JSFlex", "SWF"]
					},
					"files": [
						"src/MyApp.mxml"
					]
				});
			});
	});
	test("generates *-config.xml in project root", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "App-config.xml"
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp.mxml",
					"src/MyView.mxml",
					"src/MyApp-config.xml"
				]);
				assert.noFile(
				[
					"asconfig.json"
				]);
			});
	});
	test("generates *-config.xml with -targets=JSFlex", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "App-config.xml",
				targets: ["JSFlex"]
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp-config.xml"
				]);
				assert.fileContent("src/MyApp-config.xml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<flex-config>\n" +
						"\t<compiler>\n" +
							"\t\t<targets>\n" +
								"\t\t\t<target>JSFlex</target>\n" +
							"\t\t</targets>\n" +
						"\t</compiler>\n" +
					"</flex-config>");
			});
	});
	test("generates *-config.xml with -targets=SWF", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "App-config.xml",
				targets: ["SWF"]
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp-config.xml"
				]);
				assert.fileContent("src/MyApp-config.xml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<flex-config>\n" +
						"\t<compiler>\n" +
							"\t\t<targets>\n" +
								"\t\t\t<target>SWF</target>\n" +
							"\t\t</targets>\n" +
						"\t</compiler>\n" +
					"</flex-config>");
			});
	});
	test("generates *-config.xml with -targets=JSFlex,SWF", function()
	{
		return helpers
			.run(appGeneratorPath)
			.withPrompts(
			{
				name: "MyApp",
				initialViewName: "MyView",
				config: "App-config.xml",
				targets: ["JSFlex", "SWF"]
			}).then(function()
			{
				assert.file(
				[
					"src/MyApp-config.xml"
				]);
				assert.fileContent("src/MyApp-config.xml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<flex-config>\n" +
						"\t<compiler>\n" +
							"\t\t<targets>\n" +
								"\t\t\t<target>JSFlex</target>\n" +
								"\t\t\t<target>SWF</target>\n" +
							"\t\t</targets>\n" +
						"\t</compiler>\n" +
					"</flex-config>");
			});
	});
});

suite("class generator", () =>
{
	let classGeneratorPath = path.join(__dirname, "../generators/class");
	test("generates class in src", function()
	{
		return helpers
			.run(classGeneratorPath)
			.withPrompts(
			{
				name: "MyClass"
			}).then(function()
			{
				assert.file(
				[
					"src/MyClass.as"
				]);
				assert.fileContent("src/MyClass.as",
					"package\n" +
					"{\n" +
						"\tpublic class MyClass\n" +
						"\t{\n" +
							"\t\tpublic function MyClass()\n" +
							"\t\t{\n" +
							"\t\t\t\n" +
							"\t\t}\n" +
						"\t}\n" +
					"}");
			});
	});
	test("generates class with package in sub-directory of src", function()
	{
		return helpers
			.run(classGeneratorPath)
			.withPrompts(
			{
				name: "com.example.MyClassInPackage"
			}).then(function()
			{
				assert.file(
				[
					"src/com/example/MyClassInPackage.as"
				]);
				assert.fileContent("src/com/example/MyClassInPackage.as",
					"package com.example\n" +
					"{\n" +
						"\tpublic class MyClassInPackage\n" +
						"\t{\n" +
							"\t\tpublic function MyClassInPackage()\n" +
							"\t\t{\n" +
							"\t\t\t\n" +
							"\t\t}\n" +
						"\t}\n" +
					"}");
			});
	});
});

suite("interface generator", () =>
{
	let interfaceGeneratorPath = path.join(__dirname, "../generators/interface");
	test("generates interface in src", function()
	{
		return helpers
			.run(interfaceGeneratorPath)
			.withPrompts(
			{
				name: "IMyInterface"
			}).then(function()
			{
				assert.file(
				[
					"src/IMyInterface.as"
				]);
				assert.fileContent("src/IMyInterface.as",
					"package\n" +
					"{\n" +
						"\tpublic interface IMyInterface\n" +
						"\t{\n" +
							"\t\t\n" +
						"\t}\n" +
					"}");
			});
	});
	test("generates interface with package in sub-directory of src", function()
	{
		return helpers
			.run(interfaceGeneratorPath)
			.withPrompts(
			{
				name: "com.example.IMyInterfaceInPackage"
			}).then(function()
			{
				assert.file(
				[
					"src/com/example/IMyInterfaceInPackage.as"
				]);
				assert.fileContent("src/com/example/IMyInterfaceInPackage.as",
					"package com.example\n" +
					"{\n" +
						"\tpublic interface IMyInterfaceInPackage\n" +
						"\t{\n" +
							"\t\t\n" +
						"\t}\n" +
					"}");
			});
	});
});

suite("mxml component generator", () =>
{
	let mxmlGeneratorPath = path.join(__dirname, "../generators/mxml");
	test("generates MXML component in src", function()
	{
		return helpers
			.run(mxmlGeneratorPath)
			.withPrompts(
			{
				name: "MyComponent",
				superName: "Group"
			}).then(function()
			{
				assert.file(
				[
					"src/MyComponent.mxml"
				]);
				assert.fileContent("src/MyComponent.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:Group xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\">\n" +
					"</js:Group>");
			});
	});
	test("generates MXML Component with package in sub-directory of src", function()
	{
		return helpers
			.run(mxmlGeneratorPath)
			.withPrompts(
			{
				name: "com.example.MyComponent",
				superName: "Group"
			}).then(function()
			{
				assert.file(
				[
					"src/com/example/MyComponent.mxml"
				]);
				assert.fileContent("src/com/example/MyComponent.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:Group xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\">\n" +
					"</js:Group>");
			});
	});
	test("generates MXML component with custom super class", function()
	{
		return helpers
			.run(mxmlGeneratorPath)
			.withPrompts(
			{
				name: "MyComponent",
				superName: "__other",
				alternateSuperName: "MySuperComponent"
			}).then(function()
			{
				assert.file(
				[
					"src/MyComponent.mxml"
				]);
				assert.fileContent("src/MyComponent.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<js:MySuperComponent xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\">\n" +
					"</js:MySuperComponent>");
			});
	});
	test("generates MXML component with custom super class and namespace", function()
	{
		return helpers
			.run(mxmlGeneratorPath)
			.withPrompts(
			{
				name: "MyComponent",
				superName: "__other",
				alternateSuperName: "MySuperComponent",
				namespace: "com.example.*"
			}).then(function()
			{
				assert.file(
				[
					"src/MyComponent.mxml"
				]);
				assert.fileContent("src/MyComponent.mxml",
					"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
					"<ns1:MySuperComponent xmlns:fx=\"http://ns.adobe.com/mxml/2009\"\n" +
						"\txmlns:js=\"library://ns.apache.org/flexjs/express\"\n" +
						"\txmlns:ns1=\"com.example.*\">\n" +
					"</ns1:MySuperComponent>");
			});
	});
});