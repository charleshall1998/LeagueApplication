import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemComponent } from './item/item.component';
import { RuneComponent } from './rune/rune.component';
import { SummonerspellComponent } from './summonerspell/summonerspell.component';
import { ChampionlistComponent } from './championlist/championlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { RunelistComponent } from './runelist/runelist.component';
import { SummonerspelllistComponent } from './summonerspelllist/summonerspelllist.component';
import { ItemsetComponent } from './itemset/itemset.component';
import { ItemsetlistComponent } from './itemsetlist/itemsetlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ItemComponent,
    RuneComponent,
    SummonerspellComponent,
    ChampionlistComponent,
    ItemlistComponent,
    RunelistComponent,
    SummonerspelllistComponent,
    ItemsetComponent,
    ItemsetlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
