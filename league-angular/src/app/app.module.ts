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
import { RunesetlistComponent } from './runesetlist/runesetlist.component';
import { RunesetComponent } from './runeset/runeset.component';
import { SummonerspellsetComponent } from './summonerspellset/summonerspellset.component';
import { SummonerspellsetlistComponent } from './summonerspellsetlist/summonerspellsetlist.component';
import { CreateItemsetComponent } from './create-itemset/create-itemset.component';
import { FormsModule } from '@angular/forms';
import { CreateRunesetComponent } from './create-runeset/create-runeset.component';
import { CreateSummonerspellsetComponent } from './create-summonerspellset/create-summonerspellset.component';
import { DeleteItemsetComponent } from './delete-itemset/delete-itemset.component';

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
    ItemsetlistComponent,
    RunesetlistComponent,
    RunesetComponent,
    SummonerspellsetComponent,
    SummonerspellsetlistComponent,
    CreateItemsetComponent,
    CreateRunesetComponent,
    CreateSummonerspellsetComponent,
    DeleteItemsetComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
