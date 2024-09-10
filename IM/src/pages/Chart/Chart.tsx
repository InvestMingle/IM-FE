import React, { useState } from 'react';
import DailyStockChart from "@/pages/Chart/DailyStockChart";
import axios from 'axios';

const Chart: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [tokenStatus, setTokenStatus] = useState<string>('');  // For showing the status of token generation

    // Toggle chart visibility
    const toggleNotice = () => {
        setIsExpanded(!isExpanded);
    };

    // Token generation function
    const generateToken = async () => {
        try {
            setTokenStatus('Generating token...');
            const response = await axios.post('http://localhost:5000/api/access-token');  // Generate the token
            setTokenStatus('Token successfully generated!');  // Show success message
            console.log('New Token:', response.data.accessToken);  // Log the new token (optional)
        } catch (error) {
            console.error('Error generating token:', error);
            setTokenStatus('Failed to generate token.');
        }
    };

    return (
        <div style={styles.noticeContainer}>
            <div style={styles.noticeHeader}>
                <h2>주식차트</h2>
                <button onClick={generateToken} style={styles.tokenButton}>토큰 발행</button>
                <button onClick={toggleNotice}>
                    {isExpanded ? '차트닫기' : '차트보기'}
                </button>
            </div>
            {isExpanded && (
                <div style={styles.noticeContent}>
                    <DailyStockChart />
                </div>
            )}
            {tokenStatus && <p>{tokenStatus}</p>}  {/* Display token generation status */}
        </div>
    );
};

const styles = {
    noticeContainer: {
        backgroundColor: '#f8f9fa',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    noticeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    noticeContent: {
        marginTop: '10px',
        maxHeight: '150px',
        overflowY: 'auto', // Enable scrolling if content is too long
    },
    tokenButton: {
        marginLeft: '10px',
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    }
};

export default Chart;
