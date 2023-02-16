import Link from "next/link";

import { useRouter } from "next/router";

export default function Comment() {

  const router = useRouter()

  const todoId = router.query.commentsId
  const commentId = router.query.commentsId

  return (
    <>
      <Link href={`/todos/${todoId}`}>
        <p>Voltar</p>
      </Link>
      <h1>Exibindo o comentário número: {commentId}</h1>
      <p>Do Todo: {todoId}</p>
    </>
  )

}