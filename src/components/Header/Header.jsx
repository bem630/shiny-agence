import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`
    }
`

const NavContainer = styled.nav`
  //border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`

const HomeLogo = styled.img`
  height: 70px;
`

export default function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  )
}