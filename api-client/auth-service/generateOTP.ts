import { signInWithEmailAndPassword } from 'firebase/auth';

import { authentication } from '../../utils/firebase';

export default (params) => {
    const { email, password } = params;

    signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => userCredential)
        .catch((error) => error.message);
};
