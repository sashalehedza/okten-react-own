import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import postValidator from '../validators/post.validator'
import { IPost } from '../models/IPost'
import { postData } from '../services/api.service'

const FormComponent = () => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<IPost>({
    mode: 'all',
    resolver: joiResolver(postValidator),
  })

  const formSubmitCustomHandler = async (data: IPost) => {
    try {
      const response = await postData(data)
      console.log(response)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div>
      {errors.title && <div>Title errors: {errors.title?.message}</div>}
      {errors.body && <div>Body errors: {errors.body?.message}</div>}
      {errors.userId && <div>User ID errors: {errors.userId?.message}</div>}

      <form onSubmit={handleSubmit(formSubmitCustomHandler)}>
        <input type='text' {...register('title')} placeholder='Title' />
        <input type='text' {...register('body')} placeholder='Body' />
        <input type='number' {...register('userId')} placeholder='User ID' />
        <button type='submit' disabled={!isValid}>
          Send
        </button>
      </form>
    </div>
  )
}

export default FormComponent
