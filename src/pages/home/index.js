import { Grid } from '@mui/material'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CrmSalesWithAreaChart from 'src/views/pages/dashboard/CrmSalesWithAreaChart'

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CrmSalesWithAreaChart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Home
