import React from "react"
import { useSelector } from "react-redux"
import { Box, Button, Typography, Container } from "@mui/material"

// TODO: create and bind redux actions to modify the counter
const IndexPage = () => {
  const counter = useSelector(state => state.count)
  return (
    <Container>
      <Typography variant="h3" align="center">
        Counter management
      </Typography>
      <Box mt={4} display="flex" justifyContent="center" flexDirection="column"
        alignItems="center">
        <Typography>
          Counter value : {counter}
        </Typography>
        <Box mt={1}>
          <Button variant="contained">
            Increment
          </Button>
          <Button variant="contained" sx={{ mx: 2 }}>
            Decrement
          </Button>
          <Button color="secondary" variant="contained">
            Reset
          </Button>
        </Box>
      </Box>
    </Container >
  )
}

export default IndexPage
