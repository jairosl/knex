import * as Yup from 'yup';

const ApiRequest = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    contact: Yup.string().required(),
    subject: Yup.string().required()
});

export { ApiRequest };
