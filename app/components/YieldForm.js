'use client';

import { useState } from 'react';

export default function YieldForm({ onYieldLogged }) {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/yield', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parseFloat(amount) })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Something went wrong.');
                return;
            }

            setAmount('');
            onYieldLogged();
        } catch (err) {
            setError('Failed to log yield. Is your server running?');
        }
    }

    return (
        <div className="form-card">
            <h2>Log Yield</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="yieldInput">Yield (lbs):</label>
                    <input
                        type="number"
                        id="yieldInput"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder="e.g. 12"
                        min="0"
                        required
                    />
                </div>
                <button type="submit">Log Yield</button>
            </form>
        </div>
    );
}