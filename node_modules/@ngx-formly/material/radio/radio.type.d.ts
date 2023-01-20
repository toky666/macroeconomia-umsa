import { AfterViewInit, OnDestroy, Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { MatRadioGroup } from '@angular/material/radio';
import * as i0 from "@angular/core";
interface RadioProps extends FormlyFieldProps {
    labelPosition?: 'before' | 'after';
}
export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
    type: 'radio' | Type<FormlyFieldRadio>;
}
export declare class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> implements AfterViewInit, OnDestroy {
    radioGroup: MatRadioGroup;
    defaultOptions: {
        props: {
            hideFieldUnderline: boolean;
            floatLabel: "always";
            tabindex: number;
        };
    };
    private focusObserver;
    ngAfterViewInit(): void;
    onContainerClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadio, "formly-field-mat-radio", never, {}, {}, never, never>;
}
export {};
