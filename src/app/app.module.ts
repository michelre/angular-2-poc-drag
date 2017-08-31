import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';
import { TreeModule } from 'angular-tree-component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FocusModule } from 'angular2-focus';
import { AngularSplitModule } from 'angular-split';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { PocMatjaxComponent } from './poc-matjax/poc-matjax.component';
import { PocAngularSplitComponent } from './poc-angular-split/poc-angular-split.component';

import { MathJaxDirective } from './mathjax.directive';

@NgModule({
  declarations: [AppComponent, MainComponent, DragAndDropComponent, TreeViewComponent, PocMatjaxComponent, MathJaxDirective, PocAngularSplitComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    DragulaModule,
    TreeModule,
    FocusModule.forRoot(),
    AngularSplitModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
