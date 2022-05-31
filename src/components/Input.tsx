import { useState } from "react";
type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
    return (
        <>
            <input type="text" value={value} onChange={onChange} />
            <h1>{value}</h1>
        </>
    );
};
