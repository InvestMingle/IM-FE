import React, { useState } from 'react';
import './Chart.css'; // Import the CSS file

// Main component
const Chart: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* Trigger button to open the modal */}
            <button onClick={openModal}>Open Modal</button>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>Chart Modal</h2>
                        <p>This is a modal window displaying a chart.</p>
                        {/* You can include your chart here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chart;