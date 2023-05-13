<template>
  <div class="card bg-transparent">
    <div class="card-header border-bottom bg-transparent px-0">
      <h3 class="card-title mb-0">Müşteri Yorumu</h3>
    </div>
    <div class="card-body pt-4 p-0">
      <div class="card bg-light p-4 mb-4">
        <div class="row g-4 align-items-center">
          <div class="col-md-4">
            <div class="text-center">
              <h2 class="mb-0">4.5</h2>
              <p class="mb-2">120 değerlendirme</p>
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-0">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-inline-item me-0">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-inline-item me-0">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-inline-item me-0">
                  <i class="bi bi-star-fill text-warning"></i>
                </li>
                <li class="list-inline-item me-0">
                  <i class="bi bi-star-half text-warning"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body p-0">
              <div class="row gx-3 g-2 align-items-center">
                <div class="col-9 col-sm-10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 95%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3 col-sm-2 text-end">
                  <span class="h6 fw-light mb-0">85%</span>
                </div>
                <div class="col-9 col-sm-10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 75%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3 col-sm-2 text-end">
                  <span class="h6 fw-light mb-0">75%</span>
                </div>
                <div class="col-9 col-sm-10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3 col-sm-2 text-end">
                  <span class="h6 fw-light mb-0">60%</span>
                </div>
                <div class="col-9 col-sm-10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 35%"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3 col-sm-2 text-end">
                  <span class="h6 fw-light mb-0">35%</span>
                </div>
                <div class="col-9 col-sm-10">
                  <div class="progress progress-sm bg-warning bg-opacity-15">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="col-3 col-sm-2 text-end">
                  <span class="h6 fw-light mb-0">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="mb-5">
        <div class="form-control-bg-light mb-3">
          <select class="form-select js-choice">
            <option>★★★★★ (5/5)</option>
            <option>★★★★☆ (4/5)</option>
            <option>★★★☆☆ (3/5)</option>
            <option>★★☆☆☆ (2/5)</option>
            <option>★☆☆☆☆ (1/5)</option>
          </select>
        </div>
        <div class="form-control-bg-light mb-3">
          <input
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="* Ad Soyad"
            rows="3"
          />
        </div>
        <div class="form-control-bg-light mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="* Yorumunuz"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-primary rounded-0 mb-0">
          Gönder <i class="bi fa-fw bi-arrow-right ms-2"></i>
        </button>
      </form>
      <div class="d-md-flex my-4">
        <div class="avatar avatar-lg me-3 flex-shrink-0">
          <img
            class="avatar-img rounded-circle"
            src="../../assets/images/avatar/01.jpeg"
            alt="avatar"
          />
        </div>
        <div>
          <div class="d-flex justify-content-between mt-1 mt-md-0">
            <div>
              <h6 class="me-3 mb-0">Ad Soyad</h6>
              <ul class="nav nav-divider small mb-2">
                <li class="nav-item">13 Nov 2022</li>
              </ul>
            </div>
            <div class="icon-md rounded text-bg-warning fs-6">4.5</div>
          </div>
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eum
            esse at deserunt corporis incidunt dolore maxime debitis unde
            quidem, pariatur voluptatem aspernatur suscipit adipisci. aut.
          </p>
        </div>
      </div>
      <div class="my-4 ps-2 ps-md-3">
        <div class="d-md-flex p-3 bg-light rounded-3">
          <img
            class="avatar avatar-sm rounded-circle me-3"
            src="../../assets/images/avatar/02.jpg"
            alt="avatar"
          />
          <div class="mt-2 mt-md-0">
            <h6 class="mb-1">Site Sahibi</h6>
            <p class="mb-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              odio illum, veritatis eaque repellendus quos, corporis incidunt
              neque eligendi, pariatur nobis quasi? Quidem, ut consequuntur?
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="text-center">
        <a href="#" class="btn btn-primary-soft rounded-0 mb-0"
          >Tümünü Göster</a
        >
      </div>
    </div>
  </div>
</template>
