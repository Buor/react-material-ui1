import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
    const { name, label, value, error=null, onChange, options, ...other} = props;

    return (
        <FormControl variant="outlined" error={error ?? error}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                value={value}
                onChange={onChange}
                label={label}
            >
                <MenuItem value="">None</MenuItem>
                {options.map((item) => {
                    return <MenuItem key={item.id} value={item.id}>
                        {item.title}
                    </MenuItem>;
                })}
            </MuiSelect>
            <FormHelperText>{error ?? error}</FormHelperText>
        </FormControl>
    );
}
