'use client';

import { useState } from 'react';

export default function CropForm({ onCropAdded }) {
    const [name, setName] = useState('');
    const [growth, setGrowth] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/crops', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, growth })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Something went wrong.');
                return;
            }

            setName('');
            setGrowth('');
            onCropAdded();
        } catch (err) {
            setError('Failed to add crop. Is your server running?');
        }
    }

    return (
        <div className="form-card">
            <h2>Add Crop</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="cropname">Crop Name:</label>
                    <input
                        type="text"
                        id="cropname"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. Tomatoes"
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="growthtime">Growth Time:</label>
                    <input
                        type="text"
                        id="growthtime"
                        value={growth}
                        onChange={e => setGrowth(e.target.value)}
                        placeholder="e.g. 60 days"
                        required
                    />
                </div>
                <button type="submit">Add Crop</button>
            </form>
        </div>
    );
}