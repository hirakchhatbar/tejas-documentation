import { create } from 'zustand'

const availableConfigOptions = ['tejas.config.json', 'env', 'arguments']
const availableRegisterTargetOptions = ['auto-register', 'manual-register']

const docStore = create((set, get) => ({
  selectedMenu: '/docs/installation',
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
