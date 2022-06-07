import React from "react"
import { useSelector } from "react-redux"
import { Box } from "@mui/material"

const IndexPage = () => {
  const counter = useSelector(state => state.count)
  return (
    <Box>
      {counter}
    </Box>
  )
}

export default IndexPage
