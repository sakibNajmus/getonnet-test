import React from 'react';
import './SwitchCard.css'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 22,
      height: 22,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#5F2EEA',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 22,
        height: 22,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#5F2EEA',
      },
    },
  });
  
  // Inspired by blueprintjs
  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#5F2EEA',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#5F2EEA',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          {...props}
        />
      );
    });

const SwitchCard = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <section className="switch mt-5 mb-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        />
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <RadioGroup>
                    <div className="d-flex justify-content-center align-items-center">
                        <FormControlLabel value="female" control={<StyledRadio />} />
                        <FormControlLabel value="male" control={<StyledRadio />} />
                    </div>
                    </RadioGroup>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        />
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        />
                        <FormControlLabel
                            control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchCard;