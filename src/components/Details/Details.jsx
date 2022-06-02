import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from "react-chartjs-2";
import useStyles from './styles';
import useTransactions from '../../useTransactions';

import{Chart , Tooltip , ArcElement , Legend} from 'chart.js';
Chart.register(
  Tooltip , ArcElement , Legend
);

const Details = ({ title }) => {
    const classes = useStyles();
    const {total , chartData} = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title = {title} align='center' />
        <CardContent>
            <Typography variant = "h5">
            Rs {total}
            </Typography>
            <Doughnut data = {chartData}/>
        </CardContent>
    </Card>
  );
}

export default Details;