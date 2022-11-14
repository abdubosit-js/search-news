import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import styled from 'styled-components'
import { Content } from '../components/content'
import { fetchNews } from '../store/actions'
import dayjs from 'dayjs'
import moment from 'moment'

export const Container = () => {
    const searchRef = useRef()
    const inputToRef = useRef()
    const inputFromRef = useRef()
    const dispatch = useDispatch()
    const { newsData } = useSelector(store => store)
    const date = new Date()
    const [valueFrom, setValueFrom] = useState(dayjs(moment(date).startOf("month").format("YYYY-DD-MM")));
    const [valueTo, setValueTo] = useState(dayjs(moment(date).format("YYYY-DD-MM")));
    const [searchValueHandle, setSearchValueHandle] = useState(false)

    const handleChange = (newValue) => {
        setValueFrom(newValue);
    };
    
    const handleChangeTo = (newValue) => {
        setValueTo(newValue);
    };
        
    function handleSearch() {
        dispatch(fetchNews({
            searchValue: searchRef.current.value,
            inputFrom: inputFromRef.current.value,
            inputTo: inputToRef.current.value
        }))
    }

    console.log(newsData)
    return (
        <Wrapper>
            <div className="input_wrapper">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="from"
                            inputFormat="YYYY-DD-MM"
                            inputRef={inputFromRef}
                            value={valueFrom}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="to"
                            inputFormat="YYYY-DD-MM"
                            inputRef={inputToRef}
                            value={valueTo}
                            onChange={handleChangeTo}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>

                <TextField id="outlined-basic" inputRef={searchRef} onChange={() => setSearchValueHandle(true)} label="Outlined" variant="outlined" />
                {searchValueHandle ? 
                    <Button onClick={handleSearch} variant="outlined">Search</Button> 
                :
                    <Button disabled variant="outlined">Search</Button>
                }
            </div>

            <div className="content_wrapper">
                {newsData.articles?.map((item) =>
                    <Content 
                        key={Math.random()}
                        item={item}
                        image={item.urlToImage}
                        title={item.title}
                        description={item.description}
                    />
                )}
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
        margin-bottom: 40px;
    }
`