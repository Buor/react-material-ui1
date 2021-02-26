import { Grid } from "@material-ui/core";
import React from "react";
import { useForm, Form } from "../../components/useForm.js";
import { Controls } from "../../components/controls/Controls.js";
import * as employeeService from "./../../services/employeeServices";
const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

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

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName?"":"This field is required";
        temp.email = (/$|.+@.+..+/).test(values.email) ? "":"Email is not valid";
        temp.mobile = values.mobile.length > 9 ?"" : "Minimum 9 numbers required";
        temp.departmentId = values.departmentId.length!=0 ? "" : "This field is required";
    }

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        values={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        values={values.email}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="mobile"
                        label="Mobile"
                        values={values.mobile}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="city"
                        label="City"
                        values={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    ></Controls.RadioGroup>

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button text="Submit" type="submit" />
                        <Controls.Button text="Reset" type="submit" color="default"/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
}
