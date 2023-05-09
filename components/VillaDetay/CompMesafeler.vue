<template>
  <!-- Mesafeler -->
  <div
    data-aos="fade-down"
    id="distances"
    class="py-3 bg-body mt-4 card"
    style="flex-direction: row-reverse"
  >
    <div class="border-2 rounded-6 col-6">
      <div class="d-flex align-items-end justify-content-center">
        <img src="front/img/ulasim/mesafe.png" alt="" loading="lazy" />
        <h4 class="title fw-bold">Mesafeler</h4>
      </div>
      <hr />
      <div id="villaMesafeler" class="row g-3">
        <div class="col-6 d-flex">
          <div class="d-flex align-items-center p-3 px-lg-5 rounded-6 altalata">
            <div class="flex-center wh-8">
              <img src="front/img/ulasim/air.svg" alt="" loading="lazy" />
            </div>
            <span class="fs-7">Havaalanı Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div
            class="d-flex align-items-center p-3 px-lg-5 w-100 rounded-6 altalata"
          >
            <div class="flex-center wh-8">
              <img
                src="front/img/ulasim/mesafe-plaj.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <span class="fs-7">Deniz Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div
            class="d-flex align-items-center p-3 px-lg-5 w-100 rounded-6 altalata"
          >
            <div class="flex-center wh-8">
              <img
                src="front/img/ulasim/mesafe-market.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <span class="fs-7">Market Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div
            class="d-flex align-items-center p-3 px-lg-5 w-100 rounded-6 altalata"
          >
            <div class="flex-center wh-8">
              <img
                src="front/img/ulasim/mesafe-market.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <span class="fs-7">Otogar Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div
            class="d-flex align-items-center p-3 px-lg-5 w-100 rounded-6 altalata"
          >
            <div class="flex-center wh-8">
              <img
                src="front/img/ulasim/mesafe-restoran.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <span class="fs-7">Restorant Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div
            class="d-flex align-items-center p-3 px-lg-5 w-100 rounded-6 altalata"
          >
            <div class="flex-center wh-8">
              <img
                src="front/img/ulasim/mesafe-sehir-merkezi.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <span class="fs-7">Merkez Mesafesi</span
            ><strong class="notranslate" style="color: #f0a01e"></strong>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 row justify-content-center text-center ulasim">
      <div class="flex-center wh-8 col-12">
        <img src="front/img/ulasim/location.svg" alt="" loading="lazy" />
      </div>
      <span class="fs-3">HARİTADA GÖSTER</span>
      <div class="py-3" id="" style="width: 100%; height: 300px">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51215.09400811003!2d29.0805847349673!3d36.651812826378126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0439b0db6b13b%3A0x87150704244f70d7!2zRmV0aGl5ZSwgTXXEn2xh!5e0!3m2!1str!2str!4v1681724939586!5m2!1str!2str"
            width="400"
            height="250"
            style="border: 0 border-radius: 20px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div
        class="map-box white-box rounded-lg mb-4 px-4 py-3"
        style="background: darksalmon; border-radius: 30px"
      >
        <a
          href="https://www.google.com/maps/dir//36.70186996459961,29.089580535888672/@36.70186996459961,29.089580535888672,17z"
          target="_blank"
          class="d-flex align-items-center"
          ><div
            class="icon-box flex-shrink-0 icon-50 d-flex align-items-center justify-content-center border border-theme-light-2 bg-light bg-opacity-25 rounded-circle me-2"
          >
            <img
              src="https://cdn.supervillam.com/img/spacer.gif"
              data-src="https://cdn.supervillam.com/img/icons/distance.svg"
              width="20"
              height="20"
              alt="energy"
              class="lazy contain loaded"
              style="
                background-image: url('https://cdn.supervillam.com/img/icons/distance.svg');
              "
            />
          </div>
          <strong class="fs-7 fw-medium d-block ps-1"
            >Villaya Konum Al</strong
          ></a
        >
      </div>
    </div>
  </div>
</template>
