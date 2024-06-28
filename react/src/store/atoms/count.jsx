

import { atom, selector } from "recoil"

export const countAtom = atom({
    key: "countAtom",
    default: 0
})


export const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2 == 0;
    }
})


export const filterTodoSelector = selector({
    key: "filterTodoSelector",
    get: ({ get }) => {
        const todos = get(todosAtom)
        const filter = get(filterAtom)
        return todos.filter(x => x.title.includes(filter) || x.description.includes("filters"))
    }
}) 