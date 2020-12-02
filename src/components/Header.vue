<template>
    <div class="header">
      <div class="header_left">
        <div class="menu">
          <h2>menu</h2>
        </div>
        <div class="nameTitle">
          <p>
            <a cl href="#">
              <img
                class="img_nameTitle"
                src="../assets/image/BankConnect1.png"
                alt="title"
              />
            </a>
          </p>
        </div>
      </div>
      <div class="header_right">
        <div class="phone">
          <p>
            <a href="#"
              ><img
                class="img_phone"
                src="../assets/image/phone.png"
                alt="phone"
            /></a>
          </p>
        </div>
        <div class="mail">
          <p>
            <a href="#"
              ><img class="img_mail" src="../assets/image/email.png" alt="mail"
            /></a>
          </p>
        </div>
        <div class="help">
          <div class="btn-help">
            <p>Gửi tư vấn nhanh</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.header {
 
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  display: flex;
  padding-top: 20px;
  padding-bottom: 10px;
}
img.img_nameTitle {
  height: 31px;
  float: left;
}
.header_left {
  flex: 1;
  display: flex;
}
.header_left > .menu {
  flex: 1;
}
.header_left > .nameTitle {
  flex: 3;
}

.header_right {
  flex: 1;
  display: flex;
}
.header_right > .phone {
  flex: 2;
}
.help .btn-help {
  font-size: 18px;

  margin-right: 5px;
}
.help .btn-help p {
  background: #c80000;
  padding: 5px;
  color: white;
}

.header_right > .mail {
  flex: 1;
}
.header_right > .help {
  flex: 2.5;
}
.phone > p {
  background-color: #c80000;
  height: 35px;
  width: 35px;
  border-radius: 40px;
  float: right;
  margin-right: 10px;
}

.mail > p {
  background-color: #c80000;
  height: 35px;
  width: 35px;
  border-radius: 40px;
}
.img_mail {
  height: 20px;
  width: 20px;
  padding-bottom: 2px;
  padding-top: 5px;
}
.img_phone {
  height: 20px;
  width: 20px;
  margin-top: 5px;
}
</style>