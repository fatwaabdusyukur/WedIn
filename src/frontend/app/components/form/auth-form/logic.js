import { createSlice } from "@reduxjs/toolkit";
import { sanitize } from "../../../services/sanitazion";
import { validate } from "../../../services/validation";
import { openAlert } from "../../alert/logic";

const validationFields = ['email', 'username', 'password', 'confirmPassword'];

const initialState = {
    login: { username: '', password: '' },
    register: { email: '', username: '', password: '', confirmPassword: '' },
    valid: Object.fromEntries(validationFields.map(field => [field, { status: true, message: '' }])),
    page: false,
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
        }
    }
});

export const setSwitch = () => (dispatch, getState) => {
    dispatch(cleanField());
    dispatch(cleanValidate());
    dispatch(switchPage());
};

export const submitForm = (type) => (dispatch, getState) => {
    const { login, register } = getState().authForm;

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
                dispatch(openAlert({ type: 'success', message: 'Congratulations, you have logged in successfully!' }));
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
                dispatch(cleanValidate());
                dispatch(openAlert({ type: 'success', message: 'Congratulations, you have registered successfully!' }));
            }

        }

    } catch (error) {
        console.error(`Error when submitting form: ${error}`);
    }
};


export const { updateField, validateField, switchPage, cleanField, cleanValidate } = authFormSlice.actions;
export default authFormSlice.reducer;
