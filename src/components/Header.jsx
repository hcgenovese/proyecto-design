import Logo from "./Logo"
import datos from './../datos.json'

export function Header() {
    return (
        <div className="my-2 text-dark d-flex justify-content-between">
            <div className="d-flex">
                <Logo></Logo>
                <p className="fs-6 mx-1">{datos.header.nombre} </p>
            </div>
            <div>
                {
                    datos.header.links.map( (item, index) => {
                        return (<a className="mx-3 text-decoration-none" key={index} href={item.url}>{item.texto}</a>)
                    })
                }
            </div>

        </div>
    )
}