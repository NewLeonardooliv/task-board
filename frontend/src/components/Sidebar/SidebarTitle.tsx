import React from 'react';

interface SidebarTitleProps {
    title: string;
    children: React.ReactNode
}

const SidebarTitle: React.FC<SidebarTitleProps> = ({ title, children }) => {
    return (
        <div className="border-t border-divider mt-4 pt-4">
            <div className="pl-6 text-yellow">{title}</div>
            <ul className="py-2">{children}</ul>
        </div>
    );
};

export default SidebarTitle;
