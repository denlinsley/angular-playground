// import the html file and use with raw-loader so webpack dev server will refresh changes
import './app.component.html';

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
