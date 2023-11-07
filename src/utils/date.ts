

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const day = date.getDate() < 13 ? `0${date.getDate() + 1}` : date.getDate()
    return `${year}.${month}.${day}`
}