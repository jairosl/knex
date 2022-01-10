import React from 'react';
import Header from '../../components/Header';
import { FormBody, FormSection, Input, TextArea, Button } from './styles';

function ContactUs() {
  return (
    <>
      <Header />
      <FormBody>
        <div>
          <h1>Entre em contato conosco para <br />fazer seu orçamento!</h1>
          <p>Preencha os dados no formulário a seguir e entraremos em contato com você.</p>
          <FormSection>
            <Input placeholder='Nome' type="text" />
            <Input placeholder='Cidade' type="text" />
          </FormSection>
          <FormSection>
            <Input placeholder='Email' type="email" />
            <Input placeholder='Celular' type="tel" />
          </FormSection>
          <TextArea placeholder='Deixe uma mensagem'  />
          <div style={{display: "flex", justifyContent: "center"}}>
            <Button>Enviar</Button>
          </div>
        </div>
      </FormBody>
    </>
  )
}

export default ContactUs;