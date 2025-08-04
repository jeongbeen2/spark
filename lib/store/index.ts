import { create } from "zustand"
import { User } from "@prisma/client"

const useStore = create((set) => ({
  user: {
    id: "",
    name: "",
    email: "",
  },
  setUser: (user: User) => set({ user }),
}))

export default useStore
