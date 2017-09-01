# POCs

## Drag and Drop

* **Handle Drag and Drop**: [ng2-dragula](https://github.com/valor-software/ng2-dragula)
* **Accordion left + table rows**: [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap)

## Tree View

* **Tree**: [angular-tree-component](https://github.com/500tech/angular-tree-component)

## Math

* **Mathematics formulas**: [mathquill](https://github.com/mathquill/mathquill)

## Angular split

* **Splitting windows**: [angular-split](https://github.com/bertrandg/angular-split)

## i18n

Steps to support multi languages in an app:

* Everything you need to translate need to be inside a tag that contains an i18n attribute
* Use the command `ng-xi18n --i18nFormat=xlf`. This command will create a file named `message.xlf` at the root of the project
* Move this file into a locale folder
* Make a copy of this file named messages.<lang>.xlf (ex: for Japanese: messages.ja.xlf)
* Use [one of these tool](https://en.wikipedia.org/wiki/XLIFF#Editors) to translate the text.
* Add a i18n-providers.ts file inside src/app
* Change the main.ts file
* Compile the app by specifying the locale and the translated files: `ng build --prod --locale fr --i18n-file locale/messages.fr.xlf`
