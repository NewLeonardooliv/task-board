import { AuthContext } from "@/contexts/auth.context";
import React from "react";

export const useAuth = () => {
    return React.useContext(AuthContext);
};