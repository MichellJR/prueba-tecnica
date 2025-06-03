const ProductTable = ({ products, onEditClick, onDeleteClick }) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description || '-'}</td>
                        <td>${parseFloat(product.price).toFixed(2)}</td>
                        <td>{product.stock}</td>
                        <td>
                            <button
                                className="btn btn-sm btn-primary me-2"
                                onClick={() => onEditClick(product)}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => onDeleteClick(product.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default ProductTable;