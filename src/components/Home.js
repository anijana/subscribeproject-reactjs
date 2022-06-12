import React from 'react'
import { data } from './data'
import {Box, Typography, styled, Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Image = styled('img')({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
})

const Container = styled(Box)`
    height: 47vh;
    padding: 15px 10px;
    border: 1px solid black;
    margin: 15px;
    
`
const Main = styled(Box)`
display: grid;
grid-template-columns: 400px 400px;
margin-left: 300px;

`
const Text = styled(Typography)`
    max-width: 250px;
    test-align: center;
    margin: 12px 50px;


`
const ClickBtn = styled(Button)`
    width: 100%;

`

const Home = () => {
  return (

    <Main>
        {
            data.map(elem => (
                <Container>
                    <Image src={elem.url} alt='imageURL'/>
                    <Text>{elem.title}</Text>
                    <Link to={`details/${elem.id}`} style={{textDecoration: 'none'}}>
                     <ClickBtn variant='outlined'>Click Here</ClickBtn>
                    </Link>
                </Container>
            ))
        }

    </Main>
  )
}

export default Home