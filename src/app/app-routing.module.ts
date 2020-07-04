import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HomeComponent } from './home/home.component';
import { DetailsMemberComponent } from './details-member/details-member.component';


const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'details/:memberno', component: DetailsMemberComponent },
  { path: 'add', component: AddMemberComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
