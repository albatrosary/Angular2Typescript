import {bootstrap, Component} from 'angular2/angular2';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as numeral from 'numeral';

@Component({
  selector: 'my-app',
  template: `
      <h1>My First Angular 2 App</h1>      
      <hr>
      <h2>{{fullName}}</h2>
      <div><input type="text" [(ng-model)]="firstName" /></div>
      <div><input type="text" [(ng-model)]="lastName" /></div>
      <hr>
      <h2>{{formattedNumeralValue}}</h2>
      <div><input type="text" [(ng-model)]="numeralValue" /></div>
      <hr>
      <h2>{{formattedMomentValue}}</h2>
      <div><input type="text" [(ng-model)]="momentValue" /></div>
    `
})
class AppComponent {
  firstName: string = 'T';
  lastName: string = 'N';
  numeralValue: number = 1000000;
  momentValue: string = '2015-11-01';
  get fullName() {
    if (!_.isEmpty(this.firstName) && !_.isEmpty(this.lastName)) {
      return `${this.firstName} ${this.lastName}`;
    } else {
      return 'Input both of name fields.';
    }
  }
  get formattedNumeralValue(){
    return numeral(this.numeralValue).format('0,0.000');
  }
  get formattedMomentValue(){
    return moment(this.momentValue).format('MMMM Do YYYY, h:mm:ss a');
  }
}
bootstrap(AppComponent);