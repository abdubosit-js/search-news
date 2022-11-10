import { Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import styled from 'styled-components'
import { Content } from '../components/content'
import { fetchNews } from '../store/actions'
import dayjs from 'dayjs'

export const Container = () => {
    const searchRef = useRef()
    const inputToRef = useRef()
    const inputFromRef = useRef()
    const dispatch = useDispatch()
    const { newsData } = useSelector(store => store)
    const [valueFrom, setValueFrom] = React.useState(dayjs('2020-08-18T21:11:54'));
    const [valueTo, setValueTo] = React.useState(dayjs('2022-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValueFrom(newValue);
    };
    
    const handleChangeTo = (newValue) => {
      setValueTo(newValue);
    };

    function handleSearch() {
        console.log(inputToRef.current.value)
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

                <TextField id="outlined-basic" inputRef={searchRef} label="Outlined" variant="outlined" />
                <Button onClick={handleSearch} variant="outlined">Search</Button>
            </div>

            <div className="content_wrapper">
                {newsData.articles?.map((item) =>
                    <Content 
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