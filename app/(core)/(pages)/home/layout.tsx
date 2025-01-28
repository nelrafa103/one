import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<> 
			<Navbar />
			<main className="my-4">
				{children}
			</main>
		</>
	)
}