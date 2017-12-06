import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

const APP_ROUTES : Routes = [
  { path: 'directory', component: DirectoryComponent},
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
