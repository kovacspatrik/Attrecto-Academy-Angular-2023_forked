import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { HomeModule } from './shared/modules/home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './pages/users/users.module';
import { HttpClientModule } from '@angular/common/http';
import {UserCreateModule} from "./pages/user-create/user-create.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, HomeModule, AppRoutingModule, RouterModule, UsersModule, UserCreateModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
