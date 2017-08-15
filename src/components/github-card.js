import React from 'react'
import styled from 'styled-components'
import { fontFamily } from '../config'

const CardContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #444;
    border: 1px solid #111;
    font-family: ${fontFamily};
    display: flex;
    
    ${this} > img {
        border-radius: 3px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        margin-right: 12px;
        border: 1px solid #000;
    }
    
    ${this} > div {
        flex: 1;
    }
`

const CardHeading = styled.a`
    display: block;
    margin: 0;
    font-weight: bold;
    font-size: 20px;
    font-family: ${fontFamily};
    margin-bottom: 7px;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const CardDescription = styled.span`
    color: #ccc;
    font-family: sans-serif;
    ${this} > b {
        color: white;
    }
`

export default class extends React.Component {
    
    render(){
        return(
            <div>
                <CardContainer>
                    <img src='https://avatars3.githubusercontent.com/u/8079099?v=4&s=460'/>
                    <div>
                        <CardHeading href='https://github.com'>Initialize Project using create-react-app</CardHeading>
                        <CardDescription><b>chunza2542</b> commited on 29 Jun 2017, 10:22</CardDescription>
                    </div>
                </CardContainer>
            </div>
        )
    }
    
}