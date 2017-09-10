import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Result} from './result';


@Injectable()
export class GetSearchResult {
 
   private api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    private cb = '?callback=JSON_CALLBACK';
  
	private results:Result[]=[];

	
	constructor(private jsonp:Jsonp) { }
	 getData (term: string) {
     var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .toPromise()
                .then((response) => response.json());
  }
}