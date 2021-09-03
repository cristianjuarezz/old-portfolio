import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";

const routes: Routes = [
	{path: "", component: HomeComponent, data: {depth: 1}},
	{path: "portfolio", component: PortfolioComponent, data: {depth: 2}},
	{path: "contact", component: ContactComponent, data: {depth: 3}},
	{path: "blog", component: BlogComponent, data: {depth: 4}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	  scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
