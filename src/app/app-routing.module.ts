import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTestComponent } from './route-test/route-test.component';

const routes: Routes = [
  {path: 'test', component: RouteTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RouteTestComponent]
