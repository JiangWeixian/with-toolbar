import RichMarkdownEditor, { Props } from 'rich-markdown-editor'
import React from 'react'
import { ToolbarMenu } from './ToolbarMenu'

export const withToolbar = (WrappedComponent: typeof RichMarkdownEditor) => {
  return class WithStickBarEditor extends WrappedComponent {
    static displayName = 'WithToolbar(RichMarkdownEditor)'

    constructor(props: Props) {
      super(props)
    }

    render() {
      return (
        <>
          {this.view && (
            <ToolbarMenu
              view={this.view}
              commands={this.commands}
              dictionary={this.dictionary(this.props.dictionary)}
              rtl={this.state.isRTL}
              onClose={this.handleCloseBlockMenu}
              uploadImage={this.props.uploadImage}
              onImageUploadStart={this.props.onImageUploadStart}
              onImageUploadStop={this.props.onImageUploadStop}
              onShowToast={this.props.onShowToast}
            />
          )}
          {super.render()}
        </>
      )
    }
  }
}
