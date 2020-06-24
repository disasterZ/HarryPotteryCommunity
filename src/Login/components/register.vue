<template>
  <div class="login">
    <div class="allput">
      <input type="text" class="put" v-model="name" placeholder="你的名字？" />
      <input
        type="password"
        class="put"
        v-model="password"
        placeholder="密码？"
      />
      <input
        type="password"
        class="put"
        v-model="repassword"
        placeholder="重复密码"
      />
    </div>
    <div class="sex">
      <label>性别：</label>
      <label
        ><input
          v-model="radioval"
          type="radio"
          value="男"
          name="sex"
          checked
        />男</label
      >
      <label
        ><input
          v-model="radioval"
          type="radio"
          value="女"
          name="sex"
        />女</label
      >
    </div>
    <p class="me">{{ mes }}</p>
    <br />
    <router-link to="/login" class="jump">
      点击登录
    </router-link>
    <br />
    <button @click="Onsubmit()" >开学报道</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      name: "",
      password: "",
      repassword: "",
      radioval: "",
      mes: "",
      count:""
    };
  },
  methods: {
    Onsubmit() {
      if (
        this.name == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.radioval == ""
      ) {
        this.mes = "注册项不能为空";
      } else if (this.password != this.repassword) {
        this.mes = "两次密码不同";
      } else {
        let params = {
          name: this.name,
          password: this.password,
          sex: this.radioval
        }
        axios.post("http://localhost:3000/api/user/addUser",params).then((res) => {
            if (res) {
              this.mes = "注册成功，3秒后跳转至登录";
              const TIME_COUNT = 3;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    //跳转的页面写在此处
                    this.$router.push({
                      path: "/login"
                    });
                  }
                }, 1000);
              }
            } else {
              this.mes = "注册失败，请重新注册";
            }
          })
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
    text-align center
    .allput
        margin-top 0.6rem
        .put
            width 70%
            height 0.8rem
            margin 0.4rem 0.5rem
            border-radius 0.2rem
            padding-left 0.3rem
            font-size 16px
    .jump
        margin-left 1.8rem
    button
        width 40%
        height 1rem
        border-radius 0.3rem
        background #341206
        color #e2b9a7
        font-size 20px
        text-align center
        margin-top 0.2rem
        margin-bottom 0.2rem
    .sex
        margin-left -3rem
        font-size 16px
    .me
        text-align left
        width 70%
        margin 0.2rem auto
        color red
        font-size 16px
</style>
