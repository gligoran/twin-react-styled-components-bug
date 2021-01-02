import React from 'react'
import tw, { styled } from 'twin.macro'

import CSSReset from './CSSReset'

const Input = styled.input`
  ${tw`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`}
`
import ExternalInput from './Input'

const App = () => (
  <>
    <CSSReset />

    <div tw="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center block p-6 bg-gray-200">
      <div>
        <label for="email" tw="block text-sm font-medium text-gray-700">
          Works:
        </label>

        <Input type="text" />

        <p tw="mt-2 text-sm text-gray-500" id="email-description">
          This component is declared in the same file as the rest of App
          component
        </p>
      </div>

      <div tw="mt-6">
        <label for="email" tw="block text-sm font-medium text-gray-700">
          Doesn't work:
        </label>

        <ExternalInput type="text" />

        <p tw="mt-2 text-sm text-gray-500" id="email-description">
          This component lives in its own file and is imported.
        </p>
      </div>
    </div>
  </>
)

export default App
