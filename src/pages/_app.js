import { MainContextProvider } from '@/components/context/MainContextProvider'
import '@/styles/globals.css'
//import { appFirebase } from '@/firebase/initConfig'
//import { appFirebase } from '@/firebase/initConfigNew'
import Navegacion from '@/components/Navegacion/Navegacion'
import Footer from '@/components/Footer'


export default function App({ Component, pageProps }) {
    return (
        
        <MainContextProvider>
            <Navegacion />
            
            <Component {...pageProps} />
            <Footer />
        </MainContextProvider>
        
    )
}