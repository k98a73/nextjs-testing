/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { getPage, initTestHelpers } from 'next-page-tester'
import userEvent from '@testing-library/user-event'

initTestHelpers()

describe('Navigation by Link', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)

    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
    // screen.debug()
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('comment page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
  })
})
