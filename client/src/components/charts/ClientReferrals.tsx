import { Box, Stack, Typography} from '@pankod/refine-mui'
import { clientReferralsInfo } from '../constants/index'

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}
const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width='100%'>
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Typography fontSize={16} fontWeight={500} color='#11142d'>{title}</Typography>
      <Typography fontSize={16} fontWeight={500} color='#11142d'>{percentage}%</Typography>
    </Stack>
    <Box mt={2} position='relative' width='100%' height='8px' borderRadius={1} bgcolor='#e4e8ef'>
      <Box  
        width={`${percentage}%`} 
        bgcolor={color}
        position='absolute'
        height='100%'
        borderRadius={1}
      />
    </Box>
  </Box>
)

const ClientReferrals = () => {
  return (
    <Box
      p={4} bgcolor='#fcfcfc' id='chart' display='flex' flexDirection='column' minWidth={490} borderRadius='15px'
    >
      <Typography fontSize='18px' fontWeight={600} color='#11142d'>
        Client Referrals
      </Typography>
      <Stack my='20px' direction='column' gap={4}>
        {clientReferralsInfo.map((bar) =>
          <ProgressBar key={bar.title} {...bar}/>
        )}
      </Stack>
    </Box>
  )
}

export default ClientReferrals