import { InputHTMLAttributes } from 'react';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export default function DefaultInput({ placeholder = 'Enter Email Address', ...rest }: DefaultInputProps) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={placeholder}
                className="border border-grey-2 rounded-lg px-4 py-3 w-full focus:outline-none text-grey-3 font-lato font-normal text-sm"
                {...rest}
            />
            <button className="bg-primary rounded-md w-1/3 2xl:w-1/4 absolute right-0.5 inset-y-0.5 flex items-center justify-center hover:cursor-pointer">
                <span className="font-sans font-semibold text-xs text-white-bright">Sign Up</span>
            </button>
        </div>
    );
}
