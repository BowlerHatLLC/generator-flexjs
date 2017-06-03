// Type definitions for yeoman-generator 1.0
// Project:https://github.com/yeoman/generator
// Definitions by:Kentaro Okuno <http://github.com/armorik83>, Jay Anslow <http://github.com/janslow>
// Definitions:https://github.com/DefinitelyTyped/DefinitelyTyped
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e50f8878a5aa5d57200e186da47ceaaa288aaf95/types/yeoman-generator/index.d.ts
package
{
	import events.EventEmitter;

	[JSModule(name="yeoman-generator")]
	/**
	 * @externs
	 *
	 * Note:starting the class name with a lower case letter is required by
	 * the FlexJS compiler for Node.js modules that export a default class. In
	 * the generated code, the require call looks like this:
	 * var yeomanGenerator = require("yeoman-generator");
	 */
	public class yeomanGenerator extends EventEmitter
	{
		public static function extend(protoProps:* = undefined, staticProps:* = undefined):yeomanGenerator
		{
			return null
		}

		public function yeomanGenerator(args:Object, options:Object)
		{

		}

		public var env:Object;
		public var args:Object;
		public var resolved:String;
		public var description:String;
		public var appname:String;
		public var config:Object;
		public var options:String;


		public function get fs():FS
		{
			return null;
		}

		public function log(message:String = null, context:* = undefined):void {}

		public function argument(name:String, config:Object):yeomanGenerator
		{
			return null;
		}
		public function composeWith(namespace:String, options:Object, settings:Object = null):yeomanGenerator
		{
			return null;
		}
		public function destinationPath(...path:Array):String
		{
			return null;
		}
		public function destinationRoot(rootPath:String = null):String
		{
			return null;
		}
		public function determineAppname():String
		{
			return null;
		}
		public function option(name:String, config:Object):yeomanGenerator
		{
			return null;
		}
		public function prompt(questions:Object):Object /*Promise<Answers>*/
		{
			return null;
		}
		public function registerTransformStream(stream:Object):yeomanGenerator
		{
			return null;
		}
		public function rootGeneratorName():String
		{
			return null;
		}
		public function rootGeneratorVersion():String
		{
			return null;
		}
		public function run(callback:Function = null):yeomanGenerator
		{
			return null;
		}
		public function sourceRoot(rootPath:String = null):String
		{
			return null;
		}
		public function templatePath(...path:Array):String
		{
			return null;
		}

		// actions/help mixin
		public function argumentsHelp():String
		{
			return null;
		}
		public function desc(description:String):yeomanGenerator
		{
			return null;
		}
		public function help():String
		{
			return null;
		}
		public function optionsHelp():String
		{
			return null;
		}
		public function usage():String
		{
			return null;
		}

		// actions/spawn_command mixin
		public function spawnCommand(command:String, args:Vector.<String>, opt:Object = null):*
		{
			return null;
		}
		public function spawnCommandSync(command:String, args:Vector.<String>, opt:Object = null):*
		{
			return null;
		}

		// actions/install mixin
		public function bowerInstall(component:Object, options:Object = null, callback:Function = null, spawnOptions:Object = null):yeomanGenerator
		{
			return null;
		}
		public function installDependencies(options:Object = null):yeomanGenerator
		{
			return null;
		}
		public function npmInstall(pkgs:Object = null, options:Object = null, callback:Function = null, spawnOptions:Object = null):yeomanGenerator
		{
			return null;
		}
		public function runInstall(installer:String, paths:Object = null, options:Object = null, callback:Function = null, spawnOptions:Object = null):yeomanGenerator
		{
			return null;
		}
		public function yarnInstall(pkgs:Object = null, options:Object = null, callback:Function = null, spawnOptions:Object = null):yeomanGenerator
		{
			return null;
		}

		// actions/user mixin
		public function get user():User
		{
			return null;
		}
	}
}

interface Git
{
	function email():String;
	function name():String;
}
interface Github
{
	function username():String;
}

interface User
{
	function get git():Git;
	function get github():Github;
}

interface FS
{
	function read(filepath:String, options:Object = null):String;
	function readJSON(filepath:String, defaults:Object = null):*;
	function write(filepath:String, contents:String):void;
	function writeJSON(filepath:String, contents:Object, replacer:Function = null, space:Number = NaN):void;
	function extendJSON(filepath:String, contents:Object, replacer:Function = null, space:Number = NaN):void;
	function delete(filepath:String, options:Object = null):void;
	function copy(from:String, to:String, options:Object = null):void;
	function copyTpl(from:String, to:String, context:Object, templateOptions:Object = null, copyOptions:Object = null):void;
	function move(from:String, to:String, options:Object = null):void;
	function exists(filepath:String):Boolean;
	function commit(...rest:Array):void;
}