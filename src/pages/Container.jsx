import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Content } from '../components/content'
import { fetchNews } from '../store/actions'

export const Container = () => {
    const dispatch = useDispatch()
    const searchRef = useRef()
    const { newsData } = useSelector(store => store)

    console.log(newsData)
    return (
        <Wrapper>
            <div className="input_wrapper">
                <TextField id="outlined-basic" inputRef={searchRef} label="Outlined" variant="outlined" />
                <Button onClick={() => dispatch(fetchNews(searchRef.current.value))} variant="outlined">Search</Button>
            </div>
            <div className="content_wrapper">
                <Content />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 50px;
    .input_wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
`