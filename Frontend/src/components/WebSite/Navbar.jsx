import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './Home';
import Catalogo from './Catalogo';
import CarPage from './Car';
import Promotores from './Promotores';
export default function Navbar() {



  return (
    <Fragment>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div class="container">
            <Link class="navbar-brand text-uppercase" to="/home">Expo<span class="text-danger">Autos</span>Group</Link>
            <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" class="collapse navbar-collapse">
              <ul class="navbar-nav text-center mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Quienes somos</a>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link " to="/home/catalogo">Catalogo</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link text-success" to="/home/nuevo-promotor">Nuevo Promotor</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/catalogo">
          <Catalogo />
        </Route>
        <Route path="/home/car" >
          <CarPage></CarPage>
        </Route>
        <Route path="/home/nuevo-promotor" >
          <Promotores></Promotores>
        </Route>
      </BrowserRouter>
    </Fragment>
  )
}
