import React from 'react'
import Card from '../../Card/Card'
import { freelanceProfiles } from '../../../data/fakeData'

export default function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
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
    </div>
  )
}
