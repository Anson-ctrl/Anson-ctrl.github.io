// ── Fetch and render all data from server ──
async function render() {
    try {
        const [cropsRes, yieldRes] = await Promise.all([
            fetch('/api/crops'),
            fetch('/api/yield')
        ]);
        const crops = await cropsRes.json();
        const { totalYield } = await yieldRes.json();

        document.getElementById('cropCount').textContent = crops.length;
        document.getElementById('yieldTotal').textContent = totalYield.toFixed(1) + ' lbs';
        document.getElementById('cropList').innerHTML =
            crops.map(c => `<li>🌿 ${c.name} (${c.growth})</li>`).join('');
    } catch (err) {
        console.error('Failed to load data:', err);
    }
}

// ── Add a new crop ──
document.getElementById('cropForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('cropname').value.trim();
    const growth = document.getElementById('growthtime').value.trim();

    try {
        await fetch('/api/crops', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, growth })
        });
        this.reset();
        render();
    } catch (err) {
        console.error('Failed to add crop:', err);
    }
});

// ── Log yield ──
document.getElementById('yieldForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('yieldInput').value);

    try {
        await fetch('/api/yield', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        });
        this.reset();
        render();
    } catch (err) {
        console.error('Failed to log yield:', err);
    }
});

// ── Run on page load ──
render();