'use client';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import { MainContent } from 'src/layouts/dashboard';
import { _bookings, _bookingNew, _bookingReview, _bookingsOverview } from 'src/_mock';
import {
  BookingIllustration,
  CheckInIllustration,
  CheckoutIllustration,
} from 'src/assets/illustrations';

import { useSettingsContext } from 'src/components/settings';

import BookingBooked from '../booking-booked';
import BookingNewest from '../booking-newest';
import BookingDetails from '../booking-details';
import BookingAvailable from '../booking-available';
import BookingStatistics from '../booking-statistics';
import BookingTotalIncomes from '../booking-total-incomes';
import BookingWidgetSummary from '../booking-widget-summary';
import BookingCheckInWidgets from '../booking-check-in-widgets';
import BookingCustomerReviews from '../booking-customer-reviews';

// ----------------------------------------------------------------------

export default function OverviewBookingView() {
  const settings = useSettingsContext();

  return (
    <MainContent maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3} disableEqualOverflow>
        <Grid xs={12} md={4}>
          <BookingWidgetSummary
            title="Total Booking"
            percent={2.6}
            total={714000}
            icon={<BookingIllustration />}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <BookingWidgetSummary
            title="Sold"
            percent={0.2}
            total={311000}
            icon={<CheckInIllustration />}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <BookingWidgetSummary
            title="Canceled"
            percent={-0.1}
            total={124000}
            icon={<CheckoutIllustration />}
          />
        </Grid>

        <Grid container xs={12}>
          <Grid xs={12} md={7} lg={8}>
            <Stack
              spacing={{ xs: 3, md: 1 }}
              sx={{
                mb: 3,
                p: { md: 1 },
                borderRadius: { md: 2 },
                bgcolor: { md: 'background.neutral' },
              }}
            >
              <Stack
                display="grid"
                gap={{ xs: 3, md: 0 }}
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                }}
                sx={{
                  p: { md: 1 },
                  borderRadius: { md: 2 },
                  bgcolor: { md: 'background.paper' },
                }}
              >
                <BookingTotalIncomes
                  title="Total Incomes"
                  total={18765}
                  percent={2.6}
                  chart={{
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    series: [{ data: [10, 41, 80, 100, 60, 120, 69, 91, 160] }],
                  }}
                />

                <BookingBooked
                  title="Booked"
                  data={_bookingsOverview}
                  sx={{ boxShadow: { md: 'none' } }}
                />
              </Stack>

              <BookingCheckInWidgets
                chart={{
                  series: [
                    { label: 'Sold', percent: 73.9, total: 38566 },
                    { label: 'Pending for payment', percent: 45.6, total: 18472 },
                  ],
                }}
                sx={{ boxShadow: { md: 'none' } }}
              />
            </Stack>

            <BookingStatistics
              title="Statistics"
              chart={{
                series: [
                  {
                    name: 'Weekly',
                    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    data: [
                      {
                        name: 'Sold',
                        data: [24, 41, 35, 151, 49],
                      },
                      {
                        name: 'Canceled',
                        data: [20, 56, 77, 88, 99],
                      },
                    ],
                  },
                  {
                    name: 'Monthly',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    data: [
                      {
                        name: 'Sold',
                        data: [83, 112, 119, 88, 103, 112, 114, 108, 93],
                      },
                      {
                        name: 'Canceled',
                        data: [46, 46, 43, 58, 40, 59, 54, 42, 51],
                      },
                    ],
                  },
                  {
                    name: 'Yearly',
                    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    data: [
                      {
                        name: 'Sold',
                        data: [76, 42, 29, 41, 27, 96],
                      },
                      {
                        name: 'Canceled',
                        data: [46, 44, 24, 43, 44, 43],
                      },
                    ],
                  },
                ],
              }}
            />
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={3}>
              <BookingAvailable
                title="Tours Available"
                chart={{
                  series: [
                    { label: 'Sold out', value: 120 },
                    { label: 'Available', value: 66 },
                  ],
                }}
              />

              <BookingCustomerReviews
                title="Customer Reviews"
                subheader={`${_bookingReview.length} Reviews`}
                list={_bookingReview}
              />
            </Stack>
          </Grid>
        </Grid>

        <Grid xs={12}>
          <BookingNewest
            title="Newest Booking"
            subheader={`${_bookingNew.length} bookings`}
            list={_bookingNew}
          />
        </Grid>

        <Grid xs={12}>
          <BookingDetails
            title="Booking Details"
            tableData={_bookings}
            tableLabels={[
              { id: 'destination', label: 'Destination' },
              { id: 'customer', label: 'Customer' },
              { id: 'checkIn', label: 'Check In' },
              { id: 'checkOut', label: 'Check Out' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </MainContent>
  );
}
