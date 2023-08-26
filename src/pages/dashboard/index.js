import { Grid } from '@mui/material'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CrmEarningReportsWithTabs from 'src/views/pages/dashboard/CrmEarningReportsWithTabs'
import CrmLastTransaction from 'src/views/pages/dashboard/CrmLastTransaction'
import CrmRevenueGrowth from 'src/views/pages/dashboard/CrmRevenueGrowth'
import CrmSalesWithAreaChart from 'src/views/pages/dashboard/CrmSalesWithAreaChart'
import CrmSalesWithRadarChart from 'src/views/pages/dashboard/CrmSalesWithRadarChart'
import CrmSessions from 'src/views/pages/dashboard/CrmSessions'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CrmSalesWithAreaChart />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CrmSessions />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='1.28k'
            chipText='-12.2%'
            chipColor='default'
            avatarColor='error'
            title='Total Profit'
            subtitle='Last week'
            avatarIcon='tabler:currency-dollar'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='24.67k'
            chipText='+25.2%'
            avatarColor='info'
            chipColor='default'
            title='Bookings'
            subtitle='Last week'
            avatarIcon='tabler:chart-bar'
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={4}>
          <CrmRevenueGrowth />
        </Grid>
        <Grid item xs={12} lg={8}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesWithRadarChart />
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4}> */}
        <Grid item xs={12} md={6}>
          <CrmLastTransaction />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
