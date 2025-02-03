import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlflow/ifelse/ifelse.component';
import { ForswitchComponent } from './components/controlflow/forswitch/forswitch.component';

export const routes: Routes = [
    {
        path : 'add-employee',
        component : AddEmployeeComponent
    },
    {
        path : 'employee-list',
        component : EmployeeListComponent
    },
    {
        path : 'structural-directive',
        component : StructuralDirectiveComponent
    },
    {
        path : 'attribute-directive',
        component : AttributeDirectiveComponent
    },
    {
        path : 'if-else',
        component : IfelseComponent
    },
    {
        path : 'for-switch',
        component : ForswitchComponent
    },
];
