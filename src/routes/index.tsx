import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: App,
})


/**
 * 
 * const { data } = useQuery({
 *  queryKey> ['todos'],
 *  queryFn: getTodos
 * })
 * 
*/

function App() {

  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    return await response.json()
  }
  
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    enabled: true
  })
//o uso do isPending ou isLoading é "tudo a mesma coisa"
//mas o uso do refetch, pede auxilio da memoria cache, muito perpiscaz
  return (
    <div className='flex flex-col'>
      {query.isPending ? "loading" : JSON.stringify(query.data.slice(0, 10))}
      <button onClick={() => query.refetch()} className='p-[10px] bg-blue-300 hover:cursor-pointer'>Refetch</button>
    </div>
  )
}
