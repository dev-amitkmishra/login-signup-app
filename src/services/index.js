import axios from 'axios';
import bcrypt from 'bcryptjs';
import { LOGINPATH, SERVERURL, SIGNUPPATH, VALIDATEUSERPATH } from '../constants';

export const loginUser = data => (
	axios.post(`${SERVERURL}${LOGINPATH}`, data)
		.then(res => res.status)
)

export const registerUser = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post(`${SERVERURL}${SIGNUPPATH}`, data)
        .then(res => res.status);
};

export const validateUsername = data => (
    axios.post(`${SERVERURL}${VALIDATEUSERPATH}`, data)
    .then(res => res.status)
);