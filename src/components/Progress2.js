import * as React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function QontoStepIcon(props) {
  const { active, completed } = props;

  if (active) {
    return <RadioButtonCheckedIcon className="ProgressBar-icons" />;
  } else if (completed) {
    return <CheckCircleOutlineIcon className="ProgressBar-icons" />;
  } else {
    return <RadioButtonUncheckedIcon className="ProgressBar-icons" />;
  }
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

export default function Steppers(props) {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={props.doneSteps}
        connector={
          <StepConnector
            sx={{
              left: "calc(-50% + 11px)",
              right: "calc(50% + 11px)",
            }}
          />
        }
      >
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
