import details from "../details/appDetails"

const ls = {
    get: (item: string) => localStorage.getItem(details.name + item),
    set: (item: string, data: string) => localStorage.setItem(details.name + item, data)
}

export default ls