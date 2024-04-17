import { create } from 'zustand'

const docStore = create((set, get) => ({

  selectedMenu: '/docs/installation',
  setSelectedMenu: (selected) => set({ selectedMenu: selected}),
}))

export default docStore
