import { GiPlagueDoctorProfile } from "react-icons/gi";
import { MdBroadcastOnHome } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { GiEyedropper } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
    <div class="container-fluid">
        <button type="button" class="btn btn-primary position-relative">
            <GiPlagueDoctorProfile />
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>
        </button>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><MdBroadcastOnHome /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><MdFeaturedPlayList /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><MdPriceChange /></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <GiEyedropper />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit"><FaSearch /></button>
    </form>
    </div>
  </nav>
  );
}

export default NavBar;
