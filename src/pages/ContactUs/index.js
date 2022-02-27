/* eslint-disable react/prop-types */
import React, { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-unresolved
import Header from '../../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBody, FormSection, Button } from './styles';
import { contactUsValidations } from './FormValidation';
import NumberFormat from 'react-number-format';
import { InputWithMask } from '../../Components/Form/inputWithMask';
import { Input } from '../../Components/Form/input';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(contactUsValidations)
    });

    const CellPhoneFormatMask = forwardRef(function CellPhoneFormatMaskComponent(
        { name, onChange, value, ...restProps },
        ref
    ) {
        return (
            <NumberFormat
                {...restProps}
                name={name}
                id={name}
                getInputRef={ref}
                format="(##) # ####-####"
                mask="_"
                value={value}
                onChange={onChange}
            />
        );
    });

    const allErrors =
        !!errors.name ||
        !!errors.city ||
        !!errors.email ||
        !!errors.phoneNumber ||
        !!errors.userMessage;

    const sendDataRequest = (data) => {
        setIsLoading(true);

        if (!allErrors) {
            axios
                .post('/api/send', {
                    name: data.name,
                    subject: data.userMessage,
                    email: data.email,
                    contact: data.phoneNumber
                })
                .then(function () {
                    toast.success('Mensagem enviada com sucesso!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                    setIsLoading(false);
                    reset();
                })
                .catch(function () {
                    setIsLoading(false);
                    toast.error('Algo deu errado!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                });
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
            <Header />
            <FormBody onSubmit={handleSubmit(sendDataRequest)}>
                <div>
                    <h1>
                        Entre em contato conosco para <br />
                        fazer seu orçamento!
                    </h1>
                    <p>
                        Preencha os dados no formulário a seguir e entraremos em contato com você.
                    </p>
                    <FormSection>
                        <div className="organizer">
                            <Input
                                label="Nome"
                                variant="outlined"
                                {...register('name')}
                                hasError={errors.name}
                            />
                            <Input
                                label="Cidade"
                                variant="outlined"
                                {...register('city')}
                                hasError={errors.city}
                            />
                        </div>
                    </FormSection>
                    <FormSection>
                        <Input
                            label="Email"
                            variant="outlined"
                            {...register('email')}
                            hasError={errors.email}
                        />
                        <InputWithMask
                            label="Telefone"
                            variant="outlined"
                            {...register('phoneNumber')}
                            hasError={errors.phoneNumber}
                            inputMaskComponent={CellPhoneFormatMask}
                        />
                    </FormSection>

                    <Input
                        isTextArea
                        label="Deixe uma mensagem..."
                        variant="outlined"
                        {...register('userMessage')}
                        style={{ margin: '10px 0', width: '1085px' }}
                        hasError={errors.userMessage}
                    />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" disabled={isLoading}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </FormBody>
        </>
    );
}

export default ContactUs;
