import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface PriceData {
    date: string; // Date as a string
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

const JsonComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]); // Updated to any[] to match ApexCharts data format
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json');
                const response = await fetch('/stock_data.json1');

                const jsonData: PriceData[] = await response.json();
                console.log('Fetched JSON Data:', jsonData);

                // Format data for the candlestick chart
                const formattedData = jsonData.map((price) => ({
                    x: price.date, // Keep as a string in "YYYY-MM-DD" format
                    y: [price.open, price.high, price.low, price.close],
                }));

                setData(formattedData);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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
            height: 200,
            width: 400,
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
            type: 'datetime', // Correctly set to 'datetime' to use date objects
            labels: {
                style: {
                    colors: '#000', // Set the color of x-axis labels to black
                },
                datetimeFormatter: {
                    month: "MMM 'yy", // Formatting for datetime labels
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
                    colors: '#000', // Set the color of y-axis labels to black
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
            {loading ? (
                <p>Loading stock data...</p>
            ) : (
                <ReactApexChart options={options} series={series} type="candlestick" height={500} width={500} />
            )}
        </div>
    );
};

export default JsonComponent;