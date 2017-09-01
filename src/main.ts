import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './app/i18n-providers';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

getTranslationProviders().then(providers => {
  const options = { providers };
  if (environment.production) {
    enableProdMode();
  }
  platformBrowserDynamic().bootstrapModule(AppModule, options);
});
