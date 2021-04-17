import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CltfrsService} from '../../services/cltfrs/cltfrs.service';
import {ArticleDto} from '../../../gs-api/src/models/article-dto';
import {ArticleService} from '../../services/article/article.service';
import {LigneCommandeClientDto} from '../../../gs-api/src/models/ligne-commande-client-dto';
import {CommandeClientDto} from '../../../gs-api/src/models/commande-client-dto';
import {CmdcltfrsService} from '../../services/cmdcltfrs/cmdcltfrs.service';
import {CommandeFournisseurDto} from '../../../gs-api/src/models/commande-fournisseur-dto';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit {

  origin = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<any> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltFrsService: CltfrsService,
    private articleService: ArticleService,
    private cmdCltFrsService: CmdcltfrsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data.origin;
    });
    this.findAllClientsFournisseurs();
    this.findAllArticles();
  }

  findAllClientsFournisseurs(): void {
    if (this.origin === 'client') {
      this.cltFrsService.findAllClients()
      .subscribe(clients => {
        this.listClientsFournisseurs = clients;
      });
    } else if (this.origin === 'fournisseur' ) {
      this.cltFrsService.findAllFournisseurs()
      .subscribe(fournisseurs => {
        this.listClientsFournisseurs = fournisseurs;
      });
    }
  }

  findAllArticles(): void {
    this.articleService.findAllArticles()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }

  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
    .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  ajouterLigneCommande(): void {
    this.checkLigneCommande();
    this.calculerTotalCommande();

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  calculerTotalCommande(): void {
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }

  private checkLigneCommande(): void {
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle ? article.codeArticle : '';
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();
    if (this.origin === 'client') {
      this.cmdCltFrsService.enregistrerCommandeClient(commande as CommandeClientDto)
      .subscribe(cmd => {
        this.router.navigate(['commandesclient']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
    } else if (this.origin === 'fournisseur') {
      this.cmdCltFrsService.enregistrerCommandeFournisseur(commande as CommandeFournisseurDto)
      .subscribe(cmd => {
        this.router.navigate(['commandesfournisseur']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
    }
  }

  private preparerCommande(): any {
    if (this.origin === 'client') {
      return  {
        client: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande
      };
    } else if (this.origin === 'fournisseur') {
      return  {
        fournisseur: this.selectedClientFournisseur,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeFournisseurs: this.lignesCommande
      };
    }
  }
}
