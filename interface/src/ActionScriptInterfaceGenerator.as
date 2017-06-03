/*
Copyright 2017 Bowler Hat LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package
{
	public class ActionScriptInterfaceGenerator extends yeomanGenerator
	{
		public function ActionScriptInterfaceGenerator(args:Object, options:Object)
		{
			super(args, options);
			this.log(yosay(
				"Let's create an\n" + chalk.green("ActionScript interface")
			));
		}

		private var _nameResult:String;

		public function prompting():Object
		{
			return this.prompt(
			[
				{
					"name": "name",
					"message": "What is the name of the new interface, including its package?",
					"type": "input"
				}
			]).then(_private_onPromptsComplete);
		}

		public function writeIntreface():void
		{
			var splitInterfaceName:Array = this._nameResult.split(".");
			var pathWithPackage:String = splitInterfaceName.join("/");
			var baseInterfaceName:String = splitInterfaceName.pop();
			var packageName:String = null;
			if(splitInterfaceName.length > 0)
			{
				packageName = splitInterfaceName.join(".");
			}
			var outputPath:String = "src/" + pathWithPackage + ".as";
			var contents:String = this.fs.read(this.templatePath("NewInterface.as"));
			contents = contents.replace(/\$\{interface.name\}/g, baseInterfaceName);
			if(packageName !== null)
			{
				contents = contents.replace(/\$\{package.name\}/g, " " + packageName);
			}
			else
			{
				contents = contents.replace(/\$\{package.name\}/g, "");
			}
			this.fs.write(this.destinationPath(outputPath), contents);
		}

		public function _private_onPromptsComplete(answers:Object):void
		{
			this._nameResult = answers.name as String;
		}
	}
}