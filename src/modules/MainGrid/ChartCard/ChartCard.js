import React from 'react';
import Chart from './Chart'
import { Card, CardContent } from '@mui/material';

const ChartCard = () => {
    return (
        <Card variant="outlined">
        <CardContent>
          <Chart/>
        </CardContent>
        </Card>
    )
}

export default ChartCard;