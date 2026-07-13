'use client';

export default function CropList({ crops }) {
    if (!crops.length) {
        return (
            <div className="crop-list-empty">
                <p>No crops added yet.</p>
            </div>
        );
    }

    return (
        <ul className="crop-list">
            {crops.map(crop => (
                <li key={crop.id} className="crop-list-item">
                    🌿 <strong>{crop.name}</strong> — {crop.growth}
                </li>
            ))}
        </ul>
    );
}