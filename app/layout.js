import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '600Code',
    description: '600 bugs, one solved, 601 remains :)',
    keywords: 'js, css, scss, education, tutorials'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header></Header>
                <main className='container'>{children}</main>
            </body>
        </html>
    );
}
