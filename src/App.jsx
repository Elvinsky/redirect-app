import React, { useState, useEffect } from 'react'
import './App.css'
import InApp from './inapp'
import attempt2 from './attempt2'
import { useQuery } from 'react-query'
import ExternalLink from './ExternalLinkIcon'
import attempt4 from 'is-ua-webview'

function App() {
	const [inApp, setInApp] = useState({})

	useEffect(() => {
		const useragent = navigator.userAgent || navigator.vendor || window.opera
		const inapp = new InApp(useragent)
		setInApp(inapp)
	}, [InApp])

	return (
		<section>
			<h3>Try to get outside</h3>
			<div class='grid'>
				<a
					href={`googlechrome://docs.google.com/document/d/1lIaKyy6fWVXSyQHMQwQDhjk3U9A0P19y`}
					target='_system'
				>
					Link 4
				</a>
			</div>
		</section>
	)
}

export default App
