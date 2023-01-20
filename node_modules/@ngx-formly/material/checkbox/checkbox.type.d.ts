import { Renderer2, AfterViewChecked, OnDestroy, AfterViewInit, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
interface CheckboxProps extends FormlyFieldProps {
    indeterminate?: boolean;
    labelPosition?: 'before' | 'after';
}
export interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CheckboxProps> {
    type: 'checkbox' | Type<FormlyFieldCheckbox>;
}
export declare class FormlyFieldCheckbox extends FieldType<FieldTypeConfig<CheckboxProps>> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private renderer;
    private focusMonitor;
    checkbox: MatCheckbox;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            indeterminate: boolean;
            floatLabel: "always";
            hideLabel: boolean;
            color: "accent";
        };
    };
    private _required;
    constructor(renderer: Renderer2, focusMonitor: FocusMonitor);
    onContainerClick(event: MouseEvent): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldCheckbox, "formly-field-mat-checkbox", never, {}, {}, never, never>;
}
export {};
