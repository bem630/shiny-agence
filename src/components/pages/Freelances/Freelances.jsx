import React from 'react'
import Card from '../../Card/Card'
import { freelanceProfiles } from '../../../data/fakeData'
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

export default function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {
          freelanceProfiles.map(({id,jobTitle,picture,name}) => (
            <Card
              key={id}
              label={jobTitle}
              picture={picture}
              title={name}
            />
          ) )
        }
      </CardsContainer>
    </div>
  )
}
