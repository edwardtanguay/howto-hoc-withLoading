/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = ({message}) => {
	return (
		<>
			<h2>{message}</h2>
			<p><FaSpinner className="spinner" /></p>
		</>
	)
};

export const withLoading = (Component, loadingMessage) => (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const secondsToWait = Math.floor(Math.random() * 4000) + 1000;
	useEffect(() => {
		setTimeout(() => setIsLoading(false), secondsToWait);
	}, []);
	return isLoading ? <Loading message={loadingMessage} /> : <Component {...props} />;
};