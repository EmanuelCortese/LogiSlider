import App from '@/App'
import { SliderProvider } from '@/context/SliderContext'
import '@/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SliderProvider>
			<App />
		</SliderProvider>
	</React.StrictMode>
)
