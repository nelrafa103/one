
"use server"

import { headers } from "next/headers"

async function getLangauge(): Promise<string> {
	const supportedLanguages = ["en-US", "es-DO"]
	const headerList = await headers()
	const language = headerList.get("accept-language")!
	const formatedLanguage = supportedLanguages.filter((item) => language.includes(item)).at(0) || "en-US"
	return formatedLanguage
}

export default getLangauge