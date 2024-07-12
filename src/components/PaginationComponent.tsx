import { useSearchParams } from 'react-router-dom'

const PaginationComponent = () => {
  let [searchParams, setSearchParams] = useSearchParams({ page: '1' })

  return (
    <div>
      <button
        onClick={() => {
          let page = +(searchParams.get('page') || '1')
          let prevPage = (page - 1).toString()
          setSearchParams({ page: prevPage })
        }}
      >
        prev
      </button>

      <button
        onClick={() => {
          let page = +(searchParams.get('page') || '1')
          let nextPage = (page + 1).toString()
          setSearchParams({ page: nextPage })
        }}
      >
        next
      </button>
    </div>
  )
}

export default PaginationComponent
