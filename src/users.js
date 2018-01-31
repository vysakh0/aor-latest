import React from 'react';
import {
  List,
  TextInput,
  DateInput,
  EditButton,
  SimpleForm,
  Edit,
  Datagrid,
  TextField
} from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <EditButton basePath="/User" />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
      <Edit  {...props}>
        <SimpleForm >
          <TextInput source="name" />
          <TextInput source="phone" label="email" />
          <TextInput source="employeeNumber" />
          <TextInput source="fathersName" />
          <TextInput source="address" />
          <TextInput source="phoneNumber" />
          <DateInput source="dateOfBirth" />
          <TextInput source="jobTitle" />
          <TextInput source="department" />
          <TextInput source="shift" />
          <DateInput source="dateOfCommencement" />
          <TextInput source="wagePerHour" />
        </SimpleForm>
    </Edit>
)
