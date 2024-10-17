import Menu from '../data/menu.json'

import {defineStore} from 'pinia'
export const useMenuStore=defineStore({
    id: 'menu-store',
    state: () =>{
        return{
            data: Menu.data
        }
    },


})