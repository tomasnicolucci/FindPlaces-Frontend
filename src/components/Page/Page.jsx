import Navbar from "../Navbar/Navbar";

const Page = ({ children }) => {
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Page;