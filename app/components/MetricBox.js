'use client';

export default function MetricBox({ icon, label, value, subtext }) {
    return (
        <div className="metric-box">
            <div className="metric-header">
                <span>{icon}</span>
                <h3>{label}</h3>
            </div>
            <p className="metric-value">{value}</p>
            <p className="metric-sub">{subtext}</p>
        </div>
    );
}