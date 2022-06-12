import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    width: 100%;
    height: 10vh;
    background: #3498db;
    padding-top: 10px

`

const Footer = () => {
  return (
    <Container>
        <Typography style={{marginTop: '10px', color: 'white', fontWeight: 600, fontSize:'20px'}}>
           Design By Developer @ Anirban Jana
        </Typography>

    </Container>
  )
}

export default Footer