<template>
  <section class="pt-0">
    <div class="container-fluid px-0 position-relative">
      <!-- Bg image -->
      <div
        class="rounded-0 p-4 p-sm-5"
        style="
          background-image: url(https://booking.webestica.com/assets/images/bg/02.jpg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        "
      >
        <!-- Banner title -->
        <div class="row justify-content-between pt-0 pb-5">
          <div class="col-md-7 col-lg-8 col-xxl-7 pb-5 mb-0 mb-lg-5">
            <h1 class="text-white">Life Is Adventure Make The Best Of It</h1>
            <p class="text-white mb-0">
              Planning for a trip? we will organize your best trip with the best
              destination and within the best budgets!
            </p>
          </div>
        </div>
      </div>

      <!-- Search START -->
      <div class="row mt-n7">
        <div class="col-11 mx-auto">
          <!-- Booking from START -->
          <form class="bg-mode shadow rounded-3 p-4">
            <div class="row g-4 align-items-center">
              <div class="col-xl-10">
                <div class="row g-4">
                  <!-- Location -->
                  <div class="col-md-6 col-lg-4">
                    <label class="h6 fw-normal mb-0"
                      ><i class="bi bi-geo-alt text-primary me-1"></i
                      >Location</label
                    >
                    <!-- Input field -->
                    <div
                      class="form-border-bottom form-control-transparent form-fs-lg mt-2"
                    >
                      <select
                        class="form-select js-choice"
                        data-search-enabled="true"
                      >
                        <option value="">Select location</option>
                        <option>San Jacinto, USA</option>
                        <option>North Dakota, Canada</option>
                        <option>West Virginia, Paris</option>
                      </select>
                    </div>
                  </div>

                  <!-- Check in -->
                  <div class="col-md-6 col-lg-4">
                    <label class="h6 fw-normal mb-0"
                      ><i class="bi bi-calendar text-primary me-1"></i
                      >Date</label
                    >
                    <!-- Input field -->
                    <div
                      class="form-border-bottom form-control-transparent form-fs-lg mt-2"
                    >
                      <input
                        type="text"
                        class="form-control flatpickr py-2"
                        data-date-format="d M Y"
                        placeholder="Choose a date"
                      />
                    </div>
                  </div>

                  <!-- Guest -->
                  <div class="col-md-6 col-lg-4">
                    <label class="h6 fw-normal mb-0"
                      ><i
                        class="fa-solid fa-person-skating text-primary me-1"
                      ></i
                      >Tour type</label
                    >
                    <!-- Input field -->
                    <div
                      class="form-border-bottom form-control-transparent form-fs-lg mt-2"
                    >
                      <select
                        class="form-select js-choice"
                        data-search-enabled="true"
                      >
                        <option value="">Select type</option>
                        <option>Adventure</option>
                        <option>Beach</option>
                        <option>Desert</option>
                        <option>History</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="col-xl-2">
                <div class="d-grid">
                  <a href="#" class="btn btn-lg btn-dark mb-0">Take a Tour</a>
                </div>
              </div>
            </div>
          </form>
          <!-- Booking from END -->
        </div>
      </div>
      <!-- Search END -->
    </div>
  </section>
</template>
