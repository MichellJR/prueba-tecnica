const ProductPagination = ({ pagination, onPageChange }) => {
    if (!pagination.links || pagination.links.length <= 3) {
        return null;
    }


    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {pagination.links.map((link, index) => (
                    <li
                        key={index}
                        className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                    >
                        <button
                            className="page-link"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            onClick={() => link.url && onPageChange(link.url)}
                            disabled={!link.url}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default ProductPagination;