import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {
  host = 'https://qamusbahr.com';

  constructor( private http: HttpClient) { }

  searchWord (word) {

    return this.http.get<any>(`${this.host}/webapi/search?word=${word}`);
  }

  autocomplete (word) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const url = `${this.host}/api/autocomplete`;
    const postData = {
      word: word,
      lang: 'de'
    };
    return this.http.post(url, postData);
  }

  example_deutsch (word) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const url = `${this.host}/api/example_deutsch`;
    const postData = {
      example: word
    };
    return this.http.post(url, postData);
  }

  similarwords (word) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    const url = `${this.host}/api/similarwords`;
    const postData = {
      word: word,
      lang: 'de'
    };
    return this.http.post(url, postData);
  }



}
