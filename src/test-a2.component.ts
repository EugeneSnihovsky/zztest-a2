'use strict';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test-a2',
    template: `<div>Hello world: {{field}}</div>`,
    styles: [`div {background-color: yellow;}`]
})

export class TestA2Component implements OnInit {
    private field: string = 'work';

    public ngOnInit(): void {
        console.log(1, this.field);
        console.log(1, this.field);
        console.log(1, this.field);
        console.log(1, this.field);
        console.log(1, this.field);
        console.log(1, this.field);
        console.log(1, this.field);
    }
}
