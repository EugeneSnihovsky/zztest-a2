'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestA2Component } from './test-a2.component';

/**
 * Notification module
 */
@NgModule({
    declarations: [
        TestA2Component,
    ],
    imports: [
        CommonModule,
    ],
    entryComponents: [
        TestA2Component,
    ],
    exports: [
        TestA2Component
    ],
})
export class TestA2Module {}
