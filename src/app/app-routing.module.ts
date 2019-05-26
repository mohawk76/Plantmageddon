import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTestComponent } from './route-test/route-test.component';
import { InfopageComponent } from './infopage/infopage.component';

const routes: Routes = [
	{path: '', component: RouteTestComponent},
  {path: 'info/:product', component: InfopageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RouteTestComponent]
