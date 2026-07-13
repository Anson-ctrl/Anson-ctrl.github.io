'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MetricBox from './components/MetricBox';
import CropForm from './components/CropForm';
import YieldForm from './components/YieldForm';
import CropList from './components/CropList';

export default function Home() {
    const [crops, setCrops] = useState([]);
    const [totalYield, setTotalYield] = useState(0);

    async function fetchCrops() {
        try {
            const res = await fetch('/api/crops');
            const data = await res.json();
            setCrops(data);
        } catch (err) {
            console.error('Failed to fetch crops:', err);
        }
    }

    async function fetchYield() {
        try {
            const res = await fetch('/api/yield');
            const data = await res.json();
            setTotalYield(data.totalYield || 0);
        } catch (err) {
            console.error('Failed to fetch yield:', err);
        }
    }

    useEffect(() => {
        fetchCrops();
        fetchYield();
    }, []);

    return (
        <main>

            {/* Header */}
            <header>
                <img src="/SS.png" alt="Stanfield Springs logo" />
                <h1>
                    <span className="highlight">Stanfield Springs</span>{' '}
                    Homestead Dashboard
                </h1>
            </header>

            {/* Hero Image */}
            <div className="hero">
                <img
                    src="/better.jpg"
                    alt="Stanfield Springs Farm"
                    className="hero-image"
                />
                <div className="hero-text">
                    <h2>Welcome to Stanfield Springs</h2>
                    <p>Track your crops, harvests, and weather in one place.</p>
                </div>
            </div>

            {/* About */}
            <section className="about">
                <h2>What is this dashboard?</h2>
                <p>This dashboard supports small-scale farming operations at
                Stanfield Springs Homestead. We track plant dates, harvest
                yields, and real-time weather data to generate predictive
                insights like frost warnings and drought alerts.</p>
            </section>

            {/* Metrics */}
            <div className="metrics">
                <MetricBox
                    icon="🌱"
                    label="Active Crops"
                    value={crops.length}
                    subtext={crops.length === 1 ? '1 crop in cycle' : crops.length + ' crops in cycle'}
                />
                <MetricBox
                    icon="⚖"
                    label="Total Yield YTD"
                    value={(totalYield || 0).toFixed(1) + ' lbs'}
                    subtext="Total harvested this year"
                />
            </div>

            {/* Forms */}
            <div className="forms-wrapper">
                <CropForm onCropAdded={fetchCrops} />
                <YieldForm onYieldLogged={fetchYield} />
            </div>

            {/* Crop List */}
            <section className="crop-section">
                <h2>Active Crop Cycles</h2>
                <CropList crops={crops} />
            </section>

            {/* Weather */}
            <section className="weather-section">
                <h2 className="section-title">🌤 7-Day Weather Forecast</h2>
                <div className="weather-grid">
                    <div className="weather-card">
                        <p className="weather-day">Mon</p>
                        <p className="weather-icon">☀</p>
                        <p className="weather-temp">72°F</p>
                        <p className="weather-desc">Sunny</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Tue</p>
                        <p className="weather-icon">⛅</p>
                        <p className="weather-temp">68°F</p>
                        <p className="weather-desc">Partly Cloudy</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Wed</p>
                        <p className="weather-icon">🌧</p>
                        <p className="weather-temp">61°F</p>
                        <p className="weather-desc">Rainy</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Thu</p>
                        <p className="weather-icon">⛈</p>
                        <p className="weather-temp">58°F</p>
                        <p className="weather-desc">Thunderstorms</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Fri</p>
                        <p className="weather-icon">🌤</p>
                        <p className="weather-temp">65°F</p>
                        <p className="weather-desc">Mostly Sunny</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Sat</p>
                        <p className="weather-icon">☀</p>
                        <p className="weather-temp">74°F</p>
                        <p className="weather-desc">Sunny</p>
                    </div>
                    <div className="weather-card">
                        <p className="weather-day">Sun</p>
                        <p className="weather-icon">🌥</p>
                        <p className="weather-temp">63°F</p>
                        <p className="weather-desc">Cloudy</p>
                    </div>
                </div>
            </section>

        </main>
    );
}