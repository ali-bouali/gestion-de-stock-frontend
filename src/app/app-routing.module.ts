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
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauCltFrsComponent,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvellecategorie',
        component: NoouvelleCategoryComponent
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent
      },
      {
        path: 'profil',
        component: PageProfilComponent
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
