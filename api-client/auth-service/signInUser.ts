import { signInWithEmailAndPassword } from 'firebase/auth';

import { authentication } from '../../utils/firebase';

export default (params) => {
    const { email, password } = params;

    return signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => userCredential)
        .catch((error) => error);
};
