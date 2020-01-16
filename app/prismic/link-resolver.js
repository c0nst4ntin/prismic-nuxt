export default function (doc) {
    if (doc.type === 'page') {
        if (doc.uid !== 'home') {
            return `/${doc.uid}`
        }
        return '/'
    }
    return '/'
}