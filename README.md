# with-toolbar
> inject toolbar for rich-markdown-editor

[![npm](https://img.shields.io/npm/v/with-toolbar)](https://github.com/JiangWeixian/with-toolbar) [![GitHub](https://img.shields.io/npm/l/with-toolbar)](https://github.com/JiangWeixian/with-toolbar)

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