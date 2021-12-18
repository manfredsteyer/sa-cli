import { AppComponent } from './app/app.component';

import { bootstrapComponent } from './app/standalone-shim';

bootstrapComponent(AppComponent)

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
