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
	public class MXMLComponentGenerator extends yeomanGenerator
	{
		private static const SUPER_APPLICATION:String = "Application";
		private static const SUPER_CONTAINER:String = "Container";
		private static const SUPER_GROUP:String = "Group";
		private static const SUPER_ITEM_RENDERER:String = "MXMLItemRenderer";
		private static const SUPER_PANEL:String = "Panel";
		private static const SUPER_VIEW:String = "View";
		private static const SUPER_OTHER:String = "I'd like another component that isn't listed here...";
		private static const NAMESPACE_EXPRESS:String = "library://ns.apache.org/flexjs/express";

		public function MXMLComponentGenerator(args:Object, options:Object)
		{
			super(args, options);
			this.log(yosay(
				"Let's create an\n" + chalk.green("MXML component")
			));
		}

		private var _nameResult:String;
		private var _superNameResult:String;
		private var _alternateSuperNameResult:String;
		private var _namespaceResult:String;

		public function prompting():Object
		{
			return this.prompt(
			[
				{
					"name": "name",
					"message": "What is the name of the new MXML class, including its package? (for example, com.example.MyClass)",
					"type": "input"
				},
				{
					"name": "superName",
					"message": "Which component should be the superclass of the MXML component?",
					"type": "list",
					"choices":
					[
						SUPER_APPLICATION,
						SUPER_CONTAINER,
						SUPER_GROUP,
						SUPER_ITEM_RENDERER,
						SUPER_PANEL,
						SUPER_VIEW,
						SUPER_OTHER
					],
					"default": SUPER_VIEW
				},
				{
					"name": "alternateSuperName",
					"message": "What's the name of the superclass component?",
					"type": "input",
					"when": _private_whenSuperNameIsOther
				},
				{
					"name": "namespace",
					"message": "Which MXML namespace should be declared for the superclass component?",
					"type": "input",
					"default": NAMESPACE_EXPRESS,
					"when": _private_whenSuperNameIsOther
				}
			]).then(_private_onPromptsComplete);
		}

		public function writeComponent():void
		{
			var splitClassName:Array = this._nameResult.split(".");
			var pathWithPackage:String = splitClassName.join("/");
			var superClass:String = this._superNameResult;
			if(this._alternateSuperNameResult)
			{
				superClass = this._alternateSuperNameResult;
			}
			var superClassNamespace:String = "js";
			var namespaces:String = "";
			if(this._namespaceResult && this._namespaceResult !== NAMESPACE_EXPRESS)
			{
				superClassNamespace = "ns1";
				namespaces = "\n\txmlns:" + superClassNamespace + "=\"" + this._namespaceResult + "\"";
			}
			var outputPath:String = "src/" + pathWithPackage + ".mxml";
			var contents:String = this.fs.read(this.templatePath("NewComponent.mxml"));
			contents = contents.replace(/\$\{superclass.name\}/g, superClass);
			contents = contents.replace(/\$\{superclass.namespace\}/g, superClassNamespace);
			contents = contents.replace(/\$\{namespaces\}/g, namespaces);
			this.fs.write(this.destinationPath(outputPath), contents);
		}

		public function _private_whenSuperNameIsOther(answers:Object):Object
		{
			return answers.superName === SUPER_OTHER;
		}

		public function _private_onPromptsComplete(answers:Object):void
		{
			this._nameResult = answers.name as String;
			this._superNameResult = answers.superName as String;
			this._alternateSuperNameResult = answers.alternateSuperName as String;
			this._namespaceResult = answers.namespace as String;
		}
	}
}