import { useEffect } from "react"

const useTitle = (title) => {
      useEffect(() => {
            document.title = `${title} | Winter Shield`;
      }, [title])
}

export default useTitle