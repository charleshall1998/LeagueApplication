import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemComponent } from './item/item.component';
import { RuneComponent } from './rune/rune.component';
import { SummonerspellComponent } from './summonerspell/summonerspell.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ItemComponent,
    RuneComponent,
    SummonerspellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
