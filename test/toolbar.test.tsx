/**
 * @jest-environment jsdom
 */

import React from 'react'
import renderer from 'react-test-renderer'
import RichMarkdownEditor from 'rich-markdown-editor'
import { withToolbar } from '../components/ToolbarMenu/index'

const WithToolbarEditor = withToolbar(RichMarkdownEditor)

describe('snapshot', () => {
  test('default', () => {
    const component = renderer.create(<WithToolbarEditor />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
