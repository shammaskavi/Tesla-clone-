import React from 'react'
import styled from 'styled-components'

function Section({ title, description, LeftBtnText, RightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {LeftBtnText}
                    </LeftButton>
                    {RightBtnText &&
                        <RightButton>
                            {RightBtnText}
                        </RightButton>
                    }

                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>

        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const Buttons = styled.div`
    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 1.875em;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 2.5em;
    width: 16em;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6.25em;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    cursor: pointer;
    margin: 0.5em;

`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 2.5em;
    overflow-x: hidden;
    animation: downAnimation infinite 1.5s; 

`