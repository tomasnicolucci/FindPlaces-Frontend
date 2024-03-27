import './Page.css'
import Navbar from "../Navbar/Navbar";

const Page = ({ children }) => {
    return(
        <>
        <header>
            <Navbar />
        </header>
        <body className="bodyContainer">
            {children}
        </body>
        </>
    )
}

export default Page;