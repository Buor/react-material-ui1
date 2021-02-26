import {
    FormControl,
    FormControlLabel,
    Grid,
    makeStyles,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../components/useForm.js";
import { FormLabel } from "@material-ui/core";
import Input from "../../components/controls/Input.js";

const initialFieldValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
};

export default function EmployeeForm() {
    const { values, setValues, handleInputChange } = useForm(
        initialFieldValues
    );

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        name="fullName"
                        label="Full Name"
                        values={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="email"
                        label="Email"
                        values={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    );
}
