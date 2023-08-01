import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const EstimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 525px;
  background-color: papayawhip;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  height: 80%;
  background-color: white;
`

const DrinkDdWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0 0 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`
const Estimation = () => {
  const [estimationData, setEstimationData] = useState(null)
  return (
    <>
      <Navbar />
      <EstimationContainer>
        <Wrapper>
          <Title>Get an customized accurate estimation for your event</Title>
          <Form>
            <div style={{ marginTop: '15px', width: '100%' }}>
              <FormControl fullWidth variant={'outlined'}>
                <InputLabel id='demo-select-small-label'>Event Type</InputLabel>
                <Select labelId='demo-select-small-label' id='demo-select-small' label='Type'>
                  <MenuItem value={'marriage'}>Marriage</MenuItem>
                  <MenuItem value={'rice-feeding'}>Rice Feeding</MenuItem>
                  <MenuItem value={'bratabandha'}>Bratabandha</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{ marginTop: '10px', width: '100%' }}>
              <FormLabel component='legend'>Select Liquor Types</FormLabel>
              <FormGroup style={{ display: 'flex', flexFlow: 'row nowrap' }}>
                <FormControlLabel control={<Checkbox />} label='Whiskey' />
                <FormControlLabel control={<Checkbox />} label='Wine' />
                <FormControlLabel control={<Checkbox />} label='Beer' />
                <FormControlLabel control={<Checkbox />} label='Soft Drinks' />
              </FormGroup>
            </div>

            <DrinkDdWrapper>
              <div style={{ marginTop: '15px', width: '24%' }}>
                <FormControl fullWidth variant={'outlined'}>
                  <InputLabel id='demo-select-small-label'>Whiskey</InputLabel>
                  <Select labelId='demo-select-small-label' id='demo-select-small' label='Whiskey'>
                    <MenuItem value={'jd'}>Jack Daniels</MenuItem>
                    <MenuItem value={'red'}>Red Label</MenuItem>
                    <MenuItem value={'black'}>Black Label</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div style={{ marginTop: '15px', width: '24%' }}>
                <FormControl fullWidth variant={'outlined'}>
                  <InputLabel id='demo-select-small-label'>Beer</InputLabel>
                  <Select labelId='demo-select-small-label' id='demo-select-small' label='Whiskey'>
                    <MenuItem value={'jd'}>Tuborg</MenuItem>
                    <MenuItem value={'red'}>Nepal ice</MenuItem>
                    <MenuItem value={'black'}>Gorkha strong</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div style={{ marginTop: '15px', width: '24%' }}>
                <FormControl fullWidth variant={'outlined'}>
                  <InputLabel id='demo-select-small-label'>Wine</InputLabel>
                  <Select labelId='demo-select-small-label' id='demo-select-small' label='Whiskey'>
                    <MenuItem value={'jd'}>Canvas</MenuItem>
                    <MenuItem value={'red'}>Big master</MenuItem>
                    <MenuItem value={'black'}>Stanley</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div style={{ marginTop: '15px', width: '24%' }}>
                <FormControl fullWidth variant={'outlined'}>
                  <InputLabel id='demo-select-small-label'>Soft Drinks</InputLabel>
                  <Select labelId='demo-select-small-label' id='demo-select-small' label='Whiskey'>
                    <MenuItem value={'jd'}>Coke</MenuItem>
                    <MenuItem value={'red'}>Real</MenuItem>
                    <MenuItem value={'black'}>Sprite</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </DrinkDdWrapper>

            <DrinkDdWrapper>
              <Input
                placeholder='Whiskey Quantity / Per Bottle'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Beer Quantity / Per Bottle'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Wine Quantity / Per Box'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Soft Drinks Quantity / Per Bottle'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
            </DrinkDdWrapper>

            <Divider style={{ width: '100%', marginTop: '10px' }} />

            <DrinkDdWrapper>
              <Input
                placeholder='Total Head Count'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Ladies'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Gents'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
              <Input
                placeholder='Kids'
                value={estimationData?.confirmPassword}
                type='number'
                onChange={(event) => {
                  setEstimationData({ ...estimationData, confirmPassword: event.target.value })
                }}
              />
            </DrinkDdWrapper>

            <Button style={{ margin: '15px auto' }}>Get Estimation</Button>
          </Form>
        </Wrapper>
      </EstimationContainer>
      <Footer />
    </>
  )
}

export default Estimation
