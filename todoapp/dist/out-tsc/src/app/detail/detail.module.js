import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';
var routes = [
    {
        path: '',
        component: DetailPage
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                HttpClientModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetailPage]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());
export { DetailPageModule };
//# sourceMappingURL=detail.module.js.map