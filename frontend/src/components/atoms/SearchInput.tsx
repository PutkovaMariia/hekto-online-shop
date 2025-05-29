import { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export default function SearchInput({ placeholder = 'Search', ...rest }: SearchInputProps) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="border border-grey-2 rounded-lg px-4 py-3 w-full focus:outline-none font-normal text-sm"
                {...rest}
            />
            <button className="bg-primary rounded-md w-1/5 absolute right-0.5 inset-y-0.5 flex items-center justify-center hover:cursor-pointer">
                <span className="size-6 bg-grey-1 mask [mask-image:url('assets/icons/search.svg')]"></span>
            </button>
        </div>
    );
}
