import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayAdminComponent } from './components/display-admin/display-admin.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
 { path:'', component: HomeComponent },
 { path:'signup', component: SignupComponent },
 { path:'login', component: LoginComponent },
 { path:'addAdmin', component: AddAdminComponent },
 { path:'addchef', component: AddChefComponent },
 { path:'addplat', component: AddPlatComponent },
 { path:'dashboardadmin', component: DashboardAdminComponent},
 { path:'dashboardchef', component: DashboardChefComponent},
 { path:'displayuser/:id', component: DisplayUserComponent},
 { path:'displayadmin/:id', component: DisplayAdminComponent},
 { path:'displaychef/:id', component: DisplayChefComponent},
 { path:'displayplat/:id', component: DisplayPlatComponent},
 { path:'editChef/:id', component: AddChefComponent},
 { path:'editAdmin/:id', component: AddAdminComponent},
 { path:'editPlat/:id', component: AddPlatComponent},
 { path:'search', component: SearchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
