import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 text-dark mt-20'>
        <span className='heading2 !font-semibold'>404</span>
        <h2 className='heading2 text-center'>Strona nie znaleziona</h2>
        <p className='text-lg font-medium'>Przepraszamy ale strona którą wyszukałeś/aś nie istnieje :/</p>
        <Button size={"lg"} asChild>
            <Link href="/">Powrót do cywilizacji</Link>
        </Button>
    </div>
  )
}

export default NotFound