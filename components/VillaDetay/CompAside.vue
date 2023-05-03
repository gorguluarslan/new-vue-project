<template>
  <aside class="col-xl-4 mt-n5 order-1">
    <div class="position-sticky" style="top: 8rem">
      <div class="card card-body shadow" style="margin-top: 6rem">
        <div
          class="d-sm-flex justify-content-sm-between align-items-center mb-3 border-bottom py-2"
        >
          <div>
            <h5 class="card-title mb-0">Rezervasyon Yap</h5>
            <span class="d-flex align-items-center fs-6"
              >Şuan bu villayı
              <span class="text-warning fw-bold mx-1">9 Kişi</span>inceliyor
            </span>
          </div>
          <div>
            <h6 class="fw-normal mb-0">
              <span class="text-danger">1.500₺</span>/Gecelik
            </h6>
            <small>Başlayan fiyatlarla</small>
          </div>
        </div>
        <div class="mb-0">
          <div class="row g-4 mb-3">
            <!-- Item -->
            <div class="col-md-6">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Giriş Tarihi</h6>
                <h6 class="mb-0">4 Mart</h6>
              </div>
            </div>
            <!-- Item -->
            <div class="col-md-6">
              <div class="bg-light py-3 px-4 rounded-3">
                <h6 class="fw-light small mb-1">Çıkış Tarihi</h6>
                <h6 class="mb-0">8 Mart</h6>
              </div>
            </div>
          </div>

          <!-- List -->
          <ul class="list-group list-group-borderless mb-3">
            <li class="list-group-item px-2 d-flex justify-content-between">
              <span class="h6 fw-light mb-0">Konaklama Tutarı(6 Gece)</span>
              <span class="h6 fw-light mb-0">20.500₺</span>
            </li>
            <li class="list-group-item px-2 d-flex justify-content-between">
              <span class="h6 fw-light mb-0">Temizlik Ücreti</span>
              <span class="h6 fw-light mb-0">500₺</span>
            </li>
            <li class="list-group-item px-2 d-flex justify-content-between">
              <span class="h6 fw-light mb-0">Toplam Tutar</span>
              <span class="h6 fw-light mb-0">20.500₺</span>
            </li>
            <li class="list-group-item px-2 d-flex justify-content-between">
              <span class="h6 fw-light mb-0">Ön Ödeme</span>
              <span class="h6 fw-light mb-0">4.100₺</span>
            </li>
            <li
              class="list-group-item bg-light d-flex justify-content-between rounded-2 px-2 mt-2"
            >
              <span class="h5 fw-normal mb-0 ps-1"
                >Villaya girişte ödenecek</span
              >
              <span class="h5 fw-normal mb-0">20.500₺</span>
            </li>
          </ul>
        </div>
        <!-- Button -->
        <div class="d-grid">
          <a
            href="#room-options"
            class="btn btn-lg rounded-0 btn-success-soft mb-0"
            >Rezervasyon Talebi Gönder</a
          >
        </div>
        <div class="bg-transparent border-0">
          <div class="px-3 my-2">
            <div
              class="warning text-white align-items-center row rounded-4 p-2"
              role="alert"
            >
              <div class="col-2">
                <i class="fas fa-lightbulb fa-3x"></i>
              </div>
              <div class="col-10">
                <small
                  >Yapmış olduğunuz ön rezervasyonunuz, sizden önce ve ya sonra
                  yapılan rezervasyona dikkat edilerek alınması uygundur.
                  Tarihler arasında boşluk olması durumunda rezervasyonunuz
                  onaylanmayacaktır. Onay belgeniz gönderildiği taktirde
                  rezervasyonunuz onaylanmış olacaktır</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
