const ProductActions = ({ showForm, editingProduct, onNewProductClick }) => {
    return (
        <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-success me-2" onClick={onNewProductClick}>
                {showForm && !editingProduct ? 'Ocultar Formulario' : 'Nuevo Producto'}
            </button>
        </div>
    );
};


export default ProductActions;