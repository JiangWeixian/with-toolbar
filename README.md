# with-toolbar
> inject toolbar for rich-markdown-editor

[![npm](https://img.shields.io/npm/v/@aiou/with-toolbar)](https://github.com/JiangWeixian/templates/tree/master/packages/react-components-lib-template) [![GitHub](https://img.shields.io/npm/l/@aiou/react-components-lib-template)](https://github.com/JiangWeixian/templates/tree/master/packages/react-components-lib-template)

<div align='center'>

![image-caption](./snapshots/toolbar.png)  
*▲ with-toolbar*

</div>

## install

```console
yarn add with-toolbar rich-markdown-editor
```

## usage

```tsx
import RichMarkdownEditor from 'rich-markdown-editor'
import { withToolbar } from 'with-toolbar'

const Editor = withToolbar(RichMarkdownEditor)


function App() {
  return (
    <Editor />
  )
}

```