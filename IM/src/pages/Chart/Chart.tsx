import React, { useState } from 'react';
import './Chart.css'; // Import the CSS file for styling

const Chart: React.FC = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to manage expand/collapse of content
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to open modal
    const openModal = () => setIsModalOpen(true);

    // Function to close modal
    const closeModal = () => setIsModalOpen(false);

    // Function to toggle content expand/collapse
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div>
            {/* Button to trigger modal */}
            <button onClick={openModal}>Open Modal</button>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="modal-background" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>

                        {/* Modal Title - always visible */}
                        <div className="modal-title">
                            <h2>Announcement Title</h2>
                        </div>

                        {/* Expandable Content */}
                        <div className={`modal-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                            {isExpanded && (
                                <p>
                                    This is additional content that is shown when the expand button is clicked. You can add more information here, such as detailed announcements or other content.
                                </p>
                            )}
                        </div>

                        {/* Expand/Collapse Button */}
                        <button className="expand-button" onClick={toggleExpand}>
                            {isExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chart;
