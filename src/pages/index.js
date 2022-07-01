import React from "react"
import { connect, useSelector } from "react-redux"
import { Box, Button, Typography, Container } from "@mui/material"
import iconImage from "../images/icon.png"

// TODO: create and bind redux actions to modify the counters

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const incrementCounter = () => ({
  type: INCREMENT
})
export const decrementCounter = () => ({
  type: DECREMENT
})
export const resetCounter = () => ({
  type: RESET
})

const IndexPage = ({ dispatch }) => {
  const counter = useSelector(state => state.counter)
  return (
    <Container>
      <Typography variant="h3" align="center">
        Counter management
      </Typography>
      <Box mt={4} display="flex" justifyContent="center" flexDirection="column"
        alignItems="center">
        <Box component="img" sx={{height: "200px", marginBottom: "50px"}} resizeMethod="resize" src={iconImage} alt="Logo"/>
        <Typography>
          Counter value : {counter}
        </Typography>
        <Box mt={1}>
          <Button variant="contained" onClick={ () => dispatch(incrementCounter())}>
            Increment
          </Button>
          <Button variant="contained" sx={{ mx: 2 }} onClick={ () => dispatch(decrementCounter())}>
            Decrement
          </Button>
          <Button color="secondary" variant="contained" onClick={() => dispatch(resetCounter())}>
            Reset
          </Button>
        </Box>
      </Box>
    </Container >
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps) (IndexPage)
