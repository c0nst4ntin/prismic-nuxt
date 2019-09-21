export default function (doc) {
    if (doc.type === 'page') {
        if (doc.uid === 'homepage') {
            return '/'
        }
      return `/${doc.uid}` 
    }

    return '/not-found'
  }