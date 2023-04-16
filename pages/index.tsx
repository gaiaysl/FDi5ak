
import Login from './login'

export default function Home() {
  return (
    <div >
    hello
    </div>
  )
}


export async function getServerSideProps(context:any) {

if (!context.req.cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}