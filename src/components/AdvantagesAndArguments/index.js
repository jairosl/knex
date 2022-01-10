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
    { width: 820, itemsToShow: 2 },
    { width: 1279, itemsToShow: 3 }
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
        imageUrl: '/assets/images/manAndWoman.webp',
        title: 'Fortaleça sua marca',
        text: 'Hoje é fundamental estar presente no ambiente digital. Garanta uma forte presença online! Se você não é visto, não é lembrado, não é falado, nem divulgado...'
    },
    {
        id: 3,
        imageUrl: '/assets/images/manAndWoman.webp',
        title: 'Fortaleça sua marca',
        text: 'Hoje é fundamental estar presente no ambiente digital. Garanta uma forte presença online! Se você não é visto, não é lembrado, não é falado, nem divulgado...'
    },
    {
        id: 4,
        imageUrl: '/assets/images/manAndWoman.webp',
        title: 'Fortaleça sua marca',
        text: 'Hoje é fundamental estar presente no ambiente digital. Garanta uma forte presença online! Se você não é visto, não é lembrado, não é falado, nem divulgado...'
    },
    {
        id: 5,
        imageUrl: '/assets/images/manAndWoman.webp',
        title: 'Fortaleça sua marca',
        text: 'Hoje é fundamental estar presente no ambiente digital. Garanta uma forte presença online! Se você não é visto, não é lembrado, não é falado, nem divulgado...'
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
        <AdvantagesAndArgumentsContainer>
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
                    itemPadding={[0, 30]}
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
