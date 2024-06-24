import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularMultiselectComponent } from "./angular-multiselect/angular-multiselect.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularDraggableModule } from "angular2-draggable";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown-ivy";
import { NgxAngularQueryBuilderModule } from "ngx-angular-query-builder";
import { QueryBuilderComponent } from "./query-builder/query-builder.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { LinkyModule } from "ngx-linky";
import { BlockUIModule } from "ng-block-ui";
import { NgMultiSelectComponent } from "./ng-multi-select/ng-multi-select.component";
import { ClipboardModule } from "ngx-clipboard";
import { ContextMenuComponent1 } from "./context-menu/context-menu.component";
import { ContextMenuModule } from "@perfectmemory/ngx-contextmenu";
import { CookieModule } from "ngx-cookie";
import { OrderModule } from "ngx-order-pipe";
import { SharedModule } from "./shared/shared.module";
// import { AgGridModule } from "@ag-grid-community/angular";
import { AgGridComponent } from "./ag-grid/ag-grid.component";
import { AgGridModule } from "@ag-grid-community/angular";
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { JwtExampleComponent } from './jwt-example/jwt-example.component';
import { SearchTagsComponent } from './search-tags/search-tags.component';
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    AngularMultiselectComponent,
    QueryBuilderComponent,
    NgMultiSelectComponent,
    ContextMenuComponent1,
    AgGridComponent,
    JwtExampleComponent,
    SearchTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    FormsModule,
    AngularDraggableModule,
    AngularMultiSelectModule,
    NgxAngularQueryBuilderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    LinkyModule,
    BlockUIModule.forRoot({
      delayStart: 0,
      delayStop: 100,
      message: "loading...",
    }),
    ClipboardModule,
    ContextMenuModule,
    CookieModule,
    OrderModule,
    SharedModule,
    AgGridModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:8080"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
