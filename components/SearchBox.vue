<template>
  <form
    class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4"
  >
    <div class="row g-4 align-items-center">
      <!-- Location -->
      <div class="col-lg-4">
        <div
          class="form-control-border form-control-transparent form-fs-md d-flex"
        >
          <!-- Icon -->
          <i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
          <!-- Select input -->
          <div class="flex-grow-1">
            <label class="form-label">Location</label>
            <select class="form-select js-choice" data-search-enabled="true">
              <option value="">Select location</option>
              <option>San Jacinto, USA</option>
              <option>North Dakota, Canada</option>
              <option>West Virginia, Paris</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Check in -->
      <div class="col-lg-4">
        <div class="d-flex">
          <!-- Icon -->
          <i class="bi bi-calendar fs-3 me-2 mt-2"></i>
          <!-- Date input -->
          <div class="form-control-border form-control-transparent form-fs-md">
            <label class="form-label">Check in - out</label>
            <input
              type="text"
              class="form-control flatpickr"
              data-mode="range"
              placeholder="Select date"
              value="19 Sep to 28 Sep"
            />
          </div>
        </div>
      </div>

      <!-- Guest -->
      <div class="col-lg-4">
        <div
          class="form-control-border form-control-transparent form-fs-md d-flex"
        >
          <!-- Icon -->
          <i class="bi bi-person fs-3 me-2 mt-2"></i>
          <!-- Dropdown input -->
          <div class="w-100">
            <label class="form-label">Guests & rooms</label>
            <div class="dropdown guest-selector me-2">
              <input
                type="text"
                class="form-guest-selector form-control selection-result"
                value="2 Guests 1 Room"
                id="dropdownGuest"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
              />

              <!-- dropdown items -->
              <ul
                class="dropdown-menu guest-selector-dropdown"
                aria-labelledby="dropdownGuest"
              >
                <!-- Adult -->
                <li class="d-flex justify-content-between">
                  <div>
                    <h6 class="mb-0">Adults</h6>
                    <small>Ages 13 or above</small>
                  </div>

                  <div class="hstack gap-1 align-items-center">
                    <button
                      type="button"
                      class="btn btn-link adult-remove p-0 mb-0"
                    >
                      <i class="bi bi-dash-circle fs-5 fa-fw"></i>
                    </button>
                    <h6 class="guest-selector-count mb-0 adults">2</h6>
                    <button
                      type="button"
                      class="btn btn-link adult-add p-0 mb-0"
                    >
                      <i class="bi bi-plus-circle fs-5 fa-fw"></i>
                    </button>
                  </div>
                </li>

                <!-- Divider -->
                <li class="dropdown-divider"></li>

                <!-- Child -->
                <li class="d-flex justify-content-between">
                  <div>
                    <h6 class="mb-0">Child</h6>
                    <small>Ages 13 below</small>
                  </div>

                  <div class="hstack gap-1 align-items-center">
                    <button
                      type="button"
                      class="btn btn-link child-remove p-0 mb-0"
                    >
                      <i class="bi bi-dash-circle fs-5 fa-fw"></i>
                    </button>
                    <h6 class="guest-selector-count mb-0 child">0</h6>
                    <button
                      type="button"
                      class="btn btn-link child-add p-0 mb-0"
                    >
                      <i class="bi bi-plus-circle fs-5 fa-fw"></i>
                    </button>
                  </div>
                </li>

                <!-- Divider -->
                <li class="dropdown-divider"></li>

                <!-- Rooms -->
                <li class="d-flex justify-content-between">
                  <div>
                    <h6 class="mb-0">Rooms</h6>
                    <small>Max room 8</small>
                  </div>

                  <div class="hstack gap-1 align-items-center">
                    <button
                      type="button"
                      class="btn btn-link room-remove p-0 mb-0"
                    >
                      <i class="bi bi-dash-circle fs-5 fa-fw"></i>
                    </button>
                    <h6 class="guest-selector-count mb-0 rooms">1</h6>
                    <button
                      type="button"
                      class="btn btn-link room-add p-0 mb-0"
                    >
                      <i class="bi bi-plus-circle fs-5 fa-fw"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button -->
    <div class="btn-position-md-middle">
      <a class="icon-lg btn btn-round btn-primary mb-0" href="#"
        ><i class="bi bi-search fa-fw"></i
      ></a>
    </div>
  </form>
</template>
