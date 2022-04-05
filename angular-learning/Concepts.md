Angular is a JS framework.

In `angular.json`, adding `bootstrap.min.css` as one of the style files combines bootstrap styles with other style files. All these declarations are combined and stored in `styles.css`

When bootstrapping an angular app, it looks at `main.ts` and finds the module responsible for root-component. Then, it looks into corresponding root module's (`app.module.ts`) bootstrap variable to find which component is responsible. Then it finds `app.component.ts`. In the component it finds `app-root` as a `selector` and thus corresponding html `app.component.html` replaces content in `index.html`.

## Component and Selectors

A component is made up of none, one or more components. A decorator is something which enhances something else. The `@Component` is a decorator which holds metadata which tells Angular how to use the component class. It passes JS object as an argument and its properties include:

- `styles: []` Like `styleUrls`, this accepts [] of css-styles as strings. Unlike template, a component can both have styles and styleUrls.
- `template: '<app-server></app-server>'`, //used to add template to a component. Has to either have `template` or `templateUrl` property.
- `selector: ` // can be like 'app-servers' or '[app-servers]' (which informs angular to find an element with attribute 'app-servers' and replace that element with `servers.component.html`) or '.app-servers' (which informs angular to find an element with class 'app-servers' and replace that element with `servers.component.html`)

A component can be created using `ng generate` like `ng generate component servers` or `ng g c servers`. This creates `servers` sub-folder in `src` folder.
This command automatically adds the component to `declarations` property. Once the component is added to `declarations` property, it's selector can be used to inject the component anywhere.

## Databinding

It is a communication between Business Logic (TypeScript code) and Template (HTML).
Following are the ways to communicate from Business Logic to Template:

- String Interpolation `{{data}}`
- Property Binding `[property]="data"` //generates dynamic property-value

Following are the ways to communicate from Template to Business Logic:

- Event Binding `(event)="expression"`

Following are the ways to communicate to/from Template from/to Business Logic:

- `[(ngModel)]="data"`

## Event Binding

`(event)="expression"` is how any HTML `event` (click, mouseEnter, mouseLeave...) can be binded to a JS expression.

## Directives

Angular has many directives, out of which one can use `*ngIf`.The `*` is required to inform Angular that it will either add or not add the element. Directives which start with `*` indicate that they are structural directives. Another examples are `ngFor`, `ngSwitch`...
There are other type of directives which don't have `*` in front of it. They are called attribute directives. They only change the element they were placed on. One of the them is `ngStyle`. It can be used as `[ngStyle]: {backgroundColor: 'red'}` or `[ngStyle]: {'background-color': 'red'}`
