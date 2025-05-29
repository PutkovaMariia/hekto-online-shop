import { ComponentType, InputHTMLAttributes } from 'react';
import SearchInput from "../atoms/SearchInput.tsx";
import DefaultInput from "../atoms/DefaultInput.tsx";


export type InputFieldVariant = 'search' | 'default';

interface SpecificInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: InputFieldVariant;
    placeholder?: string;
}

const VARIANT_MAP: Record<InputFieldVariant, ComponentType<SpecificInputProps>> = {
    search: SearchInput,
    default: DefaultInput,
};

export default function SpecificInput({ variant, ...rest }: SpecificInputProps) {
    const InputComponent = VARIANT_MAP[variant];
    return <InputComponent variant={variant} {...rest} />;
}
