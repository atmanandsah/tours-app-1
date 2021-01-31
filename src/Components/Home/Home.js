import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import './home.css'
const Home = () => {
  const classes = useStyles()
  return (
    <Box>
      Home
      <div className={classes.style1}>Styled Line</div>
      <Typography variant="h1">I'm typograpghy</Typography>
      <h3 className="header1">I'm h3</h3>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  style1: {
    color: 'red',
    fontSize: '18px'
  },
  class2: {
    background: 'green'
  }
}))

export default Home
