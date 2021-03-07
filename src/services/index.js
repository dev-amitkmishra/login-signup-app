import axios from 'axios';
import bcrypt from 'bcryptjs';
import { LOGINPATH, SERVERURL, SIGNUPPATH, VALIDATEUSERPATH } from '../constants';

const axiosInstance = axios.create({
    baseURL: SERVERURL,
    timeout: 1000,
    validateStatus: function (status) {
        return status >= 200 && status <= 400;
    }
});

export const loginUser = data => (
	axiosInstance.post(LOGINPATH, data)
		.then(res => res.status)
)

export const signupUser = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axiosInstance.post(SIGNUPPATH, data)
        .then(res => res.status);
};

export const validateUsername = data => (
    axiosInstance.post(VALIDATEUSERPATH, data)
    .then(res => res.status)
);