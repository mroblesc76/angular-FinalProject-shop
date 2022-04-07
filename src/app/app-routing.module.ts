import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { DetailbikeComponent } from './components/detailbike/detailbike.component';
import { AddbikeComponent } from './components/addbike/addbike.component';
import { EditbikeComponent } from './components/editbike/editbike.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'bicicleta', component:BicicletaComponent, canActivate:[AuthGuard]},
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path: 'bike/:id', component: DetailbikeComponent},
  {path: 'editbike/:id', component:EditbikeComponent},
  {path:'addbike', component:AddbikeComponent, canActivate:[AuthGuard]},
  {path:'', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
