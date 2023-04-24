<template>
  <section class="pt-0 order-5">
    <div class="container-fluid padding-fluid-lg">
      <div class="row g-4 g-xl-5">
        <CompAside />
        <div class="col-xl-8">
          <div class="vstack">
            <div class="card bg-transparent bg-transparent">
              <div class="d-flex align-items-center justify-content-between">
                <div class="card-header px-0 pt-0">
                  <h1 class="fs-2">Villa Plt</h1>
                  <p class="fw-bold mb-2">
                    <i class="bi bi-geo-alt me-2"></i>Fethiye / Ölüdeniz
                  </p>
                </div>
                <ul class="list-inline text-end">
                  <li class="list-inline-item">
                    <a href="#" class="btn btn-sm btn-light px-2"
                      ><i class="bi bi-suit-heart-fill"></i
                    ></a>
                  </li>
                  <li class="list-inline-item dropdown">
                    <a
                      href="#"
                      class="btn btn-sm btn-light px-2"
                      role="button"
                      id="dropdownShare"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-share-fill"></i>
                    </a>
                    <!-- dropdown button -->
                    <ul
                      class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                      aria-labelledby="dropdownShare"
                    >
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-twitter me-2"></i>Twitter</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-facebook me-2"></i>Facebook</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-linkedin me-2"></i>LinkedIn</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="fa-solid fa-copy me-2"></i>Copy link</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                class="ls-n05 fs-8 fw-medium d-flex flex-wrap align-items-start w-100"
              >
                <div
                  class="d-flex align-items-center me-1 fs-9"
                  style="font-style: italic"
                >
                  <img
                    src="../assets/images/icon/user.gif"
                    width="30"
                    height="21"
                    alt="icon"
                    class="flex-shrink-0 me-1"
                  /><span>4 Kişilik</span>
                </div>
                <div
                  class="d-flex align-items-center me-1 fs-9"
                  style="font-style: italic"
                >
                  <img
                    src="../assets/images/icon/bed.gif"
                    width="30"
                    height="21"
                    alt="icon"
                    class="flex-shrink-0 me-1"
                  /><span>2 Yatak Odası</span>
                </div>
                <div
                  class="d-flex align-items-center me-1 fs-9"
                  style="font-style: italic"
                >
                  <img
                    src="../assets/images/icon/bathtub.gif"
                    width="30"
                    height="21"
                    alt="icon"
                    class="flex-shrink-0 me-1"
                  /><span>1 Banyo</span>
                </div>
              </div>
              <hr />
            </div>
            <!-- Galeri START -->
            <CompGaleri />
            <!-- Galeri END -->
            <!-- Donanım START -->
            <CompDonanim />
            <!-- Donanım END -->
            <!-- Yorum START -->
            <CompYorum />
            <!-- Yorum END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CompGaleri from "@/components/VillaDetay/CompGaleri.vue";
import CompDonanim from "@/components/VillaDetay/CompDonanim.vue";
import CompAside from "@/components/VillaDetay/CompAside.vue";
import CompYorum from "@/components/VillaDetay/CompYorum.vue";
export default {
  name: "HomeView",
  components: {
    CompGaleri,
    CompDonanim,
    CompAside,
    CompYorum,
  },
};
</script>
