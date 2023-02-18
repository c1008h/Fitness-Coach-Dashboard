import React, { useState, FC } from "react";
// import { IResourceComponentsProps } from "@pankod/refine";
// import { useAsync } from "react-async-hook";
import { Box, Typography, Stack, FormControlLabel, FormControl, FormGroup, FormHelperText, TextField, TextareaAutosize, Select, MenuItem, Button} from '@pankod/refine-mui'
// import { FormProps } from 'interfaces/common'
// import { Coach, CoachInfoCardProps } from 'interfaces/coach'

const MyProfile = () => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [updatedCoach, setUpdatedCoach] = useState(coach);

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };
  // const handleSave = () => {
  //   onSave(updatedCoach);
  //   setIsEditing(false);
  // };

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setUpdatedCoach((prevUser) => ({ ...prevUser, [name]: value }));
  // };

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography fontSize={25} fontWeight={700} color='#11142d'>My Profile</Typography>
        <FormControl>
        <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Coach's Name</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                // {...register('firstname', {
                //   required: true
                // })}
              />
        </FormControl>
      </Stack>
    </Box>
  )
}

export default MyProfile