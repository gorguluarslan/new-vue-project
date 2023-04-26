<template>
  <header class="navbar-light sticky-top">
    <nav class="navbar navbar-expand-lg" style="background-color: #a1a1a81f">
      <div class="container d-block">
        <div class="row align-items-center">
          <div class="col-4">
            <router-link class="navbar-brand" to="/">
              <img
                class="light-mode-item navbar-brand-item d-inline h-40px h-md-60px"
                src="../assets/images/logo-hotel.svg"
                alt="logo"
                style="left: 40px; position: absolute; margin-top: -1rem"
              />
              <img
                class="dark-mode-item navbar-brand-item d-inline h-40px h-md-60px"
                src="../assets/images/logo-hotel.svg"
                alt="logo"
              />
            </router-link>
          </div>

          <div class="col-8">
            <div
              class="align-items-center justify-content-end d-none d-lg-flex"
            >
              <ul class="nav border-bottom">
                <li class="nav-item">
                  <router-link class="nav-link small pb-2" to="/">
                    <i class="bi bi-briefcase me-2"></i>Rezervasyon Takip
                  </router-link>
                </li>
                <!-- Dark mode option START -->
                <li class="nav-item dropdown">
                  <button
                    class="btn btn-link text-warning lh-3 p-0 mb-0"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-circle-half theme-icon-active fa-fw"
                      viewbox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                      ></path>
                      <use href="#"></use>
                    </svg>
                  </button>

                  <ul
                    class="dropdown-menu min-w-auto dropdown-menu-end"
                    aria-labelledby="bd-theme"
                  >
                    <li class="mb-1">
                      <button
                        type="button"
                        class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="light"
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                          viewbox="0 0 16 16"
                        >
                          <path
                            d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                          ></path>
                          <use href="#"></use></svg
                        >Light
                      </button>
                    </li>
                    <li class="mb-1">
                      <button
                        type="button"
                        class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                          viewbox="0 0 16 16"
                        >
                          <path
                            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                          ></path>
                          <path
                            d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                          ></path>
                          <use href="#"></use></svg
                        >Dark
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dropdown-item d-flex align-items-center active"
                        data-bs-theme-value="auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-circle-half fa-fw mode-switch me-1"
                          viewbox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                          ></path>
                          <use href="#"></use></svg
                        >Auto
                      </button>
                    </li>
                  </ul>
                </li>
                <!-- Dark mode option END -->
                <li class="dropdown nav-item">
                  <router-link
                    to=""
                    class="nav-link small pb-2"
                    role="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><img
                      class="fa-fw me-2"
                      src="../assets/images/flags/uk.svg"
                      alt=""
                      height="16"
                      width="16"
                  /></router-link>
                  <ul
                    class="dropdown-menu dropdown-animation dropdown-menu-end min-w-auto"
                    aria-labelledby="languageDropdown"
                  >
                    <li>
                      <router-link class="dropdown-item me-4" to="/">
                        <img
                          class="fa-fw me-2"
                          src="../assets/images/flags/uk.svg"
                          alt=""
                        />English
                      </router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item me-4" to="/">
                        <img
                          class="fa-fw me-2"
                          src="../assets/images/flags/sp.svg"
                          alt=""
                        />Español
                      </router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item me-4" to="/">
                        <img
                          class="fa-fw me-2"
                          src="../assets/images/flags/fr.svg"
                          alt=""
                        />Français
                      </router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item me-4" to="/">
                        <img
                          class="fa-fw me-2"
                          src="../assets/images/flags/gr.svg"
                          alt=""
                        />Deutsch
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="d-sm-flex align-items-center justify-content-end">
              <div class="navbar-collapse collapse" id="navbarCollapse">
                <ul class="navbar-nav navbar-nav-scroll ms-auto">
                  <li class="nav-item dropdown">
                    <router-link class="nav-link" to=""
                      >Villa Tipleri</router-link
                    >
                  </li>
                  <li class="nav-item dropdown">
                    <router-link
                      class="nav-link dropdown-toggle"
                      to=""
                      id="pagesFacilities"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Hotel Facilities</router-link
                    >
                    <ul class="dropdown-menu" aria-labelledby="pagesFacilities">
                      <li>
                        <router-link class="dropdown-item" to=""
                          >Banquet</router-link
                        >
                      </li>
                      <li>
                        <router-link class="dropdown-item" to=""
                          >Fitness room
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="d-flex align-items-center justify-content-end">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span class="d-none d-sm-inline-block small">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
