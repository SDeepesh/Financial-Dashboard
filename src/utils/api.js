export const getUserInfo = async () => {
  // Simulating an API request
  return { name: 'John Doe', balance: 1200, cardNumber: '1234567890123456' };
};

export const getTransactions = async () => {
  // Simulating an API request
  return [
    { description: 'Payment Received', amount: 150, date: '2024-12-10' },
    { description: 'Amazon Purchase', amount: -50, date: '2024-12-09' },
  ];
};


export const formatCardNumber = (number) => {
  return `${number.slice(0, 4)} **** **** ${number.slice(-4)}`;
};