# 📦 Sistema de Gestión de Productos con Laravel y React

Este es un sistema robusto para la gestión de productos, construido utilizando Laravel para el backend (API RESTful) y React para el frontend (interfaz de usuario). Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos, incluyendo paginación y manejo de estado.

## ✨ Características Principales

* **Backend con Laravel:**
    * API RESTful para la gestión de productos.
    * Validación de datos robusta con Form Requests.
    * Paginación de productos.
    * Manejo de operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
* **Frontend con React:**
    * Interfaz de usuario dinámica y reactiva.
    * Gestión de estado con React Hooks (`useState`, `useEffect`, `useCallback`).
    * Comunicación con la API backend a través de Axios.
    * Componentes reutilizables para la lista, paginación, formularios y mensajes de estado.
    * Estilos con Bootstrap.

---

## 🛠️ Tecnologías Utilizadas

**Backend:**
* **PHP**
* **Laravel Framework** (versión específica, si la sabes, ej. `^10.0`)
* **Laravel Sail** (para entorno de desarrollo Docker)
* **MySQL / PostgreSQL** (o la base de datos que uses con Sail)

**Frontend:**
* **JavaScript (ES6+)**
* **React.js** (versión específica, si la sabes, ej. `^18.2.0`)
* **Vite** (como herramienta de bundling y servidor de desarrollo)
* **Axios** (cliente HTTP para peticiones a la API)
* **Bootstrap** (framework CSS para el diseño)
* **React Router DOM** (si planeas usar enrutamiento en el frontend)
* **Bootstrap Icons** (si los utilizas)

---

## 🚀 Puesta en Marcha

Para poner en marcha este proyecto, sigue los siguientes pasos. Se asume que tienes **Docker** instalado y funcionando en tu sistema, ya que el proyecto utiliza **Laravel Sail**.

### 3. Ejecuta el Script de Instalación y Configuración del Entorno

Este script `setup.sh` se encarga de **armar los contenedores Docker con Laravel Sail**, instalar todas las dependencias necesarias para el backend y el frontend, y realizar las configuraciones iniciales de la base de datos.

```bash
# Asegúrate de darle permisos de ejecución si aún no lo has hecho: chmod +x setup.sh
./setup.sh

nota: para ejecutarlo pon sh setup