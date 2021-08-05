import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "3px",
        opacity: "1",
        padding: "80px 70px",
        
    },



}));

const Card = (props) => {
    const classes = useStyles();
    return (
        <div
            style={{
                background: props.background ? props.background : "#FFFFFF 0% 0% no-repeat padding-box",
                borderRadius: props.borderRadius ? props.borderRadius : "3px",
                border: props.border ? props.border : "1px solid #dedede",
                width: '90%',
                height: 'auto',
                opacity: "1",
                padding: "20px"
            }}
            className={props.className ? `${props.className} ${classes.root}` : classes.root}
        >
            <div className="profile-div">

                <div className="profile-photo">

                </div>

            </div>

            <div className="right-div">

                <div className="heading">{props.heading}</div>
                <div className="sub-heading">{props.subheading}</div>
                <div className="sub-heading-2">{props.subheading2}</div>

                <div className="toggle-lock-div">
                    <div className="toggle">
                    <FormGroup>
    
     {
         props.lockText ?  <FormControlLabel
         control={<Switch checked={props.checked} onChange={props.toggleHandler}  />}
       /> : null
     }
    </FormGroup>
                    </div>
                  {
                      props.lockText ?   <div className="lock">
                      <div className="lock-icon">
                          {
                              props.lockText == "locked" ? <LockIcon className="lock-text-green" /> : <LockOpenIcon className="lock-text-red" />
                          }
                      </div>
                      <div className={props.lockText=="locked" ? "lock-text-green" : "lock-text-red"}>{props.lockText=='locked' ? "Locked" : "Unlocked"}</div>
                  </div> : <div className="button-div"> 
                  <div className={props.buttonText=="UPCOMING" ? "button-upcoming" : "button-active"}> {props.buttonText}</div>
                  
                  </div>
                  }
                </div>

            </div>

        </div>
    );
};

export default Card;