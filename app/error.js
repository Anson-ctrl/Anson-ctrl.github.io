'use client';

export default function Error({ error, reset }) {
    return (
        <div className="error-wrapper">
            <div className="error-card">
                <p className="error-icon">⚠</p>
                <h2>Something went wrong</h2>
                <p>{error.message || 'An unexpected error occurred.'}</p>
                <button onClick={reset}>Try again</button>
            </div>
        </div>
    );
}