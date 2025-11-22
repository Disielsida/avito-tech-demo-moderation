import type { PropsWithChildren } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container
} from '@mui/material';

export const AppLayout = ({ children }: PropsWithChildren) => (
  <>
    <CssBaseline />

    <AppBar position='static' color='primary' elevation={1}>
      <Toolbar>
        <Typography variant='h6'>Модерация объявлений</Typography>
      </Toolbar>
    </AppBar>

    <Box
      component='main'
      sx={(theme) => ({
        py: 3,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default
      })}
    >
      <Container maxWidth='lg'>{children}</Container>
    </Box>
  </>
);
