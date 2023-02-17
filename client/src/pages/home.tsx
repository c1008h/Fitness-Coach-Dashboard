import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import {
  PieChart,
  ClientReferrals,
  TotalRevenue,
  NewClients,
  ClientsOnGoal
} from 'components'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart 
          title='Clients weight goals met'
          value={20}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart 
          title='Clients workout goals met'
          value={40}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart 
          title='Clients calorie goals met'
          value={27}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart 
          title='New clients'
          value={10}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
      <Stack mt='25px' width='100%' 
        direction={{ xs: 'column', lg: 'row'}}
        gap={4}
      >
        <TotalRevenue />
        <ClientReferrals />
      </Stack>
    </Box>
  )
}

export default Home