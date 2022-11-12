import React from 'react'
import styled from 'styled-components'

export const Content = (props) => {
    const { image, description, title, item } = props

    return (
        <Wrapper href={item.url}>
            <div className="img_container">
                <img src={image} alt="" />
            </div>

            <div className="title-container">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.a`
    width: 100%;
    min-height: 214px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    margin-bottom: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 20px;
    gap: 20px;
    .title-container {
        padding: 10px;
    }
    .img_container {
        width: 100%;
        max-width: 300px;
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
`