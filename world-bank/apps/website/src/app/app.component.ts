import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'wb-website-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'World Bank';
  constructor(private swu: SwUpdate){
    this.checkUpdatedVersion();
  }

  checkUpdatedVersion() {
    if (this.swu.isEnabled) {
      this.swu.checkForUpdate().then(data => console.log(data));
      this.swu.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión ${appData.version} disponible.`;
          msg += `${appData.changelog}.`;
          msg += '¿Recargar y actualizar?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
