# Angular2Typescript

In this case, I'll be nearly along with above official tutorial, and add a little bit of arrangement.
For the first, make a directory somewhere you like, then execute commands below.

```
npm init
npm install angular2 systemjs lodash numeral moment --save
npm install live-server typescript --save-dev
```

Although the official tutorial doesn't include Lodash, Numeral, Moment, we want to use them because they are very very useful.

And of course we want to use Definitely Typed files.
Don't forget to install TSD. That's a common sense of TypeScript users:)

```
npm install -g tsd typescript
```

Initialize TSC and TSD to create tsconfig.json and tsd.json.

```
tsc -init
tsd init
```

Install Definitely Typed files by using TSD.

```
tsd install systemjs lodash numeraljs moment --save
```

Next step, edit `tsconfig.json`.

```json
(tsconfig.json)
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "noImplicitAny": false,
    "sourceMap": false,
    "experimentalDecorators": true,
    "moduleResolution": "node"
  },
  "exclude": [
    "node_modules"
  ]
}
```

Add index.html at the root of the directory.

```html
(index.html)
<html>
<head>
  <title>Angular 2 QuickStart</title>
  <script src="node_modules/systemjs/dist/system.js"></script>
  <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
  <script src="config.js"></script>
  <script>
    System.import('app.js');
  </script>
</head>
<body>
  <my-app>loading...</my-app>
</body>
</html>
```

Inside of config.js is below.

```javascript
(config.js)
System.config({
  baseURL: '/',
  map: {
    lodash: 'node_modules/lodash/index.js',
    moment: 'node_modules/moment/moment.js',
    numeral: 'node_modules/numeral/numeral.js'
  }
});
```

Writing the settings of System.js, the most important section is map.
It declares where the library's real files are. Import sentences in the .ts files refer them.

My app.ts is alike with the official tutorial's one, but I added some parts.
There are additional import sentences for Lodash, Moment, Numeral.
This app.ts will be compiled to app.js and run on browsers. At that time, app.js can import .js files from "node_modules directory".
Oh what a easy way to handle libraries! System.js the nice guy.

```typescript
(app.ts)
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
```

Finally, the rest of you have to do is just to invoke.
Before that, edit scripts part in package.json.

```json
(package.json)
{
  "scripts": {
    "tsc": "node_modules/.bin/tsc -p . -w",
    "start": "live-server --open=."
  }
}
```

"live-server --open=." means that the web-server(live-server) will open "http://127.0.0.1:8080/", if you set as --open=src then it will open "http://127.0.0.1:8080/src/".

The command to compile .ts files is below.

```
npm run tsc
```

That will observe changes and re-compile repeatedly while you keep the command prompt open.

The command to invoke the web server is below.

```
npm start
```

That will open your browser and show you the page automatically, and reload by any chenges of your files automatically!