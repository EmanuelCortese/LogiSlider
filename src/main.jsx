import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SliderProvider } from './context/SliderContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SliderProvider>
			<App />
		</SliderProvider>
	</React.StrictMode>
)
