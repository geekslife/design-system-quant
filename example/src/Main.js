import React, { useState } from 'react'
import {
  Typography,
  Button,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Tabs,
  Tab,
  TabPanel,
  Alert,
  Autocomplete,
  makeStyles
} from 'design-system-quant'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120
  }
}))

export const Main = () => {
  const [age, setAge] = useState('')
  const [value, setValue] = useState(0)
  const classes = useStyles()

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ]

  const autocomplete = [{ name: 'namyoonbok' }, { name: 'jinyena' }]

  return (
    <>
      <Autocomplete
        options={autocomplete}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='name' />}
      />
      <Typography variant='h6'>버튼</Typography>
      <br />
      <Button>버튼입니다</Button>
      <br />
      <br />
      <Button variant='contained'>버튼입니다</Button>
      <br />
      <br />
      <br />
      <Typography variant='h6'>테이블</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <Typography variant='h6'>텍스트필드</Typography>
      <TextField label='텍스트필드' size='small' />
      <br />
      <br />
      <br />
      <Typography variant='h6'>셀렉트</Typography>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id='select'>Age</InputLabel>
        <Select
          value={age}
          onChange={({ target: { value } }) => setAge(value)}
          labelId='select'
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <br />
      <Typography variant='h6'>뱃지</Typography>
      <br />
      <Chip label='Basic' />
      <br />
      <br />
      <Chip label='Basic' variant='outlined' />
      <br />
      <br />
      <br />
      <Typography variant='h6'>탭</Typography>
      <br />
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label='Tab1' />
        <Tab label='Tab2' />
        <Tab label='Tab3' />
      </Tabs>
      <TabPanel value={value} index={0}>
        1
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
      <TabPanel value={value} index={3}>
        4
      </TabPanel>
      <br />
      <br />
      <Typography variant='h6'>알럿</Typography>
      <br />
      <Alert severity='error'>This is an error message!</Alert>
    </>
  )
}
