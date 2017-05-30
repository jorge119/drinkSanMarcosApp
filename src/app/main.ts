import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './shared/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('Bootstrap Sucess'))
  .catch(err =>  console.error(err));
