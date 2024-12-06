'use server';

import { kv } from '@vercel/kv';

export async function fetchStocks() {
    const chart = await kv.json.get("chart");
    return chart;
}

export async function fetchTicker() {
    const ticker = await kv.get("ticker");
    return ticker;
}
