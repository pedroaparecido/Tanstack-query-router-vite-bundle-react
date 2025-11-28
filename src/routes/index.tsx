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
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
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
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col'>
        {query.isPending ? "loading" : JSON.stringify(query.data.slice(0, 10))}
        <button onClick={() => query.refetch()} className='p-[10px] bg-blue-300 hover:cursor-pointer'>Refetch</button>
      </div>
      <div className='flex justify-center items-center p-[20px] m-0 w-[400px] h-[200px] bg-green-300 mt-[40px]'>
        Não tenho um portfólio
      </div>
      <div className='flex justify-center items-center p-[20px] m-0 w-[400px] h-[200px] bg-yellow-200 mt-[40px]'>
        Isso é só um exemplo que eu consigo usar as libs e ferramentas requiridas!
      </div>
    </div>
  )
}
