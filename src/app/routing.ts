import { NgModule } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [HomeComponent];
