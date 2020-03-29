import React from "react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <Link to="#" className="d-block">
              Alexander Pierce
            </Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview menu-open">
              <Link to="/" className="nav-link ">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/comequip" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  ครุภัณฑ์คอมพิวเตอร์
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li class="nav-item">
              <a href="pages/gallery.html" class="nav-link">
                <i class="nav-icon far fa-image"></i>
                <p>บันทึกการทำงาน</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/job" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  ตั้งค่า
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right">6</span>
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/top-nav-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation + Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/boxed.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Boxed</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/fixed-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Sidebar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-topnav.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Navbar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/fixed-footer.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Fixed Footer</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/layout/collapsed-sidebar.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};
