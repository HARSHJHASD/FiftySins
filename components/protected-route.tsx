import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useGlobalStore from '../store/global';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { fireBaseUser } = useGlobalStore((state) => state);

    useEffect(() => {
        if (!fireBaseUser?.uid) {
            router.push('/');
        }
    }, [router, fireBaseUser]);

    return <div>{fireBaseUser ? children : null}</div>;
};

export default ProtectedRoute;
