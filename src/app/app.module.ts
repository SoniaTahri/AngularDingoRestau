import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { ChefComponent } from "./components/chef/chef.component";
import { ChefsComponent } from "./components/chefs/chefs.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayAdminComponent } from './components/display-admin/display-admin.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from "./components/menu/menu.component";
import { SignupComponent } from './components/signup/signup.component';
import { SpecialtiesComponent } from "./components/specialties/specialties.component";
import { StoreComponent } from "./components/store/store.component";
import { TableComponent } from "./components/table/table.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PlatsComponent } from './components/plats/plats.component';
import { PlatComponent } from './components/plat/plat.component';
// import { DataService } from "./services/data.service";
// import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import { DisplayPlatComponent } from "./components/display-plat/display-plat.component";

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        HeaderComponent,
        FooterComponent,
        DisplayUserComponent,
        DisplayChefComponent,
        DisplayAdminComponent,
        DisplayPlatComponent,
        DashboardAdminComponent,
        DashboardChefComponent,
        AddPlatComponent,
        AddChefComponent,
        AddAdminComponent,
        ChefComponent,
        ChefsComponent,
        ContactComponent,
        SpecialtiesComponent,
        MenuComponent,
        StoreComponent,
        TableComponent,
        WelcomeComponent,
        PlatsComponent,
        PlatComponent,
        SearchComponent,
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        // InMemoryWebApiModule.forFeature(DataService),

    ],
    providers:[],
    bootstrap :[AppComponent]
})
export class AppModule {}