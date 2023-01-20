import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
    imports : [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatListModule,
        NgxSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatSortModule,
        MatPaginatorModule
    ],

    exports : [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatListModule,
        NgxSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTabsModule,
        MatSortModule,
        MatPaginatorModule
    ],

    providers : []
})


export class MatSharedModule {}