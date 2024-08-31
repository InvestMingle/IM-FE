// Chart.tsx
import React, { useState } from 'react';
import ChartComponent from './ChartComponent.tsx'; // Import the ChartComponent
import JsonComponent from "./JsonComponent.tsx";
const Chart: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNotice = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={styles.noticeContainer}>
            <div style={styles.noticeHeader}>
                <h2>Notice Title</h2>
                <button onClick={toggleNotice}>
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
            {isExpanded && (
                <div style={styles.noticeContent}>
                    <p>
                       주식차트
                    </p>
                    {/* Include the ChartComponent inside the notice content */}
                    <JsonComponent />
                    <ChartComponent />
                </div>
            )}
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
};

export default Chart;