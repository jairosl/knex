import React from 'react';

import Image from 'next/image';
import Carousel from 'react-elastic-carousel';

import { Card } from './Card';
import { MembersContainer, MembersContent, ArrowButton } from './styles';

const carouselBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 720, itemsToShow: 2 },
    { width: 1180, itemsToShow: 3 }
];

export default function Members() {
    function customCarouselArrow(onClick, isEdge, isRight) {
        return (
            <ArrowButton onClick={onClick} disabled={isEdge} isRight={isRight}>
                <Image src="/assets/images/leftArrowIcon.svg" alt="<" height={79} width={49} />
            </ArrowButton>
        );
    }

    return (
        <MembersContainer id="members">
            <MembersContent>
                <h1>Membros</h1>

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Carousel>
            </MembersContent>
        </MembersContainer>
    );
}
