import React from "react";
import { Button, Stack } from "@mui/material";
import GroceryStore from '@mui/icons-material/LocalGroceryStore';
import { ThemeProvider,createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'default' },
          style: {
            backgroundColor:'#e0e0e0',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
          },
        },
      ],
    },
  },
  palette:{ 
    secondary:{ 
      main:'#455a64'
    },
    default:{
      main:'#e0e0e0',
      dark:'#aeaeae'
    },
    danger:{ 
      main:'#d32f2f',
      dark:'#9a0007',
      contrastText: '#fff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      {/* Button */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
          <Button variant='default'> Default</Button>
          <Button variant='default' sx={{backgroundColor: 'default.dark',}}> Default</Button>
        </Stack>
      </div>

      {/* Button Online */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" sx={{ backgroundColor: 'text.active' }}>Default</Button>
        </Stack>
      </div>

      {/* Button Text */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
        <Button variant="text">Default</Button>
        <Button variant="text">Default</Button>
        </Stack>
      </div>

      {/* Button disableShadow */}
      <div className="buttonDefault">
      <Button variant="contained" disableElevation>Default</Button>
      </div>

      {/* Button disabled */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
        <Button disabled variant="contained">Default</Button>
        <Button disabled variant="text">Default</Button>
        </Stack>
      </div>

      {/* Button startIcon */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
        <Button variant="contained" startIcon={<GroceryStore />}>Default</Button>
        <Button variant="contained" endIcon={<GroceryStore />}>Default</Button>
        </Stack>
      </div>

      {/* Button size */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
        <Button size="small" variant="contained">Default</Button>
        <Button size="medium" variant="contained">Default</Button>
        <Button size="large" variant="contained">Default</Button>
        </Stack>
      </div>

      {/* Button Color */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
          <Button variant="contained" color="default" >Default</Button>
          <Button variant="contained" color="primary" >Default</Button>
          <Button variant="contained" color="secondary">Default</Button>
          <Button variant="contained" color="danger">Default</Button>
        </Stack>
      </div>

      {/* Button hover */}
      <div className="buttonDefault">
        <Stack direction="row" spacing={25}>
          <Button variant="contained" sx={{backgroundColor: 'default.dark',}}>Default</Button>
          <Button variant="contained" sx={{backgroundColor: 'primary.dark',}}>Default</Button>
          <Button variant="contained" sx={{backgroundColor: 'secondary.dark',}}>Default</Button>
          <Button variant="contained" sx={{backgroundColor: 'danger.dark',}}>Default</Button>
        </Stack>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
