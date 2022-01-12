import React from 'react';
import Image from 'next/image';

import Carousel from 'react-elastic-carousel';
import { Card } from './Card/index.js';

import {
    TextBox,
    Title,
    Text,
    AdvantagesAndArgumentsContainer,
    AdvantagesAndArgumentsContent,
    ArrowButton
} from './styles.js';

const carouselBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 720, itemsToShow: 2 },
    { width: 1180, itemsToShow: 3 }
];
//só pra simular o map
const data = [
    {
        id: 1,
        imageUrl: '/assets/images/manAndWoman.webp',
        title: 'Fortaleça sua marca',
        text: 'Hoje é fundamental estar presente no ambiente digital. Garanta uma forte presença online! Se você não é visto, não é lembrado, não é falado, nem divulgado...'
    },
    {
        id: 2,
        imageUrl: '/assets/images/workTeam.webp',
        title: 'Seu negócio aberto 24h',
        text: 'Quanto custaria para o seu negócio se manter aberto 24h a fim de atender todos que precisassem do seu produto ou serviço ou até mesmo de uma informação? Com um site isso é possível!'
    },
    {
        id: 3,
        imageUrl: '/assets/images/childAndMom.webp',
        title: 'Aumente o seu alcance',
        text: 'Com um site, aliado as ferramentas de SEO que utilizamos em nossos produdos. O seu negócio irá aparecer em pesquisas na internet, alcançando um mundo de possibilidades.'
    }
];

function AdvantagesAndArguments() {
    function customCarouselArrow(onClick, isEdge, isRight) {
        return (
            <ArrowButton onClick={onClick} disabled={isEdge} isRight={isRight}>
                <Image src="/assets/images/leftArrowIcon.svg" alt="<" height={79} width={49} />
            </ArrowButton>
        );
    }

    return (
        <AdvantagesAndArgumentsContainer id="advantages">
            <AdvantagesAndArgumentsContent>
                <TextBox>
                    <Title>Ajudamos você a alcançar os objetivos e metas da sua empresa</Title>
                    <Text>
                        Utilizando as melhores tecnologias do mercado, conseguimos fazer com que seu
                        site tenha um ótimo desempenho e que forneça uma excelente experiência de
                        uso para o usuário.{' '}
                    </Text>
                </TextBox>
                <Carousel
                    breakPoints={carouselBreakPoints}
                    pagination={false}
                    itemPadding={[0, 16]}
                    renderArrow={({ type, onClick, isEdge }) =>
                        type === 'PREV'
                            ? customCarouselArrow(onClick, isEdge)
                            : customCarouselArrow(onClick, isEdge, true)
                    }
                >
                    {data.map((element) => (
                        <Card
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            text={element.text}
                        />
                    ))}
                </Carousel>
            </AdvantagesAndArgumentsContent>
        </AdvantagesAndArgumentsContainer>
    );
}

export default AdvantagesAndArguments;
