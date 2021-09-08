import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public transformArray: any = [];
  newArray : any;
  public test = [
    {
      fact: 'TRANSACTION',
      operator: 'equal',
      value: '5',
      errorMessage: 'test'
    },
    { fact: '', operator: '', value: '', errorMessage: '' },
    {
      fact: 'PIN_CODE',
      operator: 'lessThan',
      value: [1,2,4],
      errorMessage: 'test3'
    },
    { fact: '', operator: '', value: '', errorMessage: '' },
    {fact: 'CATEGORY', operator: '', value: '', errorMessage: ''}
  ];p
  transformdArray(obj) {
    // this.transformArray = this.test.filter(item => item);
    // return this.transformArray;
    this.test.map((data: any) => {
      let acc = {};
      for (const key in data) {
        // console.log("key " , key.length);
        // if((key=='fact' && (key=='opeartor'))){ //errorenous line
        if ((data[key] !== '')) {
          acc[key] = data[key];
        }
      }
      // console.log("from acc ",acc);
      this.transformArray.push(acc);
    });
    console.log('from transformed array ', this.transformArray);
    // this.newArray = this.transformArray.filter(item => item);
    this.newArray = this.transformArray.filter(
      value =>   Object.keys(value).length == 4
      // console.log(Object.keys(value).length == 4)
    );
    console.log(this.newArray);
  }
}
