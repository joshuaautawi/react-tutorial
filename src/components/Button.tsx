import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <>
            <button type="button" className="btn btn-primary">{props.children}</button>
        </>
    )
}