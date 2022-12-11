import {Header} from './Header'
import {Footer} from './Footer'
import {Carousel} from './Carousel'
import {Precios} from './Precios'

export function Home() {
    return (
        <div className='container'>
            <Header></Header>
            <Carousel></Carousel>
            <Precios></Precios>
            <Footer></Footer>
        </div>
    )
}