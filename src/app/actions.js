'use server';

import { kv } from '@vercel/kv';
import { structuredClone } from "next/dist/compiled/@edge-runtime/primitives";

export async function fetchStocks() {
    const chart = await kv.json.get("chart");
    return chart;
}

export async function fetchTicker() {
    const ticker = await kv.get("ticker");
    return ticker;
}

export async function fetchEggChartForSlug(slug) {
    const eggStock = await kv.hget('egg', slug);
    if (eggStock === null || eggStock === undefined)
        return { "datasets": [] };

    const allChart = await kv.json.get("chart");
    let chart = structuredClone(allChart);
    chart.datasets = chart.datasets.filter((el) => el.label === eggStock);
    return chart;
}
