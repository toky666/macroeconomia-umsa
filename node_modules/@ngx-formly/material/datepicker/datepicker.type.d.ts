import { AfterViewInit, OnDestroy, TemplateRef, ChangeDetectorRef, Type } from '@angular/core';
import { FieldTypeConfig, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { ComponentType } from '@angular/cdk/portal';
import { MatCalendarCellClassFunction, MatDatepicker } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
interface DatepickerProps extends FormlyFieldProps {
    datepickerOptions?: Partial<{
        touchUi: boolean;
        opened: boolean;
        disabled: boolean;
        startView: 'month' | 'year' | 'multi-year';
        datepickerTogglePosition: 'suffix' | 'prefix';
        calendarHeaderComponent: ComponentType<any>;
        filter: (date: any | null) => boolean;
        min: any;
        max: any;
        dateInput: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;
        dateChange: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;
        monthSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;
        yearSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;
        dateClass: MatCalendarCellClassFunction<any>;
        panelClass: string | string[];
        startAt: any | null;
    }>;
}
export interface FormlyDatepickerFieldConfig extends FormlyFieldConfig<DatepickerProps> {
    type: 'datepicker' | Type<FormlyFieldDatepicker>;
}
export declare class FormlyFieldDatepicker extends FieldType<FieldTypeConfig<DatepickerProps>> implements AfterViewInit, OnDestroy {
    private config;
    private cdRef;
    datepickerToggle: TemplateRef<any>;
    defaultOptions: {
        props: {
            datepickerOptions: {
                startView: "month";
                datepickerTogglePosition: "suffix";
                disabled: boolean;
                opened: boolean;
                dateInput: () => void;
                dateChange: () => void;
                monthSelected: () => void;
                yearSelected: () => void;
            };
        };
    };
    private fieldErrorsObserver;
    constructor(config: FormlyConfig, cdRef: ChangeDetectorRef);
    detectChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDatepicker, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDatepicker, "formly-field-mat-datepicker", never, {}, {}, never, never>;
}
export {};
