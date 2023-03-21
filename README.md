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

[Tutorial video](https://www.youtube.com/watch?v=mBqUTbY2MiE&t=526s) of how to implement the translation.

Publication
-----------

```text
ng build --prod --locale en --i18n-format json --i18n-file src/i18n/en.json --locale pt --i18n-format json --i18n-file src/i18n/pt.json --locale fr --i18n-format json --i18n-file src/i18n/fr.json

firebase deploy   -->For the img and i18n folders to be loaded, it was necessary to add it in the file angular-cli.json, inside "apps" and then "assets".
```
































<div class="container">    
  <div>
    <div id="experience" class="row">
      <p class="col-xs-12 col-sm-12" align="center"> 
          {{ 'cv.title1' | translate}}
      </p>
    </div>
    <div align="justify" class="container-fluid hidden-sm-down">
      <br>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content1_1' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content1_2' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content1_3' | translate">
        </li>
      </ul>
      <hr />
      <hr />
      <br><br>
    </div>
    <!-- Mobile -->
    <div align="justify" class="container-fluid hidden-md-up" id="mob1">
      <br>
      <hr />
        <div [innerHTML]="'cv.content1_1' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content1_2' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content1_3' | translate"></div>
      <hr />
      <hr />
      <br><br>
    </div>

    <!-- ####################################################################################### -->
    <div id="formation" class="row">
      <p class="col-xs-12 col-sm-12" align="center"> 
          {{ 'cv.title2' | translate}}
      </p>
    </div>
    <div align="justify" class="container-fluid hidden-sm-down">
      <br>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content2_1' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content2_2' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content2_3' | translate">
        </li>
      </ul>
      <hr />
      <hr />
      <br><br>
    </div>
    <!-- Mobile -->
    <div align="justify" class="container-fluid hidden-md-up" id="mob1">
      <br>
      <hr />
        <div [innerHTML]="'cv.content2_1' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content2_2' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content2_3' | translate"></div>
      <hr />
      <hr />
      <br><br>
    </div>

    <!-- ####################################################################################### -->
    <div id="language" class="row">
      <p class="col-xs-12 col-sm-12" align="center"> 
          {{ 'cv.title3' | translate}}
      </p>
    </div>
    <div align="justify" class="container-fluid hidden-sm-down">
      <br>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content3_1' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content3_2' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content3_3' | translate">
        </li>
      </ul>
      <hr />
      <hr />
      <br><br>
    </div>
    <!-- Mobile -->
    <div align="justify" class="container-fluid hidden-md-up" id="mob1">
      <br>
      <hr />
        <div [innerHTML]="'cv.content3_1' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content3_2' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content3_3' | translate"></div>
      <hr />
      <hr />
      <br><br>
    </div>

    <!-- ####################################################################################### -->
    <div id="other" class="row">
      <p class="col-xs-12 col-sm-12" align="center"> 
          {{ 'cv.title4' | translate}}
      </p>
    </div>
    <div align="justify" class="container-fluid hidden-sm-down">
      <br>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content4_1' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content4_2' | translate">
        </li>
      </ul>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content4_3' | translate">
        </li>
      </ul>
      <hr />
      <hr />
      <br><br>
    </div>
    <!-- Mobile -->
    <div align="justify" class="container-fluid hidden-md-up" id="mob1">
      <br>
      <hr />
        <div [innerHTML]="'cv.content4_1' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content4_2' | translate"></div>
      <hr />
        <div [innerHTML]="'cv.content4_3' | translate"></div>
      <hr />
      <hr />
      <br><br>
    </div>

    <!-- ####################################################################################### -->
    <div id="project" class="row">
      <p class="col-xs-12 col-sm-12" align="center"> 
          {{ 'cv.title5' | translate}}
      </p>
    </div>
    <div align="justify" class="container-fluid projetos hidden-sm-down">
      <br>
      <hr />
      <ul class="circle">
        <li [innerHTML]="'cv.content5' | translate">
        </li>
      </ul>
      <hr />
      <hr />
      <br><br>
    </div>
    <!-- Mobile -->
    <div align="justify" class="container-fluid projetos hidden-md-up" id="mob1">
      <br>
      <hr />
        <div [innerHTML]="'cv.content5' | translate"></div>
      <hr />
      <hr />
      <br><br>
    </div>    
  </div>