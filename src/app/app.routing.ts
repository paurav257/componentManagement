import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
