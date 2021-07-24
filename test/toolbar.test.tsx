import React from 'react'
import renderer from 'react-test-renderer'
import RichMarkdownEditor from 'rich-markdown-editor'
import { withToolbar } from '../components/ToolbarMenu/index'

const WithToolbarEditor = withToolbar(RichMarkdownEditor)

describe('hello', () => {
  test('example jest with ts', () => {
    const component = renderer.create(<WithToolbarEditor />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
