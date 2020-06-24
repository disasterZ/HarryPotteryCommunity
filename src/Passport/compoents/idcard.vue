<template>
  <div class="pass">
    <div class="idcard">
      <div class="id" :style="cha">{{ id }}</div>
      <img :src="card" class="card" />
    </div>
    <button @click="exit()">登&nbsp;&nbsp;&nbsp;&nbsp;出</button>
  </div>
</template>

<script>
import g_card from "@/assets/Gryffindor/card.jpg";
import s_card from "@/assets/Slytherin/card.jpg";
import h_card from "@/assets/Hufflepuff/card.jpg";
import r_card from "@/assets/Ravenclaw/card.jpg";
export default {
  name: "idcard",
  data() {
    return {
      card: "",
      id: this.$store.getters.id,
      cha:{}
    };
  },
  methods: {
    exit() {
      this.$store.state.id = "";
      this.$store.dispatch("setHouse", "");
      this.$store.dispatch("setg", "");
      this.$store.dispatch("seth", "");
      this.$store.dispatch("setr", "");
      this.$store.dispatch("sets", "");
      this.$router.push("/");
    }
  },
  created() {
    const house = this.$store.getters.house;
    if (house == "Gryffindor") {
      this.card = g_card
      this.cha = {
        color: "#c19451"
      }
    } else if (house == "Slytherin") {
      this.card = s_card
      this.cha={
                color:"#b2b2b2"
            }
    } else if (house == "Hufflepuff") {
      this.card = h_card
      this.cha={
                color:"#1f1e1a"
            }
    } else if (house == "Ravenclaw") {
      this.card = r_card
      this.cha={
                color:"#a37456"
            }
    }
  }
};
</script>

<style lang="stylus" scoped>
.pass
    width 100%
    text-align center
.idcard
    width 6rem
    height 3.5rem
    background #000
    text-align center
    margin 0.2rem auto
    border-radius 0.4rem
    overflow hidden
    .card
        width 100%
    .id
        position absolute
        top:22%
        left :26%
        font-size 140%
        font-family ch
        font-weight bold
button
        width 40%
        height 1rem
        border-radius 0.3rem
        background #341206
        color #e2b9a7
        font-size 20px
        text-align center
        margin 0.2rem
</style>
