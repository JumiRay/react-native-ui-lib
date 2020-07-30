import React from 'react';
import { TextInputProps } from 'react-native';
import validators from './validators';
export declare type Validator = Function | keyof typeof validators;
interface FieldState {
    value?: string;
    isFocused: boolean;
    isValid: boolean;
    hasValue: boolean;
}
export interface FieldStateInjectedProps {
    fieldState: FieldState;
    onFocus: Function;
    onBlur: Function;
    ref?: any;
}
export interface FieldStateProps extends TextInputProps {
    validateOnStart?: boolean;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    validate: Validator | Validator[];
}
declare function withFieldState<PROPS>(WrappedComponent: React.ComponentType<FieldStateInjectedProps & TextInputProps>): React.ComponentType<PROPS>;
export default withFieldState;
