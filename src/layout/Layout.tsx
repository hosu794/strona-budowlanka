import Navbar from './Navbar'
import Footer  from './Footer'


interface ILayout  {
    children: React.ReactNode
}

const Layout = ({children}: ILayout) => (
    <div className="h-screen overflow-x-hidden">
        <Navbar />
         {children}
        <Footer />
    </div>
)

export default Layout