import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const steps = [
	{
		id: '0',
		message: 'Welcome to HEdpAY!',
		trigger: '1',
	}, {
		id: '1',
		message: 'Please write your name.',
		trigger: '2'
	}, {
		id: '2',
		user: true,
		trigger: '3',
	}, {
		id: '3',
		// message: " hi {previousValue}, how can I help you?",
		message: " Okay, Nice to meet you. How can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			{ value: 1, label: 'About HEdpAY' },
			{ value: 2, label: 'HEdpAY Supprot Team' },
		],
		end: true
	}
];

const theme = {
	background: '#F5F7FA',
	headerBgColor: '#00263F',
	headerFontSize: '20px',
	botBubbleColor: '#2DCCD3',
	headerFontColor: '#ffffff',
	botFontColor: 'white',
	userBubbleColor: '#002554',
	userFontColor: 'white',
};

const config = {
	botAvatar: "bot.png",
	floating: true,
	userAvatar:"user.png"
};
function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="HEdpAY"
					steps={steps}
					{...config}
				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
