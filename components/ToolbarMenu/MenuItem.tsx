/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import Tooltip from 'rich-markdown-editor/dist/components/Tooltip'
import theme from 'rich-markdown-editor/dist/theme'

type Props = {
  disabled?: boolean
  onClick: () => void
  theme: typeof theme
  tooltip: string
  icon: typeof React.Component | React.FC<any>
}

function MenuItem({ disabled, onClick, icon, tooltip }: Props) {
  const Icon = icon

  return (
    <Item onClick={disabled ? undefined : onClick}>
      <Tooltip tooltip={tooltip}>
        <Icon />
      </Tooltip>
    </Item>
  )
}

const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  width: 100%;
  height: 36px;
  cursor: pointer;
  border: none;
  opacity: ${(props) => (props.disabled ? '.5' : '1')};
  color: ${(props) => props.theme.blockToolbarText};
  background: none;
  padding: 0 16px;
  outline: none;

  &:hover,
  &:active {
    color: ${(props) => props.theme.blockToolbarTextSelected};
    background: ${(props) => props.theme.blockToolbarHoverBackground};
  }
`

export default withTheme(MenuItem)
