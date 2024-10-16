import { Box, Typography } from '@mui/material';
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function ContainerRegister() {
    return (
        <Box sx={{backgroundColor: '#fff', borderRadius: '8px'}}>
            <Typography sx={{fontSize: '1.05rem', fontWeight: '700', color: 'black'}}>Crie sua conta</Typography>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="Fisica" control={<Radio />} label="Pessoa Fisica" />
                <FormControlLabel value="Juridica" control={<Radio />} label="Pessoa Juridica" />
            </RadioGroup>
        </Box>
    )
}