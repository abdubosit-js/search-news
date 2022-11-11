import React from 'react'
import styled from 'styled-components'

export const Content = (props) => {
    const { image, description, title } = props
    return (
        <Wrapper>
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

const Wrapper = styled.div`
    width: 100%;
    min-height: 214px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 20px;
    gap: 20px;
    .title-container {
        padding: 10px;
    }
    .img_container {
        img {
            width: 300px;
            height: 170px;
            object-fit: cover;
        }
    }
`