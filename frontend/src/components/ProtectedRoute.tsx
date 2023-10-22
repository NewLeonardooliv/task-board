/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { roles } from '@/mappers/roles.mapper';
import { useAuth } from '@/hooks/useAuth';

type ProtectedRouteProps = {
    children: React.ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const userHasPermission = checkUserPermissions(allowedRoles);

    if (!userHasPermission) {
        return null;
    }

    return children;
}

function checkUserPermissions(allowedRoles: string[]) {
    try {
        const { profile } = useAuth();

        const userRoles = roles[profile];

        const hasPermission = userRoles.some(role => allowedRoles.includes(role));

        return hasPermission;

    } catch (error) {
        return false;
    }
}

export default ProtectedRoute;