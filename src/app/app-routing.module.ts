import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/modules/home/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { BadgesComponent } from "./pages/badges/badges/badges.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page/not-found-page.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'badges', component: BadgesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule { }
