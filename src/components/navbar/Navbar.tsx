import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   text-white bg-slate-800'>
            
                <div className="container flex justify-between text-lg">
                    Farmacia

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Pesquisar produto"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
							>
								<MagnifyingGlass
									size={14}
									weight="bold"
								/>
							</button>
						</form>
					</div>
					
                    <div className='flex gap-4'>
					Produtos
					Categorias
					Cadastrar Categoria

					<User
						size={32}
						weight="bold"
					/>

					<ShoppingCart
						size={32}
						weight="bold"
					/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar