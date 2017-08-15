import React from 'react'
import styled from 'styled-components'

import { fontFamily } from '../config' 

const CardContainer = styled.div`
    width: calc(100% - 30px);
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 2px solid #ddd;
`

const ProfileSection = styled.div`
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
        ${this} > h1 {
            margin: 0;
            font-size: 22px;
            font-family: ${fontFamily};
        }
        ${this} > span {
            font-family: ${fontFamily};
            color: #555;
        }
    }
`

const ContentSection = styled.div`
    font-family: ${fontFamily};
    margin-top: 15px;
    font-size: 25px;
`

export default class extends React.Component {
    render(){
        return(
            <CardContainer>
                <ProfileSection>
                    <img src='https://avatars3.githubusercontent.com/u/8079099?v=4&s=460'/>
                    <div>
                        <h1>Chun Rapeepat</h1>
                        <span>@chunza2542 (29 Jun 2017, 10:22)</span>
                    </div>
                </ProfileSection>
                <ContentSection>
                    Setting up MD Iconic Font can be as simple as adding one line of code to your website - it's like Font Awesome but with Material Design by Google. Also it plays nicely with Bootstrap 3!
                </ContentSection>
            </CardContainer>
        )
    }
}