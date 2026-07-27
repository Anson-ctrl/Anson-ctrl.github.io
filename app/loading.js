export default function Loading() {
    return (
        <div className="loading-wrapper">
            <div className="loading-card">
                <p className="loading-icon">🌱</p>
                <p className="loading-text">Loading your farm data...</p>
                <div className="loading-bar">
                    <div className="loading-bar-fill"></div>
                </div>
            </div>
        </div>
    );
}