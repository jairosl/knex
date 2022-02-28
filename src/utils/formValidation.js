import * as yup from 'yup';
import { RegularExpressions } from './RegularExpression';

const { cellPhoneRegExp } = RegularExpressions;

export const contactUsValidations = yup.object().shape({
    name: yup.string().required('Campo Obrigatório'),
    city: yup.string().required('Campo Obrigatório'),
    email: yup.string().email().required('Campo Obrigatório'),
    phoneNumber: yup
        .string()
        .required()
        .matches(cellPhoneRegExp, 'Número de telefone não é válido'),
    userMessage: yup
        .string()
        .required('Campo Obrigatório')
        .min(4, 'Insira uma mensagem com mais 4 caracteres')
});
