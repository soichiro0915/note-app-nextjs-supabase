import create from 'zustand'
import { EditedNote, EditedComment } from './types/types'

type State = {
  editedNote: EditedNote
  updateEditedNote: (payload: EditedNote) => void
  resetEditedNote: () => void

  editedComment: EditedComment
  updateEditedComment: (payload: EditedComment) => void
  resetEditedComment: () => void
}

const useStore = create<State>((set, _) => ({
  editedNote: { id: '', title: '', content: '' },
  editedComment: { id: '', content: '' },
  updateEditedNote: (payload) =>
    set({
      editedNote: {
        id: payload.id,
        title: payload.title,
        content: payload.content,
      },
    }),
  resetEditedNote: () =>
    set({ editedNote: { id: '', title: '', content: '' } }),

  updateEditedComment: (payload) =>
    set({
      editedComment: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedComment: () => set({ editedComment: { id: '', content: '' } }),
}))
export default useStore
