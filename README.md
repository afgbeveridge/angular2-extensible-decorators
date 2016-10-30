# Angular 2 property decorators
The purpose of this project is to provide extensible property decoration for Angular 2. 

# Example

The properties shortDescription and sourceCode will be automatically serialized and deserialized to window.localStorage.

    import { Component } from '@angular/core';
    import { LocalStorage, SessionStorage } from 'angular2-extensible-decorators/components';

    @Component({
        selector: 'app-shell',
        template: '...'
    })
    export class AppComponent {
        @LocalStorage('XYZ') shortDescription: string;
        @LocalStorage('XYZ') sourceCode: string;
		@SessionStorage('XYZ') shortDescription: string;
        @SessionStorage('XYZ') sourceCode: string;
    }
