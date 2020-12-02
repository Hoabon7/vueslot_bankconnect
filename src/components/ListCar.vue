<template>
  <div class="container listCart">
    <ButtonMenu></ButtonMenu>
    <div>
      <select
        v-model="selected"
        @change="onChange($event)"
        class="form-control"
      >
        <option value="0">Chọn</option>
        <option value="1">Gía xe thấp nhất</option>
        <option value="2">Gía xe cao nhất</option>
        <option value="3">Công xuất thấp nhất</option>
        <option value="4">Công xuất cao nhất</option>
      </select>
    </div>

    <div
      class="row list_car_bank"
      v-for="(item, index) in list_car"
      :key="index"
    >
      <div class="row col-md-4 list_logo_car">
        <div class="col-md-12 col-xs-6 col-6">
          <img
            class="img_car"
            :src="`http://bankconnect.vn/${item.image}`"
            alt=""
          />
          <p>{{ item.ten_xe }}</p>
        </div>
        <div class="price-car col-md-12 col-xs-6 col-6">
          <p>Giá bán (niêm yết)</p>
          <h3>{{ item.gia_ban }}</h3>
          <p class="uoctinh">Ước tính giá lăn bánh</p>
        </div>
      </div>
      <div class="col-md-8">
        <div>
          <ul class="list_info_car">
            <!-- <p>{{Number(item.gia_ban)+2222}}</p> -->
            <li>Động cơ/dung tích (cc):{{ item.dong_co }}</li>
            <li>Hộp số:{{ item.hop_so }}</li>
            <li>Công suất cực đại (Nm/rpm):{{ item.cong_suat }}</li>
            <li>Momen xoắn cực đại (Nm/rpm):{{ item.momen }}</li>
            <li>Kích thước DxRxC (mm):{{ item.kich_thuoc }}</li>
          </ul>
        </div>
        <div class="btn-detail">
          <button class="btn btn-danger">chi tieet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//
import ButtonMenu from "./Menu/ButtonMenu.vue";
export default {
  components: {
    ButtonMenu,

    //MainCatagory
  },

  data() {
    return {
      id_type_car: this.$route.params.id,
      list_car: null,
      url:
        "https://bankconnect.vn/api/service/9/car/category/" +
        this.$route.params.id +
        "/items/get",
      selected: 0,
      name_type_car: this.$route.params.namecar,
    };
  },
  methods: {
    fetchGifs: function () {
      fetch(this.url)
        .then((reponse) => reponse.json())
        .then((data) => (this.list_car = data.data));
    },
    splitString: function (string) {
      var t = string.split("/");
      return t;
    },
    onChange(event) {
      var t = event.target.value;

      if (t != 0) {
        if (t == 1) {
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              if (
                Number(this.list_car[i].gia_ban) >
                Number(this.list_car[j].gia_ban)
              ) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
        } else if (t == 2) {
          //xep xe gia cao nhat den thap nhat
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              if (
                Number(this.list_car[i].gia_ban) <
                Number(this.list_car[j].gia_ban)
              ) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
        } else if (t == 3) {
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              let z = this.splitString(this.list_car[i].cong_suat);
              let k = this.splitString(this.list_car[j].cong_suat);
              if (Number(z[0]) > Number(k[0])) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
          //xep xe cong xuat thap nhat den cao nhat
          //alert(3);
        } else {
          //xep xe cong xuat cao nhat xuong thap nhat
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              let z = this.splitString(this.list_car[i].cong_suat);
              let k = this.splitString(this.list_car[j].cong_suat);
              if (Number(z[0]) < Number(k[0])) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
        }
      }
    },
  },

  created: function () {
    // sử dụng created để fetch data từ phía backend ngay lúc khởi tạo.
    this.fetchGifs();
  },
};
</script>
<style scoped>

@media screen and (max-width: 768px){
  button.btn.btn-danger {
    margin-bottom: 26px;
    /* margin-right: 70px; */
    width: 160px;
  }
  .img_car {
    width: 160px;
  }
  .listCart {
    width: 100%;
  }
}
@media screen and (max-width: 424px){
  button.btn.btn-danger {
    margin-bottom: 26px;
    /* margin-right: 70px; */
    width: 200px;
  }
  .img_car {
    width: 130px;
    margin-top: 5px;
  }
  .listCart {
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .img_car {
    width: 100px;
  }
  .listCart {
    width: 100%;
  }
}
@media  screen and (min-width: 992px) {
}
@media  screen and (min-width: 1200px) {
  .img_car {
    width: 150px;
  }
  .listCart {
    width: 720px;
  }
}
@media  screen and (min-width: 1200px) {
  .img_car {
    width: 180px;
  }
  .listCart {
    width: 720px;
  }
}

ul.list_info_car > li {
  margin-top: 10px;
}

.col-md-4.list_logo_car {
  margin-top: 9px;
}

.col-md-12.col-xs-6 {
  padding: 0px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}


.list_car_bank {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
}
.list_info_car {
  text-align: left;
}
.btn-detail {
  text-align: right;
}
h3 {
  color: #c80000;
}
.uoctinh {
  color: #c80000;
  font-size: 12px;
}
</style>