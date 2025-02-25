import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormProduto from '../formprodutos/Formprodutos';



function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='px-4 py-2 border border-black rounded hover:bg-slate-800 hover:text-white'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;