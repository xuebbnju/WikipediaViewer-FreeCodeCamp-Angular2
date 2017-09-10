import { Component } from '@angular/core';
import {GetSearchResult} from './get-search-result'
import {Result} from './result';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  isOpen=false;
  isHide=false;
  isFull=true;
  searchTxt="";
num=0;
  results:Object;
  page = 'https://en.wikipedia.org/?curid=';
 items:Result[]=[];
  constructor(private getResult: GetSearchResult)
   { }
  toggle(input){
  	this.isOpen=!this.isOpen;
  	if(!this.isOpen){
      this.isFull=true;
      this.isHide=false;
      input.value="";
  	}else{
  		input.focus();
  	}
  }
  search(value:string){
  	if(value===""||value===undefined){
  		return false;
  	}
    this.items=[];
  	this.searchTxt=value;
  	this.isHide=true;
  	this.isFull=false;
  	this.getResult.getData(this.searchTxt).then(items => {
      
   for(const key of Object.keys(items[1]
		)){
   	
		if(items[1].hasOwnProperty(key)){
			this.num++;
			
		}

	}
	for (var i=0;i<this.num;i++){
		this.items.push({title:items[1][i],body:items[2][i],page:items[3][i]});
	}

 
   });
 
}
   
}
