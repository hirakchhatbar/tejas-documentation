import { create } from 'zustand'
import sidebarMenu from '@/data/web-content/documentation/sidebar-menu.js'

const availableConfigOptions = ['tejas.config.json', 'env', 'arguments']
const availableRegisterTargetOptions = ['auto-register', 'manual-register']

const installationMenu = sidebarMenu.find((item) => item.path === '/docs/installation') ?? sidebarMenu[0]

const docStore = create((set) => ({
  selectedMenu: installationMenu,
  setSelectedMenu: (selected) => set({ selectedMenu: selected }),

  selectedConfigOption: 'tejas.config.json',
  setSelectedConfigOption: (selectedConfigOption) => {
    if (availableConfigOptions.includes(selectedConfigOption)) {
      set({ selectedConfigOption })
    }
  },

  selectedRegisterTargetOption: 'auto-register',
  setSelectedRegisterTargetOption: (selectedRegisterTargetOption) => {
    if (availableRegisterTargetOptions.includes(selectedRegisterTargetOption)) {
      set({ selectedRegisterTargetOption })
    }
  }
}))

export default docStore
