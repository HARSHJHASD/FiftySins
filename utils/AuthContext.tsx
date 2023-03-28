import React, { createContext, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './firebase';
import useGlobalStore from '../store/global';

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const { setFirebaseUser, isLoading, setIsLoading } = useGlobalStore(
        (state) => state
    );
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            authentication,
            (userData: any) => {
                if (userData) {
                    setFirebaseUser(userData);
                } else {
                    setFirebaseUser(null);
                }
            }
        );
        setIsLoading(false);

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={useGlobalStore}>
            {isLoading ? null : children}
        </AuthContext.Provider>
    );
};
