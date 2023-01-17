import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="sticky"
            sx={{ bgcolor: '#4c8eca'}}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    spaIbgeReactRedux
                </Typography>
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
            </Typography>
            </Toolbar>
      </AppBar>
    </Box>
  );
}