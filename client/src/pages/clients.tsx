import { Add } from '@mui/icons-material'
import { useList } from '@pankod/refine-core'
import { Box, Stack, Typography, Card, Button } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'

import { ClientDailyCard, CustomButton } from 'components'
import data from 'data.json'

const Clients = () => {
  const navigate = useNavigate();
  console.log(data.clients)
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography fontSize={25} fontWeight={700} color='#11142d'>All Clients</Typography>
        <CustomButton title='Add Client' handleClick={() => navigate('/clients/create')} 
          backgroundColor='#475be8'
          color='#fcfcfc'
          icon={ <Add /> }
        />
      </Stack>
      <Stack direction='row' gap={2} justifyContent='space-between' alignItems='center'>
        <Box>
          {data.clients.map((client) => 
            <Card key={client.firstname}>
              <h3> {client.firstname} {client.lastname} </h3>
              <img src={client.clientImage} alt='image of client'/>
              <h5>{client.email}</h5>
              <h5>{client.phonenumber}</h5>
              <CustomButton 
                title='View More' 
                backgroundColor='#475be8'
                color='#fcfcfc'
                handleClick={() => navigate('/clients/:id')} 
              />
            </Card> )}
        </Box>
      </Stack>
    </Box>
  )
}

export default Clients