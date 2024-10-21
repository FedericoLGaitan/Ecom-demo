import CategoryDetail from "@/views/CategoryDetail/CategoryDetail"
import ChooseCategory from '@/components/ChooseCategory/ChooseCategories'

export default async function page({ params }: any) {

   const {id} = params

 
  return (
    <>
        <ChooseCategory/>
        <CategoryDetail categoryId={id}/>
    </>
  )
}
