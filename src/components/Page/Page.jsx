import './Page.css'
import Navbar from "../Navbar/Navbar";

const Page = ({ children }) => {
    return(
        <body>
            <header>
                <Navbar />
            </header>
            <main className='main'>
                {children}
            </main>
        </body>
    )
}

export default Page;