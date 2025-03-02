import "./globals.css"

import TransitionPage from "../components/transitionpage/transitionpage";



export default function Layout({children}) {
    return (
        <html>
            <body className="container">
           
               <div className="h-screen">
                <TransitionPage>{children}</TransitionPage> 
                </div>
            </body>
        </html>
    );
}