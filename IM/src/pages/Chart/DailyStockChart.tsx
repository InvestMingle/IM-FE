import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// Define the types for stock data
interface StockData {
    stck_bsop_date: string; // Date of the stock business operation
    stck_clpr: number;      // Closing price
}

// Define the structure of the API responses
interface TokenResponse {
    accessToken: string;
}

interface StockResponse {
    output: StockData[];
}

// Map company names to their stock codes
const stockSymbolMapping: { [key: string]: string } = {
    '삼성전자': '005930',
    'SK하이닉스': '000660',
    'NAVER': '035420',
    '삼성바이오로직스': '207940',
    'LG화학': '051910',
    '현대차': '005380',
    'POSCO홀딩스': '005490',
    '카카오': '035720',
    '셀트리온': '068270',
    '삼성SDI': '006400',
    '기아': '000270',
    'LG전자': '066570',
    'SK이노베이션': '096770',
    '현대모비스': '012330',
    'KB금융': '105560',
    '신한지주': '055550',
    '삼성물산': '028260',
    'LG생활건강': '051900',
    'SK텔레콤': '017670',
    'KT&G': '033780',
    '한국전력': '015760',
    'S-Oil': '010950',
    '삼성생명': '032830',
    'LG디스플레이': '034220',
    '아모레퍼시픽': '090430',
    'KT': '030200',
    '하나금융지주': '032830',
    '고려아연': '010130',
    '두산에너빌리티': '034020',
    '현대글로비스': '086280'




//     삼성전자: 005930
//     SK하이닉스: 000660
//     네이버: 035420
//     삼성바이오로직스: 207940
//     LG화학: 051910
//     현대자동차: 005380
//     포스코홀딩스: 005490
//     카카오: 035720
//     셀트리온: 068270
//     삼성SDI: 006400
//     Hybe(스타베이션): 352820
//     LG전자: 066570
//     SK이노베이션: 096770
//     현대모비스: 012330
//     KB금융: 105560
//     신한금융그룹: 055550
//     삼성물산: 028260
    // LG생활건강: 051900
//     SK텔레콤: 017670
//     KT&G: 033780
// 한국전력공사(KEPCO): 015760
// 에쓰-오일: 010950
// 삼성생명: 032830
// LG 디스플레이: 034220
// 아모레퍼시픽: 090430
// KT: 030200
// 하나금융그룹: 086790
// 고려아연: 010130
// 두산에너지: 034020
// 현대글로비스: 086280
};

const DailyStockChart: React.FC = () => {
    const { chatId } = useParams();  // chatId is the company name
    const [chartData, setChartData] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDailyStockData = async () => {
            try {
                // Fetch the token
                const tokenResponse = await axios.get<TokenResponse>('http://localhost:5000/api/token');
                const token = tokenResponse.data.accessToken;

                // Map the company name (chatId) to the stock symbol
                const stockSymbol = stockSymbolMapping[chatId || ''];

                if (!stockSymbol) {
                    console.error(`Stock symbol not found for ${chatId}`);
                    return;
                }

                // Fetch the daily stock data based on stock symbol (using query parameters)
                const response = await axios.get<StockResponse>(`http://localhost:5000/api/stock/daily`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        stockCode: stockSymbol  // Pass the stock symbol as a query parameter
                    }
                });

                const stockData = response.data.output;

                // Extract labels (dates) and prices (closing prices)
                const labels = stockData.map(data => data.stck_bsop_date);
                const prices = stockData.map(data => data.stck_clpr);

                // Set chart data
                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: `${chatId} 일별 종가`,
                            data: prices,
                            backgroundColor: 'rgba(75, 192, 192, 0.4)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            fill: false,
                        },
                    ],
                });

                setLoading(false);
            } catch (error) {
                console.error('주식 데이터 가져오기 실패:', error);
            }
        };

        fetchDailyStockData();
    }, [chatId]);  // Re-fetch data whenever chatId changes

    return (
        <div>
            <h2>{chatId} 일별 주식 차트</h2>
            {loading ? <p>로딩 중...</p> : <Line data={chartData} />}
        </div>
    );
}

export default DailyStockChart;
