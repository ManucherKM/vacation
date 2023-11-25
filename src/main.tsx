import { App, CustomRouter } from '@/components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { history } from './configuration/history'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomRouter history={history}>
			<App />
		</CustomRouter>
	</React.StrictMode>,
)
