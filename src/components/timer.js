import React from 'react'
import styled from 'styled-components'

const TimerContainer = styled.div`
    position: absolute;
    z-index: 999999;
    background: rgba(0,0,0,0.9);
    color: white;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    font-family: sans-serif;
    font-size: 40px;
    padding: 20px 30px;
`

export default class extends React.Component {
    
    constructor(){
        super()
        this.state = {
            hours: 999,
            minites: 999,
            seconds: 999,
        }
    }
    
    updateTimer(){
        let countdown = this.props.end - (Date.now() / 1000)
        let hours = Math.floor(countdown / 3600)
        let minites = Math.floor((countdown % 3600) / 60)
        let seconds = Math.floor((countdown % 3600) % 60)
        this.setState({ hours, minites, seconds })
    }
    
    componentWillMount(){
        this.updateTimer()
        setInterval(() => {
            this.updateTimer()
        } ,1000)
    }
    
    render(){
        let { hours, minites, seconds } = this.state
        return(
            <TimerContainer>
                {hours <= 0 && minites <= 0 && seconds <= 0 ? (
                    <div>TIMEOUT!!!</div>
                ) : (
                    <div>
                        {hours <= 9 ? '0' + hours : hours } {` : `}
                        {minites <= 9 ? '0' + minites : minites } {` : `}
                        {seconds <= 9 ? '0' + seconds : seconds }
                    </div>
                )}
            </TimerContainer>
        )
    }
    
}