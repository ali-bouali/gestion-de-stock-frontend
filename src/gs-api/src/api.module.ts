/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ArticlesService } from './services/articles.service';
import { AuthenticationService } from './services/authentication.service';
import { CategoriesService } from './services/categories.service';
import { ClientsService } from './services/clients.service';
import { CommandesclientsService } from './services/commandesclients.service';
import { CommandefournisseurService } from './services/commandefournisseur.service';
import { EntreprisesService } from './services/entreprises.service';
import { FournisseurService } from './services/fournisseur.service';
import { MvtstkService } from './services/mvtstk.service';
import { PhotosService } from './services/photos.service';
import { UtilisateursService } from './services/utilisateurs.service';
import { VentesService } from './services/ventes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ArticlesService,
    AuthenticationService,
    CategoriesService,
    ClientsService,
    CommandesclientsService,
    CommandefournisseurService,
    EntreprisesService,
    FournisseurService,
    MvtstkService,
    PhotosService,
    UtilisateursService,
    VentesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
