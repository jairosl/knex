/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-nested-ternary */
import { FormControl, FormHelperText, FormLabel, TextField } from '@mui/material';
import React, { forwardRef } from 'react';

const InputBase = (
    {
        name,
        formControlClassName,
        textFieldClassName,
        insideLabel,
        outsideLabel,
        hasError = null,
        w,
        h,
        isTextArea,
        fontSizeValue,
        helperFontSize,
        passwordAdornment = null,
        positionIconAdornment = null,
        onChange = undefined,
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
                variant="outlined"
                label={insideLabel}
                error={!!hasError}
                ref={ref}
                fullWidth={isTextArea}
                multiline={isTextArea}
                rows={isTextArea ? 10 : 0}
                sx={{
                    width: w,
                    height: h,
                    marginTop: inputMarginTop
                }}
                onChange={onChange}
                InputProps={
                    passwordAdornment
                        ? {
                              endAdornment: passwordAdornment,
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              }
                          }
                        : positionIconAdornment === 'end'
                        ? {
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              }
                          }
                        : {
                              sx: {
                                  fontSize: fontSizeValue,
                                  letterSpacing: 'normal'
                              }
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
                    {hasError.message}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export const Input = forwardRef(InputBase);
