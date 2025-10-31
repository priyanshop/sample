import { DateFormat } from '@/types';
import { JSX } from 'react';
import { TextInput } from 'react-native-paper';

export enum FieldTypes {
   INPUT = 'input',
   PASSWORD = 'password',
   NUMERIC = 'numeric',
   CHECKBOX = 'checkbox',
   SELECT = 'select',
   DATE = 'date',
   SWITCH = 'switch',
   SELECT_DROPDOWN = 'select-dropdown',
   STYLED_CHECKBOX = 'styled-checkbox',
   SEARCH = 'search',
   RADIO_GROUP = 'radio-group',
   CHECKBOX_GROUP = 'checkbox-group',
   DATE_TIME = 'date-time',
   PAYMENT_METHOD_RADIO = 'payment-method-radio',
   CALENDAR = 'calendar',
   TIME_SELECTOR = 'time-selector',
}

export interface BaseFormField {
   name: string;
   label: string;
   placeholder?: string;
   required?: boolean;
   width?: 'full' | 'half' | 'auto' | `${number}%`;
   icon?: string;
   disabled?: boolean;
   editable?: boolean;
}

export interface SelectOption {
   label: string;
   description?: string;
   value: string | number;
}

export interface PaymentMethodOption extends SelectOption {
   icon?: string;
}

export interface InputField extends BaseFormField {
   type: FieldTypes.INPUT;
   inputType: 'text' | 'email' | 'password' | 'number' | 'phone';
   iconPosition?: 'left' | 'right';
   showEditLabel?: boolean;
   inputProps?: React.ComponentProps<typeof TextInput>;
   onPress?: () => void;
   onChangePress?: () => void;
}

export interface PasswordField extends BaseFormField {
   type: FieldTypes.PASSWORD;
   showEditLabel?: boolean;
   inputProps?: React.ComponentProps<typeof TextInput>;
   onPress?: () => void;
   onChangePress?: () => void;
}

export interface NumericInputField extends BaseFormField {
   type: FieldTypes.NUMERIC;
   length?: number;
}

export interface CheckboxField extends Omit<BaseFormField, 'label'> {
   label: string | JSX.Element;
   type: FieldTypes.CHECKBOX;
}

export interface StyledCheckboxField<T = unknown> extends Omit<BaseFormField, 'label'> {
   type: FieldTypes.STYLED_CHECKBOX;
   title: string;
   description: string;
   showSlider?: boolean;
   min?: number;
   max?: number;
   value?: T | number;
}

export interface DateInputField extends BaseFormField {
   type: FieldTypes.DATE;
   format: DateFormat;
}

export interface SelectField extends BaseFormField {
   type: FieldTypes.SELECT;
   options?: SelectOption[];
}

export interface SelectDropdownField extends BaseFormField {
   type: FieldTypes.SELECT_DROPDOWN;
   options: SelectOption[];
   showEditLabel?: boolean;
}

export interface SwitchField extends BaseFormField {
   type: FieldTypes.SWITCH;
   options: SelectOption[];
}

export interface SearchField extends BaseFormField {
   type: FieldTypes.SEARCH;
   placeholder?: string;
}

export interface RadioGroupField extends BaseFormField {
   type: FieldTypes.RADIO_GROUP;
   options: SelectOption[];
}

export interface CheckboxGroupField extends BaseFormField {
   type: FieldTypes.CHECKBOX_GROUP;
   options: SelectOption[];
}

export interface DateTimeInputField extends BaseFormField {
   type: FieldTypes.DATE_TIME;
   format: DateFormat;
}

export interface PaymentMethodRadioField extends BaseFormField {
   type: FieldTypes.PAYMENT_METHOD_RADIO;
   options: PaymentMethodOption[];
}

export interface CalendarField extends BaseFormField {
   type: FieldTypes.CALENDAR;
   label: string;
   minDate?: string;
   maxDate?: string;
   size?: number;
}

export interface TimeSelectorField extends BaseFormField {
   type: FieldTypes.TIME_SELECTOR;
   label: string;
   mode?: 'pickup' | 'dropoff';
   selectedDate?: Date | null;
}

export type FormField =
   | InputField
   | PasswordField
   | NumericInputField
   | CheckboxField
   | StyledCheckboxField
   | DateInputField
   | SelectField
   | SelectDropdownField
   | SwitchField
   | SearchField
   | RadioGroupField
   | CheckboxGroupField
   | DateTimeInputField
   | PaymentMethodRadioField
   | CalendarField
   | TimeSelectorField;
