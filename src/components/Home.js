import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Onlie for Touchless Delivery"
                backgroundImg="model-S.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Onlie for Touchless Delivery"
                backgroundImg="model-y.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Onlie for Touchless Delivery"
                backgroundImg="model-3.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Onlie for Touchless Delivery"
                backgroundImg="model-X.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                LeftBtnText="Shop Now"
                RightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`