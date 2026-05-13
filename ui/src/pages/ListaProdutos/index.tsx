import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function ListaProdutos() {

    const [produtos, setProdutos] = useState([
        {
            nome: "Subnautica 2",
            preco: 119,
            descricao: "Pré-venda"
        }
    ]);

    return (
        <>
            <h1>Lista Produtos</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{produtos[0].nome}</h5>
                            <p className="card-text">{produtos[0].preco}</p>
                            <p className="card-text">{produtos[0].descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}