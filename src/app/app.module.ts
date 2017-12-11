import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service.client';
import { ModuleNewComponent } from './components/module/module-new/module-new.component';
import { ModuleEditComponent } from './components/module/module-edit/module-edit.component';
import { SectionNewComponent } from './components/section/section-new/section-new.component';
import { SectionEditComponent } from './components/section/section-edit/section-edit.component';
import { ModuleService } from './services/module.service.client';
import { SectionService } from './services/section.service.client';
import { WidgetService } from './services/widget.service.client';
import { ComponentNewComponent } from './components/component/component-new/component-new.component';
import { ComponentEditComponent } from './components/component/component-edit/component-edit.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { ComponentService } from './services/component.service.client';
import { ComponentViewComponent } from './components/component/component-view/component-view.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { SortableDirective } from './directives/sortable.directive';
import { xSortableDirective } from './directives/xsortable.directive';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    RegisterComponent,
    ModuleNewComponent,
    ModuleEditComponent,
    SectionNewComponent,
    SectionEditComponent,
    ComponentNewComponent,
    ComponentEditComponent,
    ComponentViewComponent,
    WidgetChooseComponent,
    WidgetEditComponent,
    WidgetHeadingComponent,
    WidgetHtmlComponent,
    WidgetYoutubeComponent,
    WidgetTextComponent,
    SortableDirective,
    xSortableDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [TestService, AuthGuard, SharedService, UserService, ModuleService, SectionService, WidgetService, ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
