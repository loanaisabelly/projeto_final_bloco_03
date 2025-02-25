import ListarProdutos from "../../components/produtos/listarprodutos/Listarprodutos"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProdutos"

function Home() {
    return (
        <>
            <div className=" bg-slate-50 flex justify-center">
                <div className='container grid grid-cols-2 text'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmácia Vai uma Dose?
                        </h2>
                        <p className='text-xl'>
                            Os Melhores Preços e Produtos
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-slate-800 '
                                >
                                 <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                              src="https://ik.imagekit.io/23lwgdahj/16312666.gif?updatedAt=1740493686091"
                              alt="Imagem Página Home"
                              className="w-2/3 rounded-full"
                        />
                    </div>
                </div>
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home