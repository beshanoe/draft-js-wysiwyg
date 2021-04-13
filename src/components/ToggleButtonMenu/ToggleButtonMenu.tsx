import React from 'react';
import {
  Button,
  Popper,
  PopperProps,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import {
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '../ToggleButtonGroup';
import isValueSelected from '../ToggleButtonGroup/isValueSelected';

export interface ToggleButtonMenuProps {
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  popperProps?: PopperProps;
  toggleButtonGroupProps?: Omit<ToggleButtonGroupProps, 'children'>;
  children?: React.ReactNode;
  defaultValue?: string | string[];
}

const ToggleButtonMenu = ({
  openIcon = <ArrowDropUp />,
  closeIcon = <ArrowDropDown />,
  popperProps,
  toggleButtonGroupProps,
  children,
}: ToggleButtonMenuProps) => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (toggleButtonGroupProps?.exclusive) {
      setOpen(false);
    }
  };

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        endIcon={open ? openIcon : closeIcon}
        variant="contained"
        onClick={handleToggle}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          if (
            isValueSelected(child.props.value, toggleButtonGroupProps?.value)
          ) {
            return child.props.children;
          }
        })}
      </Button>
      <Popper
        style={{ zIndex: 2 }}
        anchorEl={anchorRef.current}
        open={open}
        {...popperProps}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <ToggleButtonGroup
              orientation="vertical"
              {...toggleButtonGroupProps}
            >
              {React.Children.map(children, (child: any, key) => {
                if (child) {
                  return React.cloneElement(child, {
                    onClick: handleClick,
                  });
                }
              })}
            </ToggleButtonGroup>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

export default ToggleButtonMenu;
