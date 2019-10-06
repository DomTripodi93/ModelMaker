import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

const appRoutes: Routes = [
    {path: "", component: InputComponent},
    {path: "output", component: OutputComponent},
    {path: "**", redirectTo:"/", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}