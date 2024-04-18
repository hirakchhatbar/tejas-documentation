import { create } from 'zustand'

const availableConfigOptions = ['tejas.config.json', 'env', 'arguments']

const helloWorldStore = create((set) => ({

  selectedConfigOption: 'tejas.config.json',
  setSelectedConfigOption: (selectedConfigOption) => {
    if (availableConfigOptions.includes(selectedConfigOption)) {
      set({ selectedConfigOption })
    }
  }

}))

export default helloWorldStore
