import { Outlet, Link } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="d-flex w-100 vh-100 overflow-hidden">


      <div className="bg-light border-end flex-shrink-0" style={{ width: '250px' }}>
        <div className="p-4 text-center fs-4 fw-bold border-bottom">
          <Link to="/" className="text-decoration-none text-dark">
            <i className="bi bi-lightning-fill me-2"></i> Mi App
          </Link>
        </div>
        <div className="list-group list-group-flush border-0 rounded-0">
          <Link to="/products" className="list-group-item list-group-item-action bg-light p-3">
            <i className="bi bi-box-seam-fill me-2"></i> Productos
          </Link>
        </div>
      </div>


      <div className="d-flex flex-column flex-grow-1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom flex-shrink-0">
          <div className="container-fluid">
            <h5 className="mb-0 ms-3">Panel de Gestión</h5>
          </div>
        </nav>


        <div className="container-fluid py-4 overflow-auto flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default MainLayout;
