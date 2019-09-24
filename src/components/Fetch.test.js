import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import Fetch from 'components/Fetch'

// jest.mock('axios');


test('loads and displays greeting', async () => {
  const url = '/greeting'
  const { getByText, getByTestId } = render(<Fetch url={url} />)

  axios.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByText('Load Greeting'))

  const greetingTextNode = await waitForElement(() =>
    getByTestId('greeting-text')
  )

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith(url)
  expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
  expect(getByTestId('ok-button')).toHaveAttribute('disabled')
})