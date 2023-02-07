import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditorDashboardComponent } from './components/editor-dashboard/editor-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RetailDashboardComponent } from './components/retail-dashboard/retail-dashboard.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ROLES } from './core/constants/app.constant';
import { AuthGuard } from './core/_guards/auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'dashboard', canActivate:[AuthGuard], component: DashboardComponent},
  {path:'admin', canActivate:[AuthGuard], data: {role: ROLES.admin}, component: AdminDashboardComponent},
  {path:'user', canActivate:[AuthGuard], data: {role: ROLES.user}, component: UserDashboardComponent},
  {path:'editor', canActivate:[AuthGuard], data: {role: ROLES.editor}, component: EditorDashboardComponent},
  {path:'retail', canActivate:[AuthGuard], data: {role: ROLES.retail}, component: RetailDashboardComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'auth', component: LoginComponent},
  {path:'unauthorized', canActivate:[AuthGuard], component: UnauthorizedComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
