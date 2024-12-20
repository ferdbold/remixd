'use client'

import { useState, useEffect } from "react";

import StockChart from "@/app/components/stockChart";
import NewsTicker from "@/app/components/newsTicker";
import {fetchEggChartForSlug} from "@/app/actions";

const EggContent = ({ slug }) => {
	const [name, setName] = useState('');

	useEffect(() => {
		fetchEggStock();
	}, []);

	async function fetchEggStock() {
		const eggChart = await fetchEggChartForSlug(slug);
		setName(eggChart.datasets.length > 0 ? eggChart.datasets[0].label : 'NOPE');
	}

	return (
		<div className={"flex flex-col h-screen text-lime-700"}>
			<header className={"my-4"}>
				<h1 className={"h-12 text-6xl font-bold text-center"}>{name}</h1>
			</header>

			<StockChart showNav={false} eggSlug={slug} />
			<NewsTicker />
		</div>
	);
}
export default EggContent;
