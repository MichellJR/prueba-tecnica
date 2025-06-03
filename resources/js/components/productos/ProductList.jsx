import ProductTable from './ProductTable';
import ProductPagination from './ProductPagination';


const ProductList = ({ products, pagination, onEditClick, onDeleteClick, onPageChange, loading, LoadingSpinner }) => {
    return (
        <>
            {loading && (
                <div className="my-3 text-center">
                    <LoadingSpinner message="Actualizando lista..." />
                </div>
            )}
            <div className="table-responsive">
                <ProductTable
                    products={products}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                />
            </div>
            <ProductPagination
                pagination={pagination}
                onPageChange={onPageChange}
            />
            <div className="text-center mt-3">
                <p>
                    Mostrando {pagination.from} a {pagination.to} de {pagination.total} productos.
                </p>
            </div>
        </>
    );
};


export default ProductList;
