import { Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import * as i0 from "@angular/core";
interface NativeSelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
}
export interface FormlyNativeSelectFieldConfig extends FormlyFieldConfig<NativeSelectProps> {
    type: 'native-select' | Type<FormlyFieldNativeSelect>;
}
export declare class FormlyFieldNativeSelect extends FieldType<FieldTypeConfig<NativeSelectProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldNativeSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldNativeSelect, "formly-field-mat-native-select", never, {}, {}, never, never>;
}
export {};
