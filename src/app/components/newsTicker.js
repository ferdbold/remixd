'use client';

import { useState, useEffect } from "react";
import Ticker from "react-ticker";
import {fetchTicker} from "../actions";

const NewsTicker = () => {
	const [content, setContent] = useState('');

	useEffect(() => {
		refreshContent()
	}, []);

	async function refreshContent() {
		let content = await fetchTicker();
		setContent(content);
	}

	if (!content)
		return <div className="h-8 bg-red-500"></div>;

	return <div className="h-8 text-nowrap bg-red-500 text-white py-1 font-bold uppercase">
		<Ticker speed={10} mode={'smooth'} offset={"run-in"}>
			{({ index }) => (
				<>
					{content}
				</>
			)}
		</Ticker>
	</div>
};
export default NewsTicker;
