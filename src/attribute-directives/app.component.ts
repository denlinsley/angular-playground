import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';
import {IconDirective} from './icon.directive';
import {IconComponent} from './icon.component';

@Component({
  selector: 'my-app',
  templateUrl: 'attribute-directives/app.component.html',
  directives: [
    HighlightDirective,
    IconDirective,
    IconComponent
  ]
})
export class AppComponent { }
