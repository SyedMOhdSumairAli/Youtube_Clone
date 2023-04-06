import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { fetchAPI } from './utils/fetchAPI';
import { Sidebar, Video } from './index';
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideo(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: ' 1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className='copyrigh' variant='body2' sx={{ mt: 1.5, color: '#ffff' }}>

        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: "#F31503" }}>Video</span>
        </Typography>
        <Video video={video} />
      </Box>
    </Stack>
  )
}

export default Feed
