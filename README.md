My CV
======

This project was generated with Angular 2.

I used Angular CLI to create this project:

```text
npm install -g angular-cli

ng new NameProject

cd NameProject

ng serve
```

To create each component:
```
ng generate component my-new-component
ng g component my-new-component


ng g component new-cmp

ng g component ../newer-cmp

ng g component feature/new-cmp
```

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

But first we need to generate the folder node_modules and others:

```text
npm install -g @angular/cli@latest
npm install ng2-translate --save
npm install
firebase init
```

[Tutorial video](www.youtube.com/watch?v=mBqUTbY2ME) of how to implement the translation.

Publication
-----------

```text
ng build --prod --locale en --i18n-format json --i18n-file src/i18n/en.json --locale pt --i18n-format json --i18n-file src/i18n/pt.json --locale fr --i18n-format json --i18n-file src/i18n/fr.json

firebase deploy   -->For the img and i18n folders to be loaded, it was necessary to add it in the file angular-cli.json, inside "apps" and then "assets".
```
