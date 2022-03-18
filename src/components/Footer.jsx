import styled from 'styled-components'

function Footer() {

  return (
    <FooterContainer>
      <Paragraph>© Copyrights 2019 Stack. All Rights Reserved.</Paragraph>
      <List>
        <ListItem>
          <ListItemLink href='/'>
            <Phrase>Privacy Policy</Phrase>
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink href='/'>
            <Phrase>Terms and Conditions</Phrase>
          </ListItemLink>
        </ListItem>
      </List>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 16vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FFF;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  `

  const Paragraph = styled.p`
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  color: #1D164d;

  @media (max-width: 381px) {
      font-size: 10px;
  }
  `

  const List = styled.ul`
  display: flex;
  justify-content: space-between;
  `

  const ListItem = styled.li`
  list-style-type: none;
  padding: 15px; 

  @media (max-width: 381px) {
    padding: 10px;
  }
  `

  const ListItemLink = styled.a`
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: #9E9BAF;

  @media (max-width: 381px) {
    font-size: 10px;
  }
  `

  const Phrase = styled.span`
  
  `


export default Footer