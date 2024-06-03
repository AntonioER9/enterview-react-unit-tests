import { Exercise05 } from '../exercise-05'
import { render, screen } from '@testing-library/react'

describe('Exercise05', () => {
  it('should render "Hello world"', () => {
    render(<Exercise05 />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('should call onRender when rendered', () => {
    const onRender = jest.fn('')
    
    render(<Exercise05 onRender={onRender} />)
    expect(onRender).toHaveBeenCalledWith('hello')
  })
})
