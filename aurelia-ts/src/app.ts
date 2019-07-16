import { PLATFORM } from 'aurelia-framework';
import { RouterConfiguration } from 'aurelia-router';

export class App {
  public configureROuter(config: RouterConfiguration) {
    config.map([
      {
        route: '/',
        title: 'Home',
        moduleId: PLATFORM.moduleName('pages/home/home-layout'),
      }
    ]);
  }
}
