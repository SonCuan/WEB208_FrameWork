import { Routes } from '@angular/router';
import { LayoutsWebsiteComponent } from './layouts/layouts-website/layouts-website.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { AdminProductsPageComponent } from './pages/admin/admin-products-page/admin-products-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { 
        path: '', component : LayoutsWebsiteComponent, children : [
            {path: "" , component : HomeComponent} ,
            {path: "about" , component : AboutComponent} 
        ]
    },
    {
        path: 'admin', component : LayoutsAdminComponent, children : [
            {path : '' , redirectTo : 'dashboard' , pathMatch : "full"},
            {path : 'dashboard', component : DashboardPageComponent }, 
            {path : 'products', component : AdminProductsPageComponent },
        ]
    }, 
    {
        path: '**', component : NotFoundComponent
    }

];
