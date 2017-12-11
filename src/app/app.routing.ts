import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ModuleNewComponent } from './components/module/module-new/module-new.component';
import { ModuleEditComponent } from './components/module/module-edit/module-edit.component';
import { SectionNewComponent } from './components/section/section-new/section-new.component';
import { ComponentNewComponent } from './components/component/component-new/component-new.component';
import { ComponentEditComponent } from './components/component/component-edit/component-edit.component';
import { ComponentViewComponent } from './components/component/component-view/component-view.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { AuthGuard } from './services/auth-guard.service';
import { SectionEditComponent } from './components/section/section-edit/section-edit.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'component/new', component: ComponentNewComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid', component: ComponentViewComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/edit', component: ComponentEditComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/new', component: ModuleNewComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid', component: ModuleEditComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/new', component: SectionNewComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid', component: SectionEditComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/new', component: WidgetChooseComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/:wid', component: WidgetEditComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/new/heading', component: WidgetHeadingComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/new/youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/new/html', component: WidgetHtmlComponent, canActivate: [AuthGuard] },
  { path: 'component/:cid/module/:mid/section/:sid/widget/new/text', component: WidgetTextComponent, canActivate: [AuthGuard] },
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
