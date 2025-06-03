const LoadingSpinner = ({ message = "Cargando..." }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">{message}</span>
            </div>
            <p className="ms-2 mb-0 text-primary">{message}</p>
        </div>
    );
};

export default LoadingSpinner;