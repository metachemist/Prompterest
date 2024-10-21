import '@styles/globals.css';

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
                    {children}
                </div>
            </div>
        </body>
    </html>
  )
}

export default Rootlayout