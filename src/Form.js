import React,{useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const Form = ({generateFunction}) => {

    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);

    function handleSubmit(e)
    {
        e.preventDefault();
        const totalCells = columns*rows;
        generateFunction(totalCells,columns,rows)
    }

  return (
    <Box p={5} textAlign="center" role="presentation" sx={{ backgroundColor: '#474648', height: '100vh', color: 'white' }}>
    <Typography variant="h6">Create video Wall</Typography>
    <form onSubmit={handleSubmit} className="form">
      <Stack sx={{ flexDirection: 'row', gap: '1rem' }}>
        <Stack sx={{ flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="subtitle1">Row</Typography>
          <TextField variant="outlined" inputProps={{ style: { color: 'white', width: '2rem' } }} onChange={(e) => setRows(e.target.value)} />
        </Stack>
        <Stack sx={{ flexDirection: 'column', gap: '1rem' }}>
          <Typography variant="subtitle1">Column</Typography>
          <TextField variant="outlined" inputProps={{ style: { color: 'white', width: '2rem' } }} onChange={(e) => setColumns(e.target.value)} />
        </Stack>
        <Stack sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">Create</Button>
        </Stack>
      </Stack>
    </form>
  </Box>
  )
}

export default Form
