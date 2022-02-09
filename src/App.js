import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  const [value, setValue] = React.useState([null, null]);

  const year = new Date().getFullYear();

  return (
    <>
      <Container>
        <h1>Leave Days</h1>
        <p>To help you get the most out of your leave days.</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            calendars={1}
            value={value}
            defaultCalendarMonth={new Date(year, 0)}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            calendars={1}
            value={value}
            defaultCalendarMonth={new Date(year, 1)}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            calendars={1}
            value={value}
            defaultCalendarMonth={new Date(year, 2)}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </Container>
    </>
  );
}

export default App;
