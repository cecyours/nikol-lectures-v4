import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const getCurrentUser = async () => {

        try {

            const response = await api.get(
                "/users/profile"
            );

            console.log("PROFILE:", response.data);

            setUser(response.data.user);

        } catch (error) {

            console.log(
                "PROFILE ERROR:",
                error.response?.data || error.message
            );

            setUser(null);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        getCurrentUser();
    }, []);


    const logout = async () => {

        try {

            await api.post("/auth/logout");

            setUser(null);

        } catch (error) {

            console.error(
                "Logout Error:",
                error
            );

        }
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                logout,
                getCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};