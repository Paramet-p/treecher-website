import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Whoami from '../config/whoami'

function Appbar() {

    let user = Whoami()

  return (
    <div>
      <Box component='div' sx={{ display: {xs: 'none', md: 'flex'}, position: 'sticky', top: 0}}>
        <Navbar user={user}/>
      </Box>
      <Outlet />
    </div>
  )
}

export default Appbar