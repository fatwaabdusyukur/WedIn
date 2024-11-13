import { createSlice } from "@reduxjs/toolkit";
import { sanitize } from "../../../services/sanitazion";
import { validate } from "../../../services/validation";
import { openAlert } from "../../alert/logic";
import { fetchPost, mutationData } from "../../../services/fetch-data";
import { router } from '../../../services/routing';

const validationFields = ['email', 'username', 'password', 'confirmPassword'];

const initialState = {
    login: { username: '', password: '' },
    register: { email: '', username: '', password: '', confirmPassword: '' },
    valid: Object.fromEntries(validationFields.map(field => [field, { status: true, message: '' }])),
    page: false,
    csrf: ''
};

const authFormSlice = createSlice({
    name: "authForm",
    initialState,
    reducers: {
        updateField(state, { payload: { field, value } }) {
            const [page, column] = field.split('-');
            state[page][column] = value;
        },
        cleanField(state) {
            Object.keys(state.login).forEach(key => {
                state.login[key] = '';
            });

            Object.keys(state.register).forEach(key => {
                state.register[key] = '';
            });
        },
        cleanValidate(state) {
            Object.keys(state.valid).forEach(key => {
                state.valid[key] = { status: true, message: '' }
            })
        },
        validateField(state, { payload: { field, value } }) {
            state.valid[field] = value;
        },
        switchPage(state) {
            state.page = !state.page;
        },
        setCsrf:  (state, { payload }) => {
            state.csrf = payload;
        }
    }
});

export const setSwitch = () => (dispatch, getState) => {
    dispatch(cleanField());
    dispatch(cleanValidate());
    dispatch(switchPage());
};

export const submitForm = (type) => async (dispatch, getState) => {
    const { login, register, csrf } = getState().authForm;

    try {
        
        if (type === 'login') {
            const cleanUsername = sanitize(login.username, ['trim', 'sql', 'escape']);
            const cleanPassword = sanitize(login.password, ['trim', 'sql', 'escape']);

            const usernameValidation = validate(cleanUsername, ['required'], 'Username');
            const passwordValidation = validate(cleanPassword, ['required'], 'Password');

            if (!usernameValidation.status || !passwordValidation.status) {
                dispatch(validateField({ field: 'username', value: usernameValidation }));
                dispatch(validateField({ field: 'password', value: passwordValidation }));
            } else {
                dispatch(cleanValidate());

                const { status, message } = await fetchPost('login', { username: cleanUsername, password: cleanPassword }, csrf);
                
                if (!status) {
                    dispatch(openAlert({ type: 'danger', message }));
                } else {
                    return router.navigate('/dashboard');
                }

            }
        } else {
            const cleanEmail = sanitize(register.email, ['trim', 'sql', 'email', 'escape']);
            const cleanUsername = sanitize(register.username, ['trim', 'sql', 'escape']);
            const cleanPW = sanitize(register.password, ['trim', 'sql', 'escape']);
            const cleanConfirmPw = sanitize(register.confirmPassword, ['trim', 'sql', 'escape']);

            const validations = [
                validate(cleanEmail, ['required', 'email'], 'Email'),
                validate(cleanUsername, ['required', 'min=3', 'max=30'], 'Username'),
                validate(cleanPW, ['required', 'min=8', 'max=50', 'strong', `match=${cleanConfirmPw}|Confirm Password`], 'Password'),
                validate(cleanConfirmPw, ['required', 'min=6', 'max=50', `match=${cleanPW}|Password`], 'Confirm Password'),
            ];

            const isValid = validations.every(validation => validation.status);

            if (!isValid) {
                validations.forEach((validation, index) => {
                    const field = ['email', 'username', 'password', 'confirmPassword'][index];
                    dispatch(validateField({ field, value: validation }));
                });
            } else {
                
                const  { signUp } = await mutationData("signUp", { email: cleanEmail, username: cleanUsername, password: cleanPW }, "status message", csrf);

                if (signUp.status) {
                    dispatch(cleanField());
                    document.querySelectorAll('input').forEach(input => input.value = '');
                    dispatch(openAlert({ type: 'success', message: signUp.message }));
                } else {
                    dispatch(openAlert({ type: 'danger', message: signUp.message }));
                }

            }

        }

    } catch (err) {
        console.error(err);
    }
};


export const { updateField, validateField, switchPage, cleanField, cleanValidate, setCsrf } = authFormSlice.actions;
export default authFormSlice.reducer;
