import './styles.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';

export function Material() {
  return (
    <div>
      <div className="wrapper">
        <div className="buttons-1">
          <Button variant="contained"> Button 1 </Button>
          <Button variant="contained"> Button 2</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className="buttons-2">
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </div>
        <div className="buttons-3">
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div className="disable-elevation">
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
        </div>
        <div className="outlined-button">
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </div>
        <div className="handling-clicks">
          <Button
            onClick={() => {
              alert('clicked');
            }}
          >
            Click me
          </Button>
        </div>
        <div className="color-buttons">
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
        <div className="size-buttons">
          <Box sx={{ '& button': { m: 1 } }}>
            <div>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
            <div>
              <Button variant="outlined" size="small">
                Small
              </Button>
              <Button variant="outlined" size="medium">
                Medium
              </Button>
              <Button variant="outlined" size="large">
                Large
              </Button>
            </div>
            <div>
              <Button variant="contained" size="small">
                Small
              </Button>
              <Button variant="contained" size="medium">
                Medium
              </Button>
              <Button variant="contained" size="large">
                Large
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
