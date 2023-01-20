import { QueryList, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i0 from "@angular/core";
interface MultiCheckboxProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
export interface FormlyMultiCheckboxFieldConfig extends FormlyFieldConfig<MultiCheckboxProps> {
    type: 'multicheckbox' | Type<FormlyFieldMultiCheckbox>;
}
export declare class FormlyFieldMultiCheckbox extends FieldType<FieldTypeConfig<MultiCheckboxProps>> {
    checkboxes: QueryList<MatCheckbox>;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            color: "accent";
        };
    };
    onChange(value: any, checked: boolean): void;
    onContainerClick(): void;
    isChecked(option: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldMultiCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldMultiCheckbox, "formly-field-mat-multicheckbox", never, {}, {}, never, never>;
}
export {};
