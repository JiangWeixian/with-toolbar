import React from 'react'
import RichMarkdownEditor from 'rich-markdown-editor'
import { dark } from 'rich-markdown-editor/dist/theme'
import styled, { createGlobalStyle } from 'styled-components'
import { withToolbar } from '../../components'

const Editor = withToolbar(RichMarkdownEditor)

const Global = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 100%;
    background-color: ${dark.background};
  }

  #root {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  padding: 0px 36px;
  width: 60%;
  margin: auto auto;
  border-radius: 6px;
  min-height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${dark.background};
`

function App() {
  return (
    <Container className="App">
      <Global />
      <Editor theme={dark} />
    </Container>
  )
}

export default App
