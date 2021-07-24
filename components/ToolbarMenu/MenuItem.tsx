import * as React from "react";
import styled, { withTheme } from "styled-components";
import theme from "rich-markdown-editor/dist/theme";

type Props = {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  theme: typeof theme;
  icon: typeof React.Component | React.FC<any>;
};

function MenuItem({ selected, disabled, onClick, icon }: Props) {
  const Icon = icon;

  return (
    <Item
      selected={selected}
      onClick={disabled ? undefined : onClick}
    >
      <Icon
        color={
          selected ? theme.blockToolbarIconSelected : theme.blockToolbarIcon
        }
      />
    </Item>
  );
}

const Item = styled.button<{
  selected: boolean;
}>`
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
  opacity: ${props => (props.disabled ? ".5" : "1")};
  color: ${props =>
    props.selected
      ? props.theme.blockToolbarTextSelected
      : props.theme.blockToolbarText};
  background: ${props =>
    props.selected ? props.theme.blockToolbarTrigger : "none"};
  padding: 0 16px;
  outline: none;

  &:hover,
  &:active {
    color: ${props => props.theme.blockToolbarTextSelected};
    background: ${props =>
      props.selected
        ? props.theme.blockToolbarTrigger
        : props.theme.blockToolbarHoverBackground};
  }
`;

export default withTheme(MenuItem);