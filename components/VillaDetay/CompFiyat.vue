<template>
  <!-- Fiyatlar -->
  <section data-aos="fade-down" id="prices" class="aos-init aos-animate">
    <div class="row py-3">
      <div id="money-date" class="col-12 col-xl-7">
        <div class="card card-body border-light border-2 rounded-6">
          <div class="row">
            <div class="col-12">
              <h4
                class="title fw-bold d-flex align-items-center justify-content-center turuncu"
              >
                <img
                  src="front/img/detay/money.png"
                  alt=""
                  loading="lazy"
                  style="width: 35px"
                  class="me-2"
                />Sezon Fiyatları
              </h4>
              <hr />
              <ul class="ps-0 mt-3">
                <li
                  class="d-flex flex-row justify-content-between align-items-center card card-body border-light border-2 mb-2 hvr-grow"
                  data-year="2022"
                >
                  <div class="d-flex flex-column">
                    <strong class="fontsize15"
                      >1 January - 20 April 2023</strong
                    >
                    <span class="fontsize10">Minimum Kiralama: 5 Gecelik</span>
                  </div>
                  <div class="d-inline-flex">
                    <div class="d-flex flex-column align-items-center me-3">
                      <span>Haftalık</span>
                      <strong style="notranslate">₺13.580</strong>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                      <span>Gecelik</span>
                      <strong class="notranslate">₺1.940</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" class="col-12 col-xl-5 aos-init aos-animate">
        <div class="card card-body border-light border-2 rounded-6">
          <div class="p-3">
            <div class="row gx-3 pt-1">
              <div class="col-8 pe-3">
                <div
                  class="info-box bg-app-second rounded-1 pt-3 pb-3 ps-3 pe-2 mb-3"
                >
                  <div class="d-flex align-items-center ps-1 pt-1">
                    <span class="fs-7 fw-medium pe-1">Hasar Depozitosu</span>
                  </div>
                  <span class="fs-7 text-danger fw-medium d-block ps-1 mt-n1"
                    >1000 ₺</span
                  >
                </div>
                <div
                  class="info-box bg-app-second rounded-1 pt-3 pb-3 ps-3 pe-2"
                >
                  <div class="d-flex align-items-center ps-1 pt-1">
                    <span class="fs-7 fw-medium pe-1">Depozito Ödemesi</span>
                  </div>
                  <span class="fs-7 text-danger fw-medium d-block ps-1 mt-n1"
                    >%35</span
                  >
                </div>
              </div>
              <div class="col-4 ps-0">
                <a
                  href="Kurumsal/Iptal-Sartlari.aspx"
                  target="_blank"
                  class="btn btn-danger d-flex flex-column align-items-center justify-content-center h-100 w-100"
                >
                  <img
                    src="front/img/warning-white.svg"
                    width="25"
                    height="23"
                    alt="icon"
                    class="flex-shrink-0 mb-2"
                  />
                  <span class="small fw-semibold lh-sm d-block pt-1"
                    >İPTAL ŞARTLARI</span
                  ></a
                >
              </div>
            </div>
          </div>
          <div
            class="fs-7 bg-light bg-opacity-50 text-dark border-0 border-theme-light-2 py-3 px-4"
          >
            <span class="fw-bold text-danger d-block ps-2"
              >Giriş ve Çıkış Saatleri</span
            >
          </div>
          <div class="row gx-0 px-4">
            <div
              class="col-6 border-end border-theme-light-2 d-flex align-items-center ps-2 pe-4 py-3"
            >
              <div class="d-flex flex-column me-auto pt-1">
                <span class="fs-7 fw-bold lh-sm">Giriş Saatleri</span
                ><strong class="fs-5-5 fw-bold">16:00</strong>
              </div>
              <img
                src="front/img/checkin-icon.svg"
                width="24"
                height="26"
                alt="icon"
                class="flex-shrink-0 me-2 loaded"
              />
            </div>
            <div class="col-6 d-flex align-items-center ps-4 py-3">
              <div class="d-flex flex-column me-auto pt-1 ps-2">
                <span class="fs-7 fw-bold lh-sm">Çıkış Saatleri</span
                ><strong class="fs-5-5 fw-ibold">10:00</strong>
              </div>
              <img
                src="front/img/checkout-icon.svg"
                width="24"
                height="26"
                alt="icon"
                class="flex-shrink-0 me-2 loaded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="xl:w-[340px] lg:w-full">
    <div>
      <div class="bg-DetailVideoBg w-full h-56 video">
        <div class="">
          <span class="font-bold text-white text-sm mt-1.5"
            >Nasıl Kiralarım ?</span
          >

          <video width="360" height="320" controls="controls">
            <source src="video.ogg" type="video/ogg" />
            <source
              src="https://www.youtube.com/"
              type="https://www.youtube.com/"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
