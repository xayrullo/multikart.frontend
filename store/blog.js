import {BlogData} from '../data/blog'

import { defineStore } from "pinia";
export const useBlogStore= defineStore({
    id: 'blog-store',
    state:()=>{
        return{
            blog: BlogData,
            bloglist: BlogData
        }
    },
    getters:{
         getblogTag: (state) => {
    const uniqueTag = []
    const blogTag = []
    state.bloglist.map((blog, index) => {
      if (blog.tags) {
        blog.tags.map((tag) => {
          const index = uniqueTag.indexOf(tag)
          if (index === -1) uniqueTag.push(tag)
        })
      }
    })
    for (let i = 0; i < uniqueTag.length; i++) {
      blogTag.push(uniqueTag[i])
    }
    return blogTag
  }
    },
    actions:{}
})