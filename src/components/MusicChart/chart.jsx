import * as React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Données simulées pour les écoutes
const listensData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Nombre d\'écoutes',
      data: [300, 450, 700, 600, 900, 1200, 1500, 1400, 1300, 1600, 1700, 1800],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      fill: true,
      tension: 0.3,
    },
  ],
};

const listensSummary = {
  daily: 200,
  weekly: 1400,
  monthly: 6000,
  total: 15000,
};

export default function ArtistDashboard() {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9fb', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Compteurs pour les écoutes */}
        <Grid item xs={12} md={3}>
          <StatsCard title="Listen today" value={listensSummary.daily} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Listen this week" value={listensSummary.weekly} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Listen this month" value={listensSummary.monthly} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatsCard title="Listen Total" value={listensSummary.total} />
        </Grid>

        {/* Graphique pour les écoutes mensuelles */}
        <Grid item xs={12} mt={4}>
          <Card sx={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                Evolution
              </Typography>
              <Line data={listensData} options={chartOptions} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function StatsCard({ title, value }) {
  return (
    <Card sx={{ backgroundColor: '#ffffff', borderRadius: '12px', textAlign: 'center', p: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#666' }}>{title}</Typography>
        <Typography variant="h4" sx={{ mt: 1, color: '#333' }}>{value}</Typography>
      </CardContent>
    </Card>
  );
}

// Options du graphique
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Mois',
      },
    },
    y: {
      title: {
        display: true,
        text: 'number of listeners',
      },
    },
  },
};
