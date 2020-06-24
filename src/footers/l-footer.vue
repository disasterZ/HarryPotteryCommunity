<template>
  <div class="footer">
    <div class="icon" :style="cha">
      <router-link class="ficon" to="/news">
        <img :src="community" />
        <h5 class="title" :style="font">社区</h5>
      </router-link>
      <router-link class="ficon book" to="/library">
        <img :src="book" />
        <h5 class="title" :style="font">图书馆</h5>
      </router-link>
      <router-link class="ficon" to="/passport">
        <img :src="passport" class="passport" />
        <h5 class="title" :style="font">巫师护照</h5>
      </router-link>
      <router-link class="ficon" to="/game">
        <img :src="game" />
        <h5 class="title" :style="font">竞赛</h5>
      </router-link>
      <router-link class="ficon" to="/message">
        <img :src="message" />
        <h5 class="title" :style="font">消息</h5>
      </router-link>
    </div>
  </div>
</template>
<script>
import community from "@/assets/Hogwarts/community-1.png";
import book from "@/assets/Hogwarts/book-2.png";
import passport from "@/assets/Hogwarts/passport-1.png";
import game from "@/assets/Hogwarts/game-1.png";
import message from "@/assets/Hogwarts/message-1.png";
import g_community from "@/assets/Gryffindor/community-1.png";
import g_book from "@/assets/Gryffindor/book-2.png";
import g_passport from "@/assets/Gryffindor/passport-1.png";
import g_game from "@/assets/Gryffindor/game-1.png";
import g_message from "@/assets/Gryffindor/message-1.png";
import s_community from "@/assets/Slytherin/community-1.png";
import s_book from "@/assets/Slytherin/book-2.png";
import s_passport from "@/assets/Slytherin/passport-1.png";
import s_game from "@/assets/Slytherin/game-1.png";
import s_message from "@/assets/Slytherin/message-1.png";
import r_community from "@/assets/Ravenclaw/community-1.png";
import r_book from "@/assets/Ravenclaw/book-2.png";
import r_passport from "@/assets/Ravenclaw/passport-1.png";
import r_game from "@/assets/Ravenclaw/game-1.png";
import r_message from "@/assets/Ravenclaw/message-1.png";
import h_community from "@/assets/Hufflepuff/community-1.png";
import h_book from "@/assets/Hufflepuff/book-2.png";
import h_passport from "@/assets/Hufflepuff/passport-1.png";
import h_game from "@/assets/Hufflepuff/game-1.png";
import h_message from "@/assets/Hufflepuff/message-1.png";
export default {
  name: "lFooter",
  data() {
    return {
      community: "",
      book: "",
      passport: "",
      game: "",
      message: "",
      cha:{},
      font:{}
    };
  },
  created(){
    const house=this.$store.getters.house
        if(house=="Gryffindor"){
            this.community=g_community
            this.book=g_book
            this.passport=g_passport
            this.game=g_game
            this.message=g_message
            this.cha={
                background:"#d02126"
            }
            this.font={
                color:"#c19451"
            }
        }else if(house=="Hufflepuff"){
            this.community=h_community
            this.book=h_book
            this.passport=h_passport
            this.game=h_game
            this.message=h_message
            this.cha={
                background:"#f5d40d"
            }
            this.font={
                color:"#1f1e1a"
            }
        }else if(house=="Ravenclaw"){
            this.community=r_community
            this.book=r_book
            this.passport=r_passport
            this.game=r_game
            this.message=r_message
            this.cha={
                background:"#0199c2"
            }
            this.font={
                color:"#a37456"
            }
        }else if(house=="Slytherin"){
            this.community=s_community
            this.book=s_book
            this.passport=s_passport
            this.game=s_game
            this.message=s_message
            this.cha={
                background:"#249e47"
            }
            this.font={
                color:"#b2b2b2"
            }
        }else{
            this.community=community
            this.book=book
            this.passport=passport
            this.game=game
            this.message=message
            this.cha={
                background:"#e2b9a7"
            }
            this.font={
                color:"#341206"
            }
        }
  }
};
</script>
<style lang="stylus" scoped>
.footer
    width 100%
    text-align center
    box-shadow 1px -1px #000
.icon
    display flex
    line-height: 1rem
    width 100%
    background #eee
    position fixed
    bottom 0
    text-align center
    margin 0 auto
    .ficon
        width 15%
        margin 0 .2rem
        padding-bottom 0.1rem
        line-height 0.3rem
        img
            width 1.2rem
</style>
