document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const updateTime = () => {
        const now = new Date();
        currentTimeUTC.textContent = `Current UTC Time: ${now.toUTCString()}`;
    };
    updateTime();
    setInterval(updateTime, 60000);
});