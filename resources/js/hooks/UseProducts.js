

import { useState, useEffect, useCallback } from 'react';
import apiService from '../serviices/ApiServices';
import LoadingSpinner from '../components/common/LoadingSpinner';


const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // --- ¡NUEVO ESTADO PARA LA PAGINACIÓN! ---
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        from: 0,
        to: 0,
        total: 0,
        links: [], // Los enlaces de paginación de Laravel
    });
    // ------------------------------------------


    // Función para cargar los productos (ahora acepta 'page' y 'perPage')
    // currentPage por defecto será 1, y perPage usará el valor por defecto de Laravel
    const fetchProducts = useCallback(async (page = 1) => { // Añadimos 'page' como parámetro
        setLoading(true);
        setError(null);
        try {
            // Construye la URL con el parámetro de página
            // Ejemplo: /api/products?page=1, /api/products?page=2
            const data = await apiService.request('get', `products?page=${page}`);


            setProducts(data.data); // Asigna el array de productos
            // --- ¡ACTUALIZA EL ESTADO DE PAGINACIÓN! ---
            setPagination({
                current_page: data.current_page,
                last_page: data.last_page,
                from: data.from,
                to: data.to,
                total: data.total,
                links: data.links, // Laravel proporciona un array de objetos link
            });
            // ------------------------------------------


        } catch (err) {
            console.error("Error en useProducts al cargar:", err);
            setError('Error al cargar los productos. Verifique la conexión al servidor.');
            setProducts([]); // Asegurarse de que products sea un array vacío en caso de error
            setPagination({ // Resetear paginación en error
                current_page: 1, last_page: 1, from: 0, to: 0, total: 0, links: []
            });
        } finally {
            setLoading(false);
        }
    }, []);


    // Las funciones create, update, delete ahora llamarán a fetchProducts para recargar
    // la página actual después de la operación, si es que deseas que los nuevos datos
    // aparezcan en la misma página donde se realizó la acción.


    const createProduct = async (productData) => {
        setLoading(true); // Opcional: podrías querer un estado de carga separado para las mutaciones
        setError(null);
        try {
            const newProduct = await apiService.request('post', 'products', productData);
            // Recargar la página actual después de crear un producto
            await fetchProducts(pagination.current_page);
            return newProduct;
        } catch (err) {
            console.error("Error en useProducts al crear:", err);
            setError('Error al crear el producto.');
            throw err;
        } finally {
            setLoading(false);
        }
    };


    const updateProduct = async (id, productData) => {
        setLoading(true);
        setError(null);
        try {
            const updatedProduct = await apiService.request('put', `products/${id}`, productData);
            // Recargar la página actual después de actualizar
            await fetchProducts(pagination.current_page);
            return updatedProduct;
        } catch (err) {
            console.error("Error en useProducts al actualizar:", err);
            setError('Error al actualizar el producto.');
            throw err;
        } finally {
            setLoading(false);
        }
    };


    const deleteProduct = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await apiService.request('delete', `products/${id}`);
            // Recargar la página actual, o si la página se queda vacía, ir a la anterior
            // Esto es un poco más complejo, por ahora recargamos la actual.
            // Una lógica más robusta iría a la página anterior si la actual queda vacía.
            const targetPage = products.length === 1 && pagination.current_page > 1
                               ? pagination.current_page - 1
                               : pagination.current_page;
            await fetchProducts(targetPage);
        } catch (err) {
            console.error("Error en useProducts al eliminar:", err);
            setError('Error al eliminar el producto.');
            throw err;
        } finally {
            setLoading(false);
        }
    };




    // Efecto para cargar productos al montar el hook (o la primera vez que se usa)
    useEffect(() => {
        // Carga la primera página por defecto al inicio
        fetchProducts(1);
    }, [fetchProducts]); // Depende de fetchProducts (es estable por useCallback)


    // El hook retorna los datos, los estados, las funciones Y AHORA LA PAGINACIÓN
    return {
        products,
        loading,
        error,
        pagination, // --- ¡NUEVO! ---
        fetchProducts, // Ahora acepta un parámetro 'page'
        createProduct,
        updateProduct,
        deleteProduct,
        LoadingSpinner,
    };
};


export default useProducts;