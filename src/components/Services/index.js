import React from 'react';

import { ServicesCard } from './ServicesCard';

import ComputerIcon from '../../../public/assets/images/computerIcon.svg';
import ToolsIcon from '../../../public/assets/images/toolsIcon.svg';
import SearchIcon from '../../../public/assets/images/searchIcon.svg';

import { Cards, Container, Header } from './styles';

function Services() {
    return (
        <Container id="containerMain">
            <Header id="headerMain">
                <h2>Conheça os melhores serviços para a sua empresa!</h2>
                <p>
                    Desenvolver soluções com foco em tecnologias de qualidade, segurança e
                    responsividade conforme as demandas do cliente. Tais como desenvolvimento de
                    software e manutenção.
                </p>
            </Header>
            <Cards id="cardsMain">
                <ServicesCard
                    title="Desenvolvimento de Websites"
                    description="Com as melhores técnologias, conseguimos manter seu negócio de maneira digital para que possa atingir mais pessoas e independentemente do lugar."
                    imgPath={ComputerIcon}
                    imgAlternative="Ícone de computador"
                />
                <ServicesCard
                    title="Manutenção de Sites"
                    description="Seu site ou app precisa de uma evolução visual? Ou de uma otimização nas tarefas/operações realizadas? Temos uma solução pra você!"
                    imgPath={ToolsIcon}
                    imgAlternative="Ícone de Ferramentas"
                />
                <ServicesCard
                    title="Search Engine Optimization"
                    description="Você quer que seu site seja um destaque nos mecanismos de busca? Por meio das melhores práticas de estruturação da web nós resolvemos seu problema!"
                    imgPath={SearchIcon}
                    imgAlternative="Ícone de Lupa"
                />
            </Cards>
        </Container>
    );
}

export default Services;
