import Link from 'next/link'

//import { useRouter } from 'next/router'

export async function getServerSideProps(context:any) {
  
  const { params } = context

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`,
  )

  const todo = await data.json()

  return {
    props: { todo },
  }

}

export async function getStaticPatchs() {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  
  const data = await response.json()

  const paths = data.map((todo:any) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }:any){

  //const router = useRouter()
  //const todoId = router.query.todoId

  return (
    <>
      <Link href="/todos">
        <p>Voltar</p> 
      </Link>
      <h1>Exibindo o {todo.id}</h1>
      <p>Texto: {todo.title}</p>
      <p>Comentário: bla bla bla 
        <Link legacyBehavior href={`/todos/${todo.id}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>Comentário: ola ola ola
        <Link legacyBehavior href={`/todos/${todo.id}/comments/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>Comentário: teste teste teste
        <Link legacyBehavior href={`/todos/${todo.id}/comments/3`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  )
}