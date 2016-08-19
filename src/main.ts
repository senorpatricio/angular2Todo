import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {TodoAppComponent} from './app/todo-app';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAppComponent);

