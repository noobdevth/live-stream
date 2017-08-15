import React from 'react'
import styled from 'styled-components'

import { fontFamily } from '../config'

const MenubarContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: 999;
    display: flex;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.5);
    
    ${this} > * {
        font-size: 20px;
        font-weight: bold;
        font-family: ${fontFamily};
    }
`

const Containter = styled.div`
    flex: 1;
    padding: 20px;
    color: ${props => (props.github) ? 'white' : 'black'};
    background: ${props => (props.github) ? '#333' : '#ffff'};
    
    ${this} > i {
        margin-right: 12px;
    }
`

export default class extends React.Component {
    render(){
       return(
          <MenubarContainer>
             <Containter>
                <i className='zmdi zmdi-twitter-box'></i>
                <span>Live Twitter</span>
             </Containter>
             <Containter github>
                <i className='zmdi zmdi-github-box'></i>
                <span>Live Github Commit</span>
             </Containter>
          </MenubarContainer>
       ) 
    }
}