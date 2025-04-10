import axios from 'axios';
import { generateMessage } from './generateMessages';


export const sendMessage = async ( phone, name, age, gender, ticketNumber, ticketType) => {
  const url = process.env.NEXT_PUBLIC_WHATSAPP_API_URL;

  const messageBody = generateMessage(name, age, gender, ticketNumber, ticketType);

  const data = {
    messaging_product: "whatsapp",
    to: "918086229572",
    type: "template",
    template: {
      name: "hello_world",
      language: {
        "code": "en_US"
      }
    }
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error.response.data);
    throw error;
  }
};

