import React, { useState } from 'react';
import useProducts from '../hooks/UseProducts';
import ProductStatusMessage from '../components/productos/ProductStatusMessage';
import ProductList from '../components/productos/ProductList';
import ProductActions from '../components/productos/ProductActions';
import ProductForm from '../components/productos/ProductForm';

const ProductsPage = () => {
    const { products, loading, error, pagination, fetchProducts, LoadingSpinner, createProduct, updateProduct, deleteProduct } = useProducts();


    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);


    const handleNewProductClick = () => {
        setShowForm(!showForm || editingProduct);
        setEditingProduct(null);
    };


    const handleEditClick = (product) => {
        setEditingProduct(product);
        setShowForm(true);
    };


    const handleDeleteClick = async (productId) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            try {
                await deleteProduct(productId);
                alert('Producto eliminado con éxito.');
            } catch (err) {
                alert('Error al eliminar el producto. Revise la consola.');
                console.error("Error deleting product:", err);
            }
        }
    };


    const handleSubmitForm = async (formData) => {
        try {
            if (editingProduct) {
                await updateProduct(editingProduct.id, formData);
                alert('Producto actualizado con éxito.');
            } else {
                await createProduct(formData);
                alert('Producto creado con éxito.');
            }
            setShowForm(false);
            setEditingProduct(null);
        } catch (err) {
            alert('Ocurrió un error al guardar el producto. Verifique los datos y la conexión.');
            console.error("Error saving product:", err);
        }
    };


    const handleCancelForm = () => {
        setShowForm(false);
        setEditingProduct(null);
    };


    const handlePageChange = (pageUrl) => {
        const urlParams = new URLSearchParams(new URL(pageUrl).search);
        const page = urlParams.get('page');
        if (page) {
            fetchProducts(parseInt(page));
        }
    };


    return (
        <div className="container-fluid py-4">
            <h2 className="mb-3">Gestión de Productos</h2>


             <ProductActions
                showForm={showForm}
                editingProduct={editingProduct}
                onNewProductClick={handleNewProductClick}
            />


            {showForm && (
                <ProductForm
                    productToEdit={editingProduct}
                    onSubmit={handleSubmitForm}
                    onCancel={handleCancelForm}
                />
            )} 


            <ProductStatusMessage
                loading={loading}
                error={error}
                productsCount={products.length}
                totalPaginationItems={pagination.total}
                showForm={showForm}
                LoadingSpinner={LoadingSpinner}
            />


            {!showForm && products.length > 0 && (
                <ProductList
                    products={products}
                    pagination={pagination}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                    onPageChange={handlePageChange}
                    loading={loading}
                    LoadingSpinner={LoadingSpinner}
                />
            )}
        </div>
    );
};


export default ProductsPage;