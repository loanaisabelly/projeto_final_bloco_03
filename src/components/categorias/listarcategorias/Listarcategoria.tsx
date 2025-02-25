import { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import CardCategorias from '../cardcategorias/CardCategorias'
import { listar } from '../../../services/Services'
import { Oval } from 'react-loader-spinner'



function ListarCategorias() {
	
    const [categorias, setCategorias] = useState<Categoria[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarCategorias() {
        setIsLoading(true)

        try{
            await listar('/categorias', setCategorias)
        }catch(error: any){
            console.log("Erro ao listar as Categorias!")
        }finally{
            setIsLoading(false)
        }
		
	}

	useEffect(() => {
		buscarCategorias()
	}, [categorias.length])

	return (
		<>
		{isLoading && (
				 <Oval
				 height={80}
				 width={80}
				 color="#0D9488"
				 visible={true}
				 ariaLabel="oval-loading"
				 secondaryColor="#0D9488"
				 strokeWidth={2}
				 strokeWidthSecondary={2}
			   />
			)}
			<div className="flex justify-center w-full my-4">
				<div className="container flex flex-col mx-4">
					{ (!isLoading && categorias.length === 0) && (
						<span className="my-8 text-3xl text-center">
							Nenhuma categoria foi
							encontrada
						</span>
					)}

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{categorias.map((categoria) => (
							<CardCategorias
								key={categoria.id}
								categoria={categoria}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarCategorias
