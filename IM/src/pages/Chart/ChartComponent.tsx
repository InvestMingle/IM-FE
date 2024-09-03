import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch stock data from Alpha Vantage
    const fetchStockData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=`
                // `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=005930.KS&apikey=`

        );

            const jsonData = await response.json();

            // Log the entire API response for debugging
            console.log('API Response:', jsonData);

            // Handle API limits or errors
            if (jsonData['Error Message']) {
                setError('Error fetching data: ' + jsonData['Error Message']);
                setLoading(false);
                return;
            }

            if (jsonData['Note'] || jsonData['Information']) {
                setError('API call frequency is too high. Please try again later or upgrade your plan.');
                setLoading(false);
                return;
            }

            const timeSeries = jsonData['Time Series (5min)'];

            if (!timeSeries) {
                setError('No time series data available.');
                setLoading(false);
                return;
            }

            // Format data for the candlestick chart
            const formattedData = Object.entries(timeSeries).map(
                ([date, values]: [string, any]) => ({
                    x: date, // Date in "YYYY-MM-DD HH:mm:ss" format
                    y: [
                        parseFloat(values['1. open']),
                        parseFloat(values['2. high']),
                        parseFloat(values['3. low']),
                        parseFloat(values['4. close']),
                    ],
                })
            );

            setData(formattedData.reverse()); // Reverse to show the latest data first
        } catch (error) {
            console.error('Error fetching stock data:', error);
            setError('Error fetching stock data. Network issue or invalid API response.');
        } finally {
            setLoading(false);
        }
    };

    const series = [
        {
            data: data,
        },
    ];

    const options = {
        theme: {
            mode: 'dark',
        },
        chart: {
            type: 'candlestick',
            height: 350,
            width: 500,
            toolbar: {
                tools: {},
            },
            background: 'transparent',
        },
        grid: {
            show: false,
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true,
                },
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#000', // Set the x-axis label color to black
                },
                datetimeFormatter: {
                    month: "MMM 'yy",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            labels: {
                style: {
                    colors: '#000', // Set the y-axis label color to black
                },
            },
        },
        tooltip: {
            y: {
                formatter: (value: number) => `$${value.toFixed(2)}`, // Format tooltip values
            },
        },
    };

    return (
        <div>
            <button onClick={fetchStockData} disabled={loading}>
                {loading ? 'Loading Chart...' : 'Fetch Chart Data'}
            </button>
            {error && <p>{error}</p>}
            {data.length > 0 && (
                <ReactApexChart
                    options={options}
                    series={series}
                    type="candlestick"
                    height={350}
                    width={500}
                />
            )}
        </div>
    );
};

export default ChartComponent;