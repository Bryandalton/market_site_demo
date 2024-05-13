import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    

`

export default function Header() {
    return(
        <>
        <HeaderDiv>
        <img src='basket_logo.png'></img>
        <h1>Fart Market</h1>
        <h6>Login/Signup</h6>
        </HeaderDiv>
        </>
    )
}