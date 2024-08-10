import { Stack } from '@mui/material'
import React from 'react'

function StackSample() {
    return <>
        <Stack direction="column" spacing={2}>
            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
                <h1>Türkiye</h1>
                <h1>Yunanistan</h1>
                <h1>Almanya</h1>
                <h1>Suriye</h1>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
                <h1>Ankara</h1>
                <h1>Atina</h1>
                <h1>Berlin</h1>
                <h1>Şam</h1>
            </Stack>
        </Stack>

    </>
}

export default StackSample