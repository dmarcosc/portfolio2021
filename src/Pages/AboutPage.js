import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import Title from '../Components/Title'

export default function AboutPage() {
    return (

        <MainLayout>
            <AboutStyled>
                <Title title={'About me'} span={'About Me'}/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
`
