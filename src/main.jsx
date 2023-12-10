import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { IndexProvider } from './context/IndexContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<IndexProvider>
			<App />
		</IndexProvider>
	</React.StrictMode>
)
