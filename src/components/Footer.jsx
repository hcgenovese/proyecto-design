import datos from './../datos.json'

function Section({data}) {
    return (
        <div>
        <h5>{data.titulo}</h5>
        <ul className="nav flex-column">
            {
                data.links.map( (i, index) => {
                    return (
                        <li key={index} ><a  target="_blank" className="text-decoration-none" href={i.url}>{i.texto}</a></li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export function Footer() {
    return (
        <div className="d-flex justify-content-between my-4">
            <div className="fs-6">{datos.footer[0].titulo}</div>
            {
                datos.footer.filter( (i, index) => index > 0)
                .map( (item, index) => {
                    return (
                        <Section key={index} data={item}></Section>
                    )
                } )
            }
        </div>
    )
}