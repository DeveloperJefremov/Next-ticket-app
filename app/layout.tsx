import MainNav from '@/components/MainNav';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by AJ',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<nav className='flex flex-col items-center border-b mb-5 px-5 py-3'>
						<div className='max-w-6xl w-full'>
							<MainNav />
						</div>
					</nav>

					<main className='flex flex-col items-center '>
						<div className='max-w-6xl w-full'>{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
