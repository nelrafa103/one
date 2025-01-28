import CookiesBanner from "../../components/Cookies"
import Hero from "../../components/Hero"
import getLangauge from "../../functions/language"

export default async function HomePage() {
	const language = await getLangauge()
    
	const dict = await import(`@/app/(core)/dictionaries/${language}`)

	return (
		<> <Hero /> <CookiesBanner />  </>)
}

