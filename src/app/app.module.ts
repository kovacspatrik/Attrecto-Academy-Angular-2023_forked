import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeModule } from './shared/modules/home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [BrowserModule, HeaderModule, HomeModule, AppRoutingModule, RouterModule, UsersModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
