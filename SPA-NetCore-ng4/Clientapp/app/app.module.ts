import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./components/app/app.component";

import { AddItemComponent } from "./components/items/additem.component";
import { ItemListComponent } from "./components/items/ItemList.component";
import { NavMenuComponent } from "./components/nav/navmenu.component";


const appRoutes: Routes = [    
    {
        path: 'itemlist', component: ItemListComponent
    },
    {
        path: 'additem', component: AddItemComponent
    },
    { path: '**', redirectTo: 'home/index' },
    {
        path: '', redirectTo: 'home/index', pathMatch: 'full'
    }

];


@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, NavMenuComponent, ItemListComponent, AddItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
