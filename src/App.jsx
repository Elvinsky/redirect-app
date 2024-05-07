import React, { useState, useEffect } from 'react'
import './App.css'
import InApp from './inapp'

function App() {
	const [inApp, setInApp] = useState({})

	useEffect(() => {
		const useragent = navigator.userAgent || navigator.vendor || window.opera
		const inapp = new InApp(useragent)
		setInApp(inapp)
	}, [InApp])

	return (
		<div className='App'>
			<section>
				<h3>Try to get outside</h3>
				<div className='grid'>
					<a
						href={`googlechrome://docs.google.com/document/d/1lIaKyy6fWVXSyQHMQwQDhjk3U9A0P19y/edit`}
						target='_system'
					>
						Link 4
					</a>
				</div>
			</section>
			<a href='https://github.com/luizcieslak/am-i-inapp-browser' target='_blank' rel='noopener noreferrer'>
				Source code
			</a>
		</div>
	)
}

export default App
