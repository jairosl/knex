import React from 'react';

import Image from 'next/image';
import Carousel from 'react-elastic-carousel';

import { Card } from './Card';
import { MembersContainer, MembersContent, Title, ArrowButton } from './styles';

const carouselBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 720, itemsToShow: 2 },
    { width: 1180, itemsToShow: 3 }
];

const members = [
    {
        name: 'Samuel',
        memberPhoto:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFEFoJrjTJ5Tw/profile-displayphoto-shrink_200_200/0/1629817412510?e=1648080000&v=beta&t=0mDExxTmKFoMyACIUCSjQhbHu5cTaA562lHAlY71Z-g',
        job: 'Presidente',
        linkedin: 'samuel-alves-medeiros-235461217'
    },
    {
        name: 'Márcio',
        memberPhoto:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHNPZFYiwiZ4g/profile-displayphoto-shrink_200_200/0/1594083138916?e=1648080000&v=beta&t=E53ucq9An16GV5a3gLZGLwKWINJ6Tb7NcfR-YOmdMFo',
        job: 'Diretor de projetos',
        linkedin: 'marciobwf'
    },
    {
        name: 'Giovanna',
        memberPhoto:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGUJ9SuQlZC9g/profile-displayphoto-shrink_200_200/0/1633009364339?e=1648080000&v=beta&t=uT4PhckHXYD-6Iaa-YUZ4UvFxKHhepZXUEi1pscu7N0',
        job: 'Diretora de Marketing',
        linkedin: 'giovannatrigueiro'
    },
    {
        name: 'Jairo',
        memberPhoto:
            'https://media-exp1.licdn.com/dms/image/C4E03AQGPCvuNhoWkHA/profile-displayphoto-shrink_200_200/0/1632570794654?e=1648080000&v=beta&t=bUCMelbv-N-Xi8AL7LjLF124sdsOEn6jiXA76C2EVcY',
        job: 'Desenvolvedor',
        linkedin: 'jairosl'
    },
    {
        name: 'Natan Cavalcante',
        memberPhoto:
            'https://media-exp1.licdn.com/dms/image/C5635AQHP7gRKzvBSeA/profile-framedphoto-shrink_200_200/0/1620350234083?e=1642618800&v=beta&t=nEmGN5LtvkxbxAB8vZ9dpSTdF-9cKuFr2fXKh0v-UXw',
        job: 'Adm fin',
        linkedin: 'natan-cavalcante'
    }
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
                <Title>Membros</Title>

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
                    {members.map((member) => (
                        <Card
                            name={member.name}
                            job={member.job}
                            image={member.memberPhoto}
                            linkedin={member.linkedin}
                        />
                    ))}
                </Carousel>
            </MembersContent>
        </MembersContainer>
    );
}
