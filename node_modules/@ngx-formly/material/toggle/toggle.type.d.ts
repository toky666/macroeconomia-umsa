import { Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
interface ToggleProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
export interface FormlyToggleFieldConfig extends FormlyFieldConfig<ToggleProps> {
    type: 'toggle' | Type<FormlyFieldToggle>;
}
export declare class FormlyFieldToggle extends FieldType<FieldTypeConfig<ToggleProps>> {
    slideToggle: MatSlideToggle;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            hideLabel: boolean;
        };
    };
    onContainerClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldToggle, "formly-field-mat-toggle", never, {}, {}, never, never>;
}
export {};
