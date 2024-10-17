import Config from '../data/config.json'
import { defineStore } from "pinia";
export const useLayoutStore = defineStore({
    id: 'layout-store',
    state:()=>{
        return{
            layout: Config,
            layoutType: "ltr",
        }
    },
    actions: {
        set () {
            if (process.client) {
              this.layout.config.color =
                localStorage.getItem("color") || this.layout.config.color;
              document.body.classList.toggle(this.layout.config.layout_version);
              if (this.layout.config.color) {
                document.documentElement.style.setProperty(
                  "--theme-deafult",
                  this.layout.config.color
                );
              }
            }
          },
          setLayoutType(payload){
            if (payload === "rtl") {
             this.layoutType= "rtl",
              document.body.classList.remove("ltr");
              document.documentElement.setAttribute('dir', 'rtl');
              document.body.classList.add("rtl");
            
            } else {
              this.layoutType= "ltr",
              document.body.classList.remove("rtl");
              document.documentElement.setAttribute('dir', 'ltr');

            
            }
          },
          setColorScheme(payload) {
            this.layout.config.color = payload;
            if (process.client) {
              localStorage.setItem("color", this.layout.config.color);
            }
          },
          setLayoutVersion(payload)  {
            if (this.layout.config.layout_version == "dark") {
              document.body.classList.remove("dark");
              document.body.classList.add("light");
              this.layout.config.layout_version = "light";
            } else {
              document.body.classList.remove("light");
              document.body.classList.add("dark");
              this.layout.config.layout_version = "dark";
            }
          },
    }
})