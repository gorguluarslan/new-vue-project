import SearchBox from '@/components/SearchBox.vue';

<template>
  <section class="pt-0">
    <div class="container">
      <div
        class="rounded-3 p-3 p-sm-5"
        style="
          background-image: url(assets/images/bg/05.jpg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        "
      >
        <div class="row my-2 my-xl-5">
          <div class="col-md-8 mx-auto">
            <h1 class="text-center text-white">150 Hotels in New York</h1>
          </div>
        </div>
        <!-- Banner title -->
        <SearchBox />
      </div>
    </div>
  </section>
  <section class="pt-0">
    <div class="container">
      <!-- Tabs and alert START -->
      <div class="row mb-4">
        <div class="col-12">
          <!-- Buttons -->
          <div
            class="hstack gap-3 justify-content-between justify-content-md-end"
          >
            <!-- Filter offcanvas button -->
            <button
              class="btn btn-primary-soft btn-primary-check mb-0 d-xl-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
            >
              <i class="fa-solid fa-sliders-h me-1"></i> Show filters
            </button>
            <!-- tabs -->
            <ul
              class="nav nav-pills nav-pills-dark"
              id="tour-pills-tab"
              role="tablist"
            >
              <!-- Tab item -->
              <li class="nav-item">
                <a
                  class="nav-link rounded-start rounded-0 mb-0 active"
                  href="hotel-list.html"
                  ><i class="bi fa-fw bi-list-ul"></i
                ></a>
              </li>
              <!-- Tab item -->
              <li class="nav-item">
                <a
                  class="nav-link rounded-end rounded-0 mb-0"
                  href="hotel-grid.html"
                  ><i class="bi fa-fw bi-grid-fill"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Tabs and alert END -->
      <div class="row">
        <!-- Comp Aside START -->
        <CompAside />
        <!-- Comp Aside END -->
        <div class="col-xl-8 col-xxl-9">
          <div class="vstack gap-4">
            <!-- Card START -->
            <CardList />
            <!-- Card END -->
            <!-- Pagination START -->
            <CompPagination />
            <!-- Pagination END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import CompAside from "@/components/CompAside.vue";
import CardList from "@/components/CardComp/CardList.vue";
import CompPagination from "@/components/CompPagination.vue";
export default {
  name: "HomeView",
  components: {
    SearchBox,
    CompAside,
    CardList,
    CompPagination,
  },
};
</script>
