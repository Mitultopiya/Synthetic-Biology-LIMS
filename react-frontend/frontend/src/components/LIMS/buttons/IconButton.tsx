import React from 'react';
import styled from 'styled-components';
// Material UI React Components
import { styled  as materialuistyled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Button = styled.button `
border: none;
background-color: transparent;
padding: 0.7rem;

&:hover {
  border-radius: 0.5rem;
  border: 1px solid rgb(144, 202, 249);
  cursor: pointer;
}
`

type IButtonProps = {
  src: any,
  alt: string;
  tooltip: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: any;
}

const LightTooltip = materialuistyled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const IconButton = (props: IButtonProps) => {
  return (
    <Button onClick={props.onClick} type={props.type}>
      <LightTooltip title={props.tooltip} placement='right' TransitionComponent={Zoom}>
        <img src={props.src} alt={props.alt}/>
      </LightTooltip>
    </Button>
  )
}

export default IconButton;