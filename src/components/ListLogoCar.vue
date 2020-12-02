<template>
  <div class="container listLogo">
    <ButtonMenu></ButtonMenu>
    <div class="row DataJson">
      <div
        v-for="(item, index) in gifs"
        :key="index"
        class="col-4 col-sx-4 col-sm-4 col-md-4 col-lg-4 img_car"
      >
        <img
          @click="goToEvents(item.name, item.id)"
          :src="`http://bankconnect.vn/${item.image}`"
          alt=""
          class="logo_car uk-button uk-button-link"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ButtonMenu from "./Menu/ButtonMenu.vue";
export default {
  components: {
    ButtonMenu,

    // MainCatagory
  },
  data() {
    return {
      url: "https://bankconnect.vn/api/car/category",
      gifs: null,
      typeCar: "",
    };
  },
  methods: {
    fetchGifs: function () {
      fetch(this.url)
        .then((reponse) => reponse.json())
        .then((data) => (this.gifs = data.data));
    },
    goToEvents: function (name, id) {
      this.typeCar = name;
      location.href =
        "http://localhost:8080/catagoryCar/ListCar" + "/" + id + "/" + name;
    },
  },
  created: function () {
    // sử dụng created để fetch data từ phía backend ngay lúc khởi tạo.
    this.fetchGifs();
  },
  mounted: function () {
    this.fetchGifs();
  },
};
</script>
<style scoped>
@media screen and (max-width: 575px) {
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 80px;
    height: 70px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
  .listLogo {
  width: 100%;
}
}
@media screen and (max-width: 420px) {
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 80px;
    height: 50px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
  .listLogo {
    width: 100%;
  }
}
@media screen and (min-width: 576px) {
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 140px;
    height: 70px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
  .listLogo {
    width: 500px;
  }
}
@media screen and (min-width: 768px) {
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 180px;
    height: 100px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
  .listLogo {
    width: 700px;
  }
}
@media screen and (min-width: 992px) {
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 180px;
    height: 100px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
  .listLogo {
    width: 700px;
  }
}
@media screen and (min-width: 1200px) {
  .listLogo {
    width: 700px;
  }
  .img_car {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .logo_car {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    width: 200px;
    height: 100px;
    object-fit: scale-down;
    vertical-align: middle;
    padding: 10px;
  }
}

.DataJson {
  border: 1px solid green;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>