import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

interface LayoutProps {
    children: React.ReactNode;
}

export const metadata={
    title:"Prompterest",
    description: 'Discover & Share AI Prompts'
}

const Rootlayout:React.FC<LayoutProps> = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>
                <div className="main">
                    <div className="gradient"/>
                </div>

                <div className="app">
                    <Nav/>
                    {children}
                </div>
            </div>
        </body>
    </html>
  )
}

export default Rootlayout