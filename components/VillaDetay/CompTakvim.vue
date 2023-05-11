<template>
  <!-- Müsaitlik Takvimi -->

  <div data-aos="fade-down" id="calendar" class="py-3">
    <div class="card card-body border-light border-2 rounded-6">
      <h4
        class="title fw-bold d-flex align-items-center justify-content-center turuncu"
      >
        <img
          src="front/img/detay/takvim.png"
          alt=""
          loading="lazy"
          style="width: 35px"
          class="me-2"
        />Müsaitlik Takvimi
      </h4>
      <hr />
      <div id="takvim" class="col-12">
        <div class="picker-title py-5">
          <ul
            class="d-flex flex-row justify-content-lg-around justify-content-start"
          >
            <li
              class="d-flex flex-row flex-nowrap align-items-center px-2 villaDesc"
            >
              <img src="front/img/datepicker/giris.svg" alt="" />
              Giriş
            </li>
            <li
              class="d-flex flex-row flex-nowrap align-items-center px-2 villaDesc"
            >
              <img src="front/img/datepicker/cikis.svg" alt="" />
              Çıkış
            </li>
            <li
              class="d-flex flex-row flex-nowrap align-items-center px-2 villaDesc"
            >
              <img src="front/img/datepicker/rezerveli.svg" alt="" />
              Dolu
            </li>
            <li
              class="d-flex flex-row flex-nowrap align-items-center px-2 villaDesc"
            >
              <img src="front/img/datepicker/odemebekliyor.svg" alt="" />
              Opsiyon
            </li>
          </ul>
        </div>
        <div id="datepicker_lg" class="d-none d-lg-block"></div>
        <div id="datepicker_sm" class="d-lg-none align"></div>
      </div>
    </div>
  </div>
</template>
