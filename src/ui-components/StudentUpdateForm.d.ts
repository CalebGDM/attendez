/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Student } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StudentUpdateFormInputValues = {
    name?: string;
    email?: string;
    grade?: string;
    enrroll?: string;
    group?: string;
};
export declare type StudentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    enrroll?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StudentUpdateFormOverridesProps = {
    StudentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
    enrroll?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StudentUpdateFormProps = React.PropsWithChildren<{
    overrides?: StudentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    student?: Student;
    onSubmit?: (fields: StudentUpdateFormInputValues) => StudentUpdateFormInputValues;
    onSuccess?: (fields: StudentUpdateFormInputValues) => void;
    onError?: (fields: StudentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StudentUpdateFormInputValues) => StudentUpdateFormInputValues;
    onValidate?: StudentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StudentUpdateForm(props: StudentUpdateFormProps): React.ReactElement;
