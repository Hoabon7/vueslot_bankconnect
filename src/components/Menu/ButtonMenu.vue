<template>
  <div id="Button-menu">
    <nav class="main-nav">
      <Burger></Burger>
      <Body></Body>
    </nav>

    <Sidebar>
      <div class="logo">
        <img src="@/assets/image/logo_bankconnect.png" alt="" />
      </div>

      <div class="row sig-up">
        <button class="btn login-customers col-6">Dang ki</button>
        <button class="btn register-customers col-6">Dang nhap</button>
      </div>

      <div class="list-menu">
        <ul class="list-group list-group-flush text-left col-12 pl-0 pr-0">
          <li class="list-group-item" v-b-toggle.collapse-1 @click="show">
            <div class="icon-item">
              <img src="@/assets/image/home.png" alt="" />
            </div>
            <span> Trang chủ</span>
          </li>

          <li class="list-group-item" v-b-toggle.collapse-2>
            <div class="icon-item">
              <img src="@/assets/image/user.png" alt="" />
            </div>
            <span>Tiện ích cá nhân</span>
            <b-collapse id="collapse-2">
              <b-list-group>
                <b-list-group-item href="#some-link"
                  >Cập nhật thông tin cá nhân</b-list-group-item
                >
                <b-list-group-item href="#">Hoạt động</b-list-group-item>
                <b-list-group-item href="#">Tiến độ hồ sợ</b-list-group-item>
                <b-list-group-item href="#foobar">Thông báo</b-list-group-item>
              </b-list-group>
            </b-collapse>
          </li>

          <li class="list-group-item" v-b-toggle.collapse-3>
            <div class="icon-item">
              <img src="@/assets/image/dangkydoitac.png" alt="" />
            </div>
            <span>Đăng kí đối tác</span>
            <b-collapse id="collapse-3"> </b-collapse>
          </li>

          <li class="list-group-item" v-b-toggle.collapse-4>
            <div class="icon-item">
              <img src="@/assets/image/book.png" alt="" />
            </div>
            <span>Tư vấn chuyên sâu</span>

            <b-collapse id="collapse-4">
              <b-list-group>
                <b-list-group-item href="#some-link"
                  >Vay mua nhà</b-list-group-item
                >
                <b-list-group-item href="#">Vay mua ô tô</b-list-group-item>
                <b-list-group-item href="#"
                  >Vay thế chấp mục đích khác</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Vay tín chấp</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Thẻ tín dụng</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Gửi tiết kiệm</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Tài khoản số đẹp</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Bảo hiểm nhân thọ</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >Bảo hiểm ô tô</b-list-group-item
                >
                <b-list-group-item href="#foobar">Ô tô</b-list-group-item>
              </b-list-group>
            </b-collapse>
          </li>

          <li class="list-group-item" v-b-toggle.collapse-5>
            <div class="icon-item">
              <img src="@/assets/image/Bangtinhlaivay.png" alt="" />
            </div>
            <span>Công cụ tra cứu</span>
            <b-collapse id="collapse-5">
              <b-list-group>
                <b-list-group-item href="#some-link"
                  >Bảng tính lãi tay</b-list-group-item
                >
                <b-list-group-item href="#"
                  >Tra cứu xe vi phạm</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </li>

          <li class="list-group-item" v-b-toggle.collapse-6>
            <div class="icon-item">
              <img src="@/assets/image/person.png" alt="" />
            </div>
            <span>Vấn đề chúng tôi</span>
            <b-collapse id="collapse-6">
              <b-list-group>
                <b-list-group-item href="#some-link"
                  >Thông tin về bankconnect</b-list-group-item
                >
                <b-list-group-item href="#"
                  >Điều khoản,điều kiện và bảo mật</b-list-group-item
                >
              </b-list-group>
            </b-collapse>
          </li>
        </ul>
      </div>
    </Sidebar>
  </div>
</template>
<script>
import Burger from "./sideBar/Burger.vue"
import Sidebar from "./sideBar/Sidebar.vue"


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//import 2 file bootstrap nay la nguyen nhan dan

export default {
  name: "ButtonMenu",
  components: {
    Burger,
    Sidebar,
    
  },
  data() {
    return {
      url: "#",
    };
  },
  methods: {
    show() {
      //alert("hoa");
      window.location.href = this.url;
    },
  },
};
</script>
<style sass="scss" scope >
.list-menu > ul > li:focus {
  outline: 0;
}
.list-group-item {
  border: none;
  margin-left: 20px;
}
.list-menu > ul > li > span {
  margin-left: 17px;
}
.icon-item {
  position: absolute;
  left: 0;
  margin-bottom: 5px;
}
.list-menu > ul > li img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}

.logo {
  /* align-items: center; */
  text-align: center;
}
button.btn.login-customers.col-6 {
  background-color: green;
}

button.btn.register-customers.col-6 {
  background-color: gray;
}

/* html {
  height: 100%;
  overflow: hidden;
} */
.logo > img {
  width: 100px;
}
/* li {
  border-bottom: 1px solid;
} */

#Button-menu {
  position: relative;
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  /* width: 720px; */
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
} 
.sidebar-panel .row.sig-up > button {
    color: white;
    font-size: 20px;
}

.row.sig-up {
    margin-bottom: 22px;
    margin-left: 2px;
    margin-right: 2px;
}
.list-menu > ul >li >span{
  margin-left: 40px;
  font-size: 20px;
}
.list-menu ul >li >div >img{
  margin-left: 10px;
}
button.btn.login-customers.col-6{
    background-color:#d20000;
}

nav.main-nav {
  border: 1px solid black;
  height: 30px;
  padding:30px ;
}
.list-menu > ul >li {
    border-bottom: 1px solid #d2c8c8;
} 

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  /* position:absolute;
  left: 0; */
  color: black;
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding-bottom: 0.5em;
}
</style>
