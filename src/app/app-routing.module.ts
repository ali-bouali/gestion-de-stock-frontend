import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from './pages/page-login/page-login.component';
import {PageInscriptionComponent} from './pages/page-inscription/page-inscription.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from './pages/page-statistiques/page-statistiques.component';
import {PageArticleComponent} from './pages/articles/page-article/page-article.component';
import {NouvelArticleComponent} from './pages/articles/nouvel-article/nouvel-article.component';
import {PageMvtstkComponent} from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import {PageClientComponent} from './pages/client/page-client/page-client.component';
import {PageFournisseurComponent} from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import {NouveauCltFrsComponent} from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import {PageCmdCltFrsComponent} from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import {NouvelleCmdCltFrsComponent} from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import {PageCategoriesComponent} from './pages/categories/page-categories/page-categories.component';
import {NoouvelleCategoryComponent} from './pages/categories/noouvelle-category/noouvelle-category.component';
import {PageUtilisateurComponent} from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import {NouvelUtilisateurComponent} from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import {PageProfilComponent} from './pages/profil/page-profil/page-profil.component';
import {ChangerMotDePasseComponent} from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import {ApplicationGuardService} from './services/guard/application-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'articles',
        component: PageArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvelarticle/:idArticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouveauclient/:id',
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCmdCltFrsComponent,
      canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouveaufournisseur/:id',
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelleCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategoriesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie',
        component: NoouvelleCategoryComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie/:idCategory',
        component: NoouvelleCategoryComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
