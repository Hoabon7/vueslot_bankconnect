<template>
  <div class="container row body">
    <h4>So sánh lãi suất, tìm kiếm, kết nối ngân hàng phù hợp</h4>
    <div class="col-xs-6 col-md-6 col-sm-6 col-6">
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Vaymuanha.png" alt="" />
            <br />
            Vay tiền mua nhà
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Vaytinchap.png" alt="" />
            <br />
            Vay thế chấp
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Guitietkiem.png" alt="" />
            <br />
            Gửi tiết kiệm
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Motaikhoansodep.png" alt="" />
            <br />
            Mở tài khoản số đẹp
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img
              src="@/assets/image/anhcatagory/Muabaohiemthanvo o to.png"
              alt=""
            />
            <br />
            Mua bảo hiểm thân vỏ ô tô
          </a>
        </a>
      </div>
    </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-6">
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Vaymuaoto.png" alt="" />
            <br />
            Vay mua ô tô
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img
              src="@/assets/image/anhcatagory/Vaythechapmucdichkhac.png"
              alt=""
            />
            <br />
            Vay thế chấp mục đích khác
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Mothetindung.png" alt="" />
            <br />
            Mở thẻ tín dụng
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="#" class="service-control">
          <a>
            <img
              src="@/assets/image/anhcatagory/Muabaohiemnhantho.png"
              alt=""
            />
            <br />
            Mua bảo hiểm nhân thọ
          </a>
        </a>
      </div>
      <div class="subservice">
        <a href="/ListLogoCar" class="service-control">
          <a>
            <img src="@/assets/image/anhcatagory/Muaotomoi.png" alt="" />
            <br />
            Mua ô tô mới
          </a>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 575px) {
  .body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-image: linear-gradient(180deg, #c50103, #fff4cd);
  }
  h4 {
    color: white;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .service-control img {
    width: 25px;
    height: 25px;
    object-fit: scale-down;
    margin-top: 10px;
    /* padding: 15px; */
  }
   .subservice {
    z-index: -1;
    background-color: white;
    height: 86px;
    border-radius: 5px;
    margin-bottom: 5px;
    overflow: visible;
  }
}
@media screen and (max-width: 420px) {
  .body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-image: linear-gradient(180deg, #c50103, #fff4cd);
  }
  h4 {
    color: white;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .service-control img {
    width: 45px;
    height: 45px;
    object-fit: scale-down;
    margin-top: 10px;
    /* padding: 15px; */
  }
   .subservice {
    z-index: -1;
    background-color: white;
    height: 86px;
    border-radius: 5px;
    margin-bottom: 5px;
    overflow: visible;
  }
}
@media screen and (min-width: 576px) {
  .body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-image: linear-gradient(180deg, #c50103, #fff4cd);
  }
   .subservice {
    z-index: -1;
    background-color: white;
    height: 86px;
    border-radius: 5px;
    margin-bottom: 5px;
    overflow: visible;
  }
  h4 {
    color: white;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .service-control img {
    width: 45px;
    height: 45px;
    object-fit: scale-down;
    margin-top: 10px;
    /* padding: 15px; */
  }
}
@media screen and (min-width: 768px) {
  .body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-image: linear-gradient(180deg, #c50103, #fff4cd);
  }
  .subservice {
    z-index: -1;
    background-color: white;
    height: 86px;
    border-radius: 5px;
    margin-bottom: 5px;
    overflow: visible;
  }
  h4 {
    color: white;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .service-control img {
    width: 45px;
    height: 45px;
    object-fit: scale-down;
    margin-top: 10px;
    /* padding: 15px; */
  }
}
@media screen and (min-width: 992px) {
  .body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    background-image: linear-gradient(180deg, #c50103, #fff4cd);
  }
  .subservice {
    z-index: -1;
    background-color: white;
    height: 86px;
    border-radius: 5px;
    margin-bottom: 5px;
    overflow: visible;
  }
  h4 {
    color: white;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .service-control img {
    width: 55px;
    height: 55px;
    object-fit: scale-down;
    margin-top: 10px;
    /* padding: 15px; */
  }
}
/* @media screen and (min-width: 1200px) {
  .body {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  background-image: linear-gradient(180deg, #c50103, #fff4cd);
}
  
} */

a.service-control {
  text-decoration: none;
  color: black;
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  /* top: 7px; */
}
</style>