import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private subscription: Subscription;
  
  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute){
    translate.addLangs(["en", "pt", "fr"]);
    translate.setDefaultLang("en");

    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|pt|fr/) ? browserlang : "en");
    //translate.use("pt");
  }

  changeLanguage(lang){
    this.translate.use(lang);
  }

  ngOnInit(){
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let locale = param['locale'];
        if(locale != undefined){
          this.translate.use(locale)
        }
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
