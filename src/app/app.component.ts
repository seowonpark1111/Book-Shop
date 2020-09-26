import { Component } from '@angular/core';
import { Book } from './book';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
/*
https://fontawesome.com/icons/book?style=solid
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  this.matIconRegistry.addSvgIcon(
    'book-open-solid',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/book-open-solid.svg')
  );

  this.matIconRegistry.addSvgIcon(
    'book-reader-solid',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/book-reader-solid.svg')
  );

  this.matIconRegistry.addSvgIcon(
    'book-solid',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/book-solid.svg')
  );
}

  
  fire=function(){



  

      }
}
