import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ModuleNewComponent } from './components/module/module-new/module-new.component';
import { ModuleEditComponent } from './components/module/module-edit/module-edit.component';
import { SectionNewComponent } from './components/section/section-new/section-new.component';
import { SectionEditComponent } from './components/section/section-edit/section-edit.component';
import { ComponentNewComponent } from './components/component/component-new/component-new.component';
import { ComponentEditComponent } from './components/component/component-edit/component-edit.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'component/new', component: ComponentNewComponent},
  { path: 'component/:cid', component: ComponentEditComponent},
  { path: 'component/:cid/module/new', component: ModuleNewComponent },
  { path: 'component/:cid/module/:mid/', component: ModuleEditComponent },
  { path: 'component/:cid/module/:mid/section/new', component: SectionNewComponent },
  { path: 'component/:cid/module/:mid/section/:sid', component: SectionEditComponent }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
