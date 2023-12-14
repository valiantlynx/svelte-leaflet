import { useState } from 'react';
import {  getOurUsersPage, server } from '../../../api/axios';
import { useQuery } from '@tanstack/react-query';
import { TextInput, Box, Button, Loader, Text } from '@mantine/core';

function UsersEditable() {
  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(['/'], async () => await getOurUsersPage(), {
    keepPreviousData: true
  });

  const [formData, setFormData] = useState({}); // initialize an empty formData object
  const handleInputChange = (event, userId) => {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "role") {
      // if the field being updated is "role", split the string value by comma to create an array of strings
      const roleValues = value.split(",");
      newValue = roleValues.map(val => parseInt(val, 10));
    }
    setFormData(prevState => ({
      ...prevState,
      [userId]: {
        ...prevState[userId],
        [name]: newValue
      }
    }));

  };
  console.log("formData", formData);
  

  const handleSubmit = async (userId) => {
    try {
      const userData = { _id: userId, ...formData[userId] }; // include the user ID in the data
      const updatedData = await server.post("/api/users", userData); // send the entire data object
      console.log(updatedData); // log the server response
    } catch (error) {
      console.log(error); // handle errors
    }
  };
  

  if (isLoading) return <Loader color="yellow" size="xl" variant="bars" />;

  if (isError) {
    return (
      <h2>
        Error: {error.response.data.valideringsfeil[0].feilmelding}, vennligst,
        Last siden på nytt
      </h2>
    );
  }

  return (
    <div>
      {users.map(user => (
        <Box key={user._id}>
          <Text>{user.name}</Text>
          <TextInput
            name="name"
            placeholder="Enter name"
            value={formData[user._id]?.name || user.name} // use the form data if available, otherwise use the original data from the API
            onChange={event => handleInputChange(event, user._id)}
          />
          <TextInput
            name="email"
            placeholder="Enter email"
            value={formData[user._id]?.email || user.email}
            onChange={event => handleInputChange(event, user._id)}
          />
           <TextInput
            name="role"
            placeholder="Enter role"
            value={formData[user._id]?.role || user.role}
            onChange={event => handleInputChange(event, user._id)}
          />
          <Button variant="outline" onClick={() => handleSubmit(user._id)}>
            Save
          </Button>
        </Box>
      ))}
    </div>
  );
}

export default UsersEditable;
