export default function (doc) {
    if (doc.type === 'page') {
        if (doc.uid === 'homepage') {
            return '/'
        }
      return `/${doc.uid}` 
    }
  
    if (doc.type === 'post') {
      return `/posts/${doc.uid}` 
    }
  
    return '/not-found'
  }