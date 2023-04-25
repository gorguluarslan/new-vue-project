<template>
  <!-- Top Button -->
  <button class="SayfaBası">
    <a href="#top">Top icon</a>
  </button>
  <footer class="bg-dark pt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3">
          <router-link class="navbar-brand" to="/">
            <img
              class="light-mode-item navbar-brand-item d-inline h-40px h-md-60px"
              src="../assets/images/logo-light.svg"
              alt="logo"
            />
          </router-link>
          <router-link to="/">
            <p class="my-3 text-muted">
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>
          </router-link>
          <p class="mb-2">
            <router-link class="text-muted text-primary-hover" to="tel:">
              <i class="bi bi-telephone me-2"></i>+1234 568 963
            </router-link>
          </p>
          <p class="mb-0">
            <router-link class="text-muted text-primary-hover" to="mailto:">
              <i class="bi bi-envelope me-2"></i>example@gmail.com
            </router-link>
          </p>
        </div>
        <div class="col-lg-8 ms-auto">
          <div class="row g-4">
            <!-- Link block -->
            <div class="col-6 col-md-3">
              <h5 class="text-white mb-2 mb-md-4">Başlık 1</h5>
              <ul class="nav flex-column text-primary-hover">
                <li class="nav-item">
                  <router-link class="nav-link text-muted" to="/iletisim/">
                    Link 1
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Link block -->
            <div class="col-6 col-md-3">
              <h5 class="text-white mb-2 mb-md-4">Başlık 2</h5>
              <ul class="nav flex-column text-primary-hover">
                <li class="nav-item">
                  <router-link class="nav-link text-muted" to="/">
                    Link 1
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Link block -->
            <div class="col-6 col-md-3">
              <h5 class="text-white mb-2 mb-md-4">Başlık 3</h5>
              <ul class="nav flex-column text-primary-hover">
                <li class="nav-item">
                  <router-link class="nav-link text-muted" to="/">
                    Link 1
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Link block -->
            <div class="col-6 col-md-3">
              <h5 class="text-white mb-2 mb-md-4">Başlık 4</h5>
              <ul class="nav flex-column text-primary-hover">
                <li class="nav-item">
                  <router-link class="nav-link text-muted" to="/">
                    Link 1
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Widget 2 END -->
      </div>
      <!-- Row END -->

      <!-- Tops Links -->
      <div class="row mt-5">
        <h5 class="mb-2 text-white">Top Links</h5>
        <ul class="list-inline text-primary-hover lh-lg">
          <li class="list-inline-item">
            <router-link class="text-muted" to="/"> link 1 </router-link>
          </li>
        </ul>
      </div>

      <!-- Payment and card -->
      <div class="row g-4 justify-content-between mt-0 mt-md-2">
        <!-- Payment card -->
        <div class="col-sm-7 col-md-6 col-lg-4">
          <h5 class="text-white mb-2">Ödeme & Güvenlik</h5>
          <ul class="list-inline mb-0 mt-3">
            <li class="list-inline-item">
              <router-link to="/">
                <img
                  src="../assets/images/element/paypal.svg"
                  class="h-30px"
                  alt=""
                />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/">
                <img
                  src="../assets/images/element/visa.svg"
                  class="h-30px"
                  alt=""
                />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/">
                <img
                  src="../assets/images/element/mastercard.svg"
                  class="h-30px"
                  alt=""
                />
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="/">
                <img
                  src="../assets/images/element/expresscard.svg"
                  class="h-30px"
                  alt=""
                />
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social media icon -->
        <div class="col-sm-5 col-md-6 col-lg-3 text-sm-end">
          <h5 class="text-white mb-2">Sosyal Medya</h5>
          <ul class="list-inline mb-0 mt-3">
            <li class="list-inline-item">
              <router-link class="btn btn-sm px-2 bg-facebook mb-0" to="/">
                <i class="fab fa-facebook"></i>
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link class="btn btn-sm px-2 bg-instagram mb-0" to="/">
                <i class="fab fa-instagram"></i>
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link class="btn btn-sm px-2 bg-twitter mb-0" to="/">
                <i class="fab fa-twitter"></i>
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link class="btn btn-sm px-2 bg-linkedin mb-0" to="/">
                <i class="fab fa-linkedin"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <hr class="mt-4 mb-0" />

      <!-- Bottom footer -->
      <div class="row">
        <div class="container">
          <div
            class="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start"
          >
            <!-- copyright text -->
            <div class="text-muted text-primary-hover">
              <router-link class="nav-link py-1 text-muted pe-0" to="/">
                Copyrights ©2023 Booking.
              </router-link>
            </div>
            <!-- copyright links-->
            <div class="nav mt-2 mt-lg-0">
              <ul class="list-inline text-primary-hover mx-auto mb-0">
                <li class="list-inline-item me-0">
                  <router-link class="nav-link py-1 text-muted pe-0" to="/">
                    Privacy policy
                  </router-link>
                </li>
                <li class="list-inline-item me-0">
                  <router-link class="nav-link py-1 text-muted pe-0" to="/">
                    Terms and conditions
                  </router-link>
                </li>
                <li class="list-inline-item me-0">
                  <router-link class="nav-link py-1 text-muted pe-0" to="/">
                    Refund policy
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
