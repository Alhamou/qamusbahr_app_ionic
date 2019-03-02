import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDateService } from '../service/get-date.service';
// tslint:disable-next-line:max-line-length
import { AutoComp, De, Nom, Find, Adj, Indicative, Conjunctive_I_and_II, Conditional, Imperative, Example_DE, Similarwords } from '../interface/home';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  result: De[];
  nom: Nom;
  find: Find[];
  adj: Adj[];
  indicative: Indicative[];
  conjunctive_I_and_II: Conjunctive_I_and_II[];
  conditional: Conditional[];
  imperative: Imperative[];
  example_de: Example_DE[];
  similarwords: Similarwords[];
  autoCom: AutoComp;
  searcgWord: string;
  arabicWord: boolean;
  textAlign: boolean;
  case: string;
  parentWord: string;
  isFind: boolean;
  word: string;
  isTest = true;
  singular;
  plural;
  constructor(private getDateService: GetDateService, private ActRoute: ActivatedRoute, private router: Router) { }



  @ViewChild('searchbar') searchbar;




  doSearch(event) {

    const word = typeof event === 'string' ? event : this.searcgWord || event.target.value;
    const neWord = word.trim();
      this.router.navigateByUrl('/search/' + neWord);

      this.autoCom = null;
      this.searcgWord = null;
  }

  doSearchAfterNav(word) {
    this.hideTheElement('listAutoComplate', 'none');

    this.searcgWord = word;
    this.arabicWord = /[\u0600-\u06FF]/.test(word);


    this.getDateService.searchWord(word).subscribe(data => {

      if (data.result) {
        this.result = [...data.result];
        this.word = this.arabicWord ? `${this.result[0].arabic_word}` : `${this.result[0].lang_word}`;
        this.nom = data.nom;
        this.doSearchExample_deutsch (this.word);
        this.doSearchSimilarwords (this.word);
      } else if (data.find) {
        this.find = [...data.find];
      }
      if (data.adj) {
        this.adj = [...data.adj.adj.reverse()];
      }
      if (data.verbs) {

        this.indicative = [{...data.verbs.Indicative}];
        this.conjunctive_I_and_II = [{...data.verbs.Conjunctive_I_and_II}];
        this.conditional = [{...data.verbs.Conditional}];
        this.imperative = [{...data.verbs.Imperative}];
      }

      this.isFind = data.find ? true : false ;
    });
  }



  hideTheElement(selector, val) {
    // document.getElementById(selector).style.display = val;
  }
  onInput(e) {
    this.getAutocomplete(e.target.value);
  }

  // AutoComplate..
  getAutocomplete(word) {
    const neWord = word.trim();
    this.hideTheElement('listAutoComplate', 'block');
    if (neWord.length < 2) { return; }
    this.case = neWord;
    this.getDateService.autocomplete(neWord).subscribe(result => {

      this.autoCom = result['data'].words;
      this.textAlign = result['data'].lang === 'left' ? false : true;

    });
  }
  // on click AutoComplate research Word.
  clickOnAutoComplate(i) {
    this.doSearch(this.autoCom[i]);
  }

  clickOnResult(word) {
    const newWord = word.target.textContent;
    const newWoRplacenewWord = newWord.replace(/^der |^die |^das /ig, '');
    this.doSearch(newWoRplacenewWord);

  }


  ionViewDidEnter() {

    const word = this.ActRoute.snapshot.paramMap.get('word');

    if ( word === '' ) {
      this.searchbar.setFocus();
    }

  }
  ngOnInit() {
    const word = this.ActRoute.snapshot.paramMap.get('word');
    if ( word !== '' ) {
      this.doSearchAfterNav(word);
    }
  }
  doSearchExample_deutsch (word) {
    if (this.word.length > 1) {
      this.getDateService.example_deutsch(word).subscribe(result => {
        this.example_de = [...result['res'].examples];

      });
    }
  }

  doSearchSimilarwords (word) {
    if (this.word.length > 1) {
      this.getDateService.similarwords(word).subscribe(similar => {
      this.similarwords = {...similar['result']};
      });
    }
  }



}
