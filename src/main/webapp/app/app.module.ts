import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ServicioTecnicoFlotaSharedModule } from 'app/shared/shared.module';
import { ServicioTecnicoFlotaCoreModule } from 'app/core/core.module';
import { ServicioTecnicoFlotaAppRoutingModule } from './app-routing.module';
import { ServicioTecnicoFlotaHomeModule } from './home/home.module';
import { ServicioTecnicoFlotaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ServicioTecnicoFlotaSharedModule,
    ServicioTecnicoFlotaCoreModule,
    ServicioTecnicoFlotaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ServicioTecnicoFlotaEntityModule,
    ServicioTecnicoFlotaAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class ServicioTecnicoFlotaAppModule {}
