import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginLeft: 20
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function LineWidth({selectedLineSize,setSelectedLineSize,LineSizes}) {

    const classes = useStyles();
  return <div>

    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Brush Sizes</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedLineSize}
            onChange={(e) => setSelectedLineSize(e.target.value)}
            label="Brush Sizes"
            
          >

            {LineSizes.map((val,key) => {
              return(
                <MenuItem key={key} value={val}>{val}px</MenuItem>
              )
            })}
          </Select>
      </FormControl>
  </div>;
}
