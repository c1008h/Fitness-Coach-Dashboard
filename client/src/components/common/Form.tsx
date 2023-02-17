import { Box, Typography, 
  FormControlLabel, FormControl, FormGroup, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, clientImage }: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142d'>
        {type} a Client
      </Typography>
      <Box mt={2.5} borderRadius='15px' padding='28px' bgcolor='#fcfcfc'>
        <form style={{
          marginTop: '28px', 
          width: '100%', 
          display:'flex', 
          flexDirection: 'column',
          gap:'20px'
        }} onSubmit={handleSubmit(onFinishHandler)}>
          <Stack direction='row' gap={4}>
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Client First Name</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                {...register('firstname', {
                  required: true
                })}
              />
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Client Last Name</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                {...register('lastname', {
                  required: true
                })}
              />
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Birthday</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                {...register('birthday', {
                  required: true
                })}
              />
            </FormControl>
            
          </Stack>
          <Stack direction='row' gap={4}>
          <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Sex</FormHelperText>
             <Select
                variant='outlined' color='info' displayEmpty required inputProps={{ 'aria-label': 'Without label'}}
                defaultValue='female' {...register('sex', {required: true})}
              >
                <MenuItem value='female'>Female</MenuItem>
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='prefernottoanswer'>Prefer Not to Answer</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Weight (lb)</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                {...register('weight', {
                  required: true
                })}
              />
             
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
              }}>Height (ft)</FormHelperText>
              <TextField 
                fullWidth
                required
                id='outlined-basic'
                color='info'
                variant='outlined'
                {...register('height', {
                  required: true
                })}
              />
             
            </FormControl>
          </Stack>
          
          <Stack direction='row' gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
                Select Client Goal
              </FormHelperText>
              <Select
                variant='outlined' color='info' displayEmpty required inputProps={{ 'aria-label': 'Without label'}}
                defaultValue='stayhealthy' {...register('goalType', {required: true})}
              >
                <MenuItem value='stayhealthy'>Health</MenuItem>
                <MenuItem value='maintainWeight '>Maintain Weight</MenuItem>
                <MenuItem value='losefat '>Lose Body Fat</MenuItem>
                <MenuItem value='increaseleanmusclemass'>Increase Lean Muscle Mass</MenuItem>
                <MenuItem value='performance'>Performance</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
                Set Date to Reach Goal
              </FormHelperText>
              <TextField 
                minRows={5}
                required
                placeholder='Enter a Date to Reach Goal'
                color='info'
                style={{ 
                  width: '100%', 
                  background:'transparent',
                  fontSize:'16px', borderColor:'rgba(8, 0, 0, 8.23)',
                  borderRadius: 6, padding: 10, color:'#919191'
                }}
                {...register('goaltime', {
                  required: true
                })}
              />
            </FormControl>
          </Stack>
          <Stack direction='row' gap={4}>
            <FormControl sx={{ flex: 1 }}>
                <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
                  Select How Many Workout Days per Week
                </FormHelperText>
                <Select
                  variant='outlined' color='info' displayEmpty required inputProps={{ 'aria-label': 'Without label'}}
                  defaultValue='5' {...register('workoutDays', {required: true})}
                >
                  <MenuItem value='1'>1</MenuItem>
                  <MenuItem value='2'>2</MenuItem>
                  <MenuItem value='3'>3</MenuItem>
                  <MenuItem value='4'>4</MenuItem>
                  <MenuItem value='5'>5</MenuItem>
                  <MenuItem value='6'>6</MenuItem>
                  <MenuItem value='7'>7</MenuItem>

                </Select>
                
              </FormControl>
              <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
                Calorie Intake
              </FormHelperText>
              <TextField 
                minRows={5}
                required
                placeholder='Enter Calorie Intake'
                color='info'
                style={{ 
                  width: '100%', 
                  background:'transparent',
                  fontSize:'16px', borderColor:'rgba(8, 0, 0, 8.23)',
                  borderRadius: 6, padding: 10, color:'#919191'
                }}
                {...register('calorieGoal', {
                  required: true
                })}
              />
            </FormControl>
            </Stack>
            <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142d'
            }}>Workout Plan</FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              placeholder='Write client workout plan'
              color='info'
              style={{ 
                width: '100%', 
                background:'transparent',
                fontSize:'16px', borderColor:'rgba(8, 0, 0, 8.23)',
                borderRadius: 6, padding: 10, color:'#919191'
              }}
              {...register('workoutplan', {
                required: true
              })}

            />
          </FormControl>
          <Stack direction='column' gap={1} justifyContent='center' mb={2}>
            <Stack direction='row' gap={2}>
              <Typography color='#11142d' fontSize={16} fontWeight={500} my='10px'>
                Client Photo
              </Typography>
              <Button component='label' sx={{ width: 'fit-content', color: '#2ed480', textTransform: 'capitalize', fontSize: 16}}>
                Upload *
                <input 
                  hidden
                  accept='image/*'
                  type='file'
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color='#808191'
              sx={{wordBreak:'break-all'}}
            >
              {clientImage?.name}
            </Typography>
          </Stack>
          <CustomButton 
            type='submit'
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor='#475be8'
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form