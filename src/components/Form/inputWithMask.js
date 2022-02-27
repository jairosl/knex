/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const InputWithMaskBase = (
    {
        name,
        formControlClassName,
        textFieldClassName,
        insideLabel,
        outsideLabel,
        hasError = null,
        w,
        h,
        fontSizeValue,
        helperFontSize,
        passwordAdornment = null,
        positionIconAdornment = null,
        inputMaskComponent = null,
        errorMessageMarginTop,
        errorMessageMarginLeft,
        inputMarginTop = '1rem',
        errorMessageWidth,
        ...restProps
    },
    ref
) => {
    return (
        <FormControl className={formControlClassName}>
            {!!outsideLabel && (
                <FormLabel
                    htmlFor={name}
                    sx={{ fontSize: helperFontSize, letterSpacing: 'normal' }}
                >
                    {outsideLabel}
                </FormLabel>
            )}

            <TextField
                className={textFieldClassName}
                size="medium"
                id={name}
                name={name}
                label={insideLabel}
                error={!!hasError}
                ref={ref}
                sx={{
                    width: w,
                    height: h,
                    marginTop: inputMarginTop
                }}
                InputProps={
                    passwordAdornment
                        ? {
                              endAdornment: passwordAdornment,
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              },
                              inputComponent: inputMaskComponent
                          }
                        : positionIconAdornment === 'end'
                        ? {
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              },
                              inputComponent: inputMaskComponent
                          }
                        : {
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              },
                              inputComponent: inputMaskComponent
                          }
                }
                InputLabelProps={{
                    sx: {
                        fontSize: fontSizeValue,
                        letterSpacing: 'normal'
                    }
                }}
                {...restProps}
            />

            {!!hasError && (
                <FormHelperText
                    sx={{
                        fontSize: helperFontSize,
                        letterSpacing: 'normal',
                        marginTop: errorMessageMarginTop,
                        marginLeft: errorMessageMarginLeft
                    }}
                    style={{ width: errorMessageWidth }}
                >
                    {hasError?.message}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export const InputWithMask = forwardRef(InputWithMaskBase);
