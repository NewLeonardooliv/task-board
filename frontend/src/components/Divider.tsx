import React from "react";

type DividerProps = {
    className?: string;
}

const Divider = ({ ...props }: DividerProps) => {
    return <hr className={`my-4 border-t border-foreground opacity-40 ${props.className}`} />;
};

export default Divider;
