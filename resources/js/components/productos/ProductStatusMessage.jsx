const ProductStatusMessage = ({ loading, error, productsCount, totalPaginationItems, showForm, LoadingSpinner }) => {
    if (loading && productsCount === 0 && totalPaginationItems === 0) {
        return (
            <div className="container-fluid py-4 text-center">
                <LoadingSpinner message="Cargando productos..." />
            </div>
        );
    }


    if (error) {
        return (
            <div className="container-fluid py-4">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }


    if (!showForm && productsCount === 0 && totalPaginationItems === 0) {
        return (
            <p>No hay productos registrados. ¡Haz clic en "Nuevo Producto" para añadir uno!</p>
        );
    }


    return null;
};


export default ProductStatusMessage;
