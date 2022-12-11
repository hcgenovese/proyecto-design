import datos from './../datos.json'

function CardPrecio({data}) {
    return (
        <div className='card w-100 m-1'>
            <div className="card-header">
                <h4 className='text-center'>{data.titulo}</h4>
            </div>
            <div className="card-body">
                <div className='d-flex align-items-baseline'>
                    <h3>{data.precio}</h3>
                    <p>{"/" + data.per}</p>
                </div>

                <ul className='list-unstyled'>
                    {
                        data.features.map( (i, index) => {
                            return (
                                <li className='mt-1' key={index}>{i}</li>
                            )
                        } )
                    }
                </ul>
                <button className='btn btn-outline-primary w-100' >{data.textButton}</button>
            </div>
        </div>
    )
}

export function Precios() {
    return (
        <div className="my-4 d-flex justify-content-between">
            {
                datos.precios.map( (item,index) => {
                    return (
                        <CardPrecio key={index} data={item}></CardPrecio>
                    )
                })
            }
            
        </div>

    )

}