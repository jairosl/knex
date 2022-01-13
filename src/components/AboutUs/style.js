import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 0.9em;
    
    
    @media screen and (max-width: 600px) {
          padding-bottom: 15rem;
    }
    @media screen and (max-width: 400px) {
          padding-bottom: 20rem;
    }
  
   

`;

export const LeftCol = styled.div`
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
          height: 100%;
  }

`

export const MainText = styled.div`
    width: 80%;
    margin-right: 1rem;

    h1 {
        font-size: 48px;
        margin: 0;

        @media screen and (max-width: 600px) {
          text-align: center;
        }

        @media screen and (max-width: 910px) {
          font-size: 2.5rem;
          line-height: 56px;
        }
    }
    p {
        
        color: var(--gray);
        width:100%;
        
    }

    @media screen and (max-width: 800px) {
            margin: 0;
            text-align: center;
    }

    @media screen and (max-width: 910px) {
        width: 100%;
        margin-right: 1rem;

    }
`;
export const SubText = styled.div`
    width: 100%;
    display: flex;

    h3{
        margin-block: 0;
    }

    p {
        color: var(--gray);
        width: 85%;
        @media screen and (max-width: 800px) {
          text-align: center;
        }

        @media screen and (max-width: 910px) {
        width: 85%;
    }
       
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 40%;

        @media screen and (max-width: 800px) {
          margin: 0 auto;
          align-items: center;
          width: 80%;
       
      }


    }

    @media screen and (max-width: 800px) {
      margin: 0 auto;
      display: block;

       
    }

    @media screen and (max-width: 910px) {
        width: 100%;
        margin-right: 1rem ;
    }
`;

export const RightCol = styled.div`
  width: 33%;
  @media screen and (max-width: 800px) {
      display: none ;
  }

`
