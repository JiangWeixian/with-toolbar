/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import capitalize from 'lodash.capitalize'
import { EditorView } from 'prosemirror-view'
import { findParentNode } from 'prosemirror-utils'
import styled from 'styled-components'
import { MenuItem } from 'rich-markdown-editor/dist/types'
import ToolbarMenuItem from './MenuItem'
import VisuallyHidden from 'rich-markdown-editor/dist/components/VisuallyHidden'
import getDataTransferFiles from 'rich-markdown-editor/dist/lib/getDataTransferFiles'
import insertFiles from 'rich-markdown-editor/dist/commands/insertFiles'
import baseDictionary from 'rich-markdown-editor/dist/dictionary'
import getMenuItems from './menus'

type Props = {
  rtl: boolean
  commands: Record<string, any>
  dictionary: typeof baseDictionary
  view: EditorView
  uploadImage?: (file: File) => Promise<string>
  onImageUploadStart?: () => void
  onImageUploadStop?: () => void
  onShowToast?: (message: string, id: string) => void
  onClose: () => void
}
export class ToolbarMenu extends React.Component<Props> {
  menuRef = React.createRef<HTMLDivElement>()
  inputRef = React.createRef<HTMLInputElement>()

  insertItem = (item: MenuItem) => {
    switch (item.name) {
      case 'image':
        return this.triggerImagePick()
      case 'link': {
        this.insertBlock(item)
        return
      }
      default:
        this.insertBlock(item)
    }
  }

  close = () => {
    this.props.onClose()
    this.props.view.focus()
  }

  triggerImagePick = () => {
    if (this.inputRef.current) {
      this.inputRef.current.click()
    }
  }

  handleImagePicked = (event: any) => {
    const files = getDataTransferFiles(event)

    const { view, uploadImage, onImageUploadStart, onImageUploadStop, onShowToast } = this.props
    const { state } = view
    const parent = findParentNode((node) => !!node)(state.selection)

    this.clearSearch()

    if (parent) {
      insertFiles(view, event, parent.pos, files, {
        uploadImage,
        onImageUploadStart,
        onImageUploadStop,
        onShowToast,
        dictionary: this.props.dictionary,
      })
    }

    if (this.inputRef.current) {
      this.inputRef.current.value = ''
    }

    this.props.onClose()
  }

  clearSearch() {
    const { state, dispatch } = this.props.view
    const parent = findParentNode((node) => !!node)(state.selection)

    if (parent) {
      dispatch(state.tr.insertText('', parent.pos, state.selection.to))
    }
  }

  insertBlock(item: MenuItem) {
    const command = this.props.commands[item.name!]
    if (command) {
      command(item.attrs)
    } else {
      this.props.commands[`create${capitalize(item.name)}`](item.attrs)
    }

    this.props.onClose()
  }

  get filtered() {
    const { dictionary, uploadImage, commands } = this.props
    const items: MenuItem[] = getMenuItems(dictionary)

    return items.filter((item) => {
      // Some extensions may be disabled, remove corresponding menu items
      if (item.name && !commands[item.name] && !commands[`create${capitalize(item.name)}`]) {
        return false
      }

      // If no image upload callback has been passed, filter the image block out
      if (!uploadImage && item.name === 'image') return false

      // some items (defaultHidden) are not visible until a search query exists
      return !item.defaultHidden
    })
  }

  render() {
    const { dictionary, uploadImage } = this.props
    const items = this.filtered

    return (
      <Wrapper id="block-menu-container" ref={this.menuRef}>
        <List>
          {items.map((item, index) => {
            if (!item.title || !item.icon) {
              return null
            }

            return (
              <ListItem key={index}>
                <ToolbarMenuItem
                  onClick={() => this.insertItem(item)}
                  tooltip={item.tooltip!}
                  icon={item.icon}
                />
              </ListItem>
            )
          })}
          {items.length === 0 && (
            <ListItem>
              <Empty>{dictionary.noResults}</Empty>
            </ListItem>
          )}
        </List>
        {uploadImage && (
          <VisuallyHidden>
            <input
              type="file"
              ref={this.inputRef}
              onChange={this.handleImagePicked}
              accept="image/*"
            />
          </VisuallyHidden>
        )}
      </Wrapper>
    )
  }
}

const List = styled.ol`
  list-style: none;
  text-align: left;
  height: 100%;
  padding: 8px 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`

const ListItem = styled.li`
  padding: 0;
  margin: 0;
`

const Empty = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 500;
  font-size: 14px;
  height: 36px;
  padding: 0 16px;
`

export const Wrapper = styled.div`
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.fontFamily};
  z-index: ${(props) => {
    return props.theme.zIndex + 100
  }};
  background-color: ${(props) => props.theme.blockToolbarBackground};
  border-radius: 4px;
  transform: scale(0.95);
  transition: opacity 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 150ms;
  line-height: 0;
  box-sizing: border-box;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  overflow-y: auto;

  * {
    box-sizing: border-box;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid ${(props) => props.theme.blockToolbarDivider};
  }

  transform: translateY(6px) scale(1);
  pointer-events: all;
  opacity: 1;

  @media print {
    display: none;
  }

  position: relative;
  left: -20px;
`
