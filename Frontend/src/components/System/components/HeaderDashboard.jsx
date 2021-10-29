import React from 'react';
import { Link } from 'react-router-dom';
const Headerdashboard = () => {
  return (
    <div>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap px-3 m-0">
        <Link class="navbar-brand col-md-2 col-lg-2 me-0 px-3" to="/dashboard">Expo<span class="text-danger">Autos</span>Group</Link>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Sign out</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Headerdashboard;
