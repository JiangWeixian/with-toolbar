import {
  BlockQuoteIcon,
  BulletedListIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HorizontalRuleIcon,
  OrderedListIcon,
  PageBreakIcon,
  TableIcon,
  TodoListIcon,
  ImageIcon,
  StarredIcon,
  WarningIcon,
  InfoIcon,
  LinkIcon,
} from 'outline-icons'
import { MenuItem } from 'rich-markdown-editor/dist/types'
import baseDictionary from 'rich-markdown-editor/dist/dictionary'

// TODO: item enable / disable status
export default function toolbarMenuItems(dictionary: typeof baseDictionary): MenuItem[] {
  return [
    {
      name: 'heading',
      title: dictionary.h1,
      tooltip: dictionary.h1,
      icon: Heading1Icon,
      attrs: { level: 1 },
    },
    {
      name: 'heading',
      title: dictionary.h2,
      tooltip: dictionary.h2,
      icon: Heading2Icon,
      attrs: { level: 2 },
    },
    {
      name: 'heading',
      title: dictionary.h3,
      tooltip: dictionary.h3,
      icon: Heading3Icon,
      attrs: { level: 3 },
    },
    {
      name: 'checkbox_list',
      title: dictionary.checkboxList,
      tooltip: dictionary.checkboxList,
      icon: TodoListIcon,
      shortcut: '^ ⇧ 7',
    },
    {
      name: 'bullet_list',
      title: dictionary.bulletList,
      tooltip: dictionary.bulletList,
      icon: BulletedListIcon,
    },
    {
      name: 'ordered_list',
      title: dictionary.orderedList,
      tooltip: dictionary.orderedList,
      icon: OrderedListIcon,
    },
    {
      name: 'table',
      title: dictionary.table,
      tooltip: dictionary.table,
      icon: TableIcon,
      attrs: { rowsCount: 3, colsCount: 3 },
    },
    {
      name: 'blockquote',
      title: dictionary.quote,
      tooltip: dictionary.quote,
      icon: BlockQuoteIcon,
    },
    {
      name: 'code_block',
      title: dictionary.codeBlock,
      tooltip: dictionary.codeBlock,
      icon: CodeIcon,
    },
    {
      name: 'hr',
      title: dictionary.hr,
      tooltip: dictionary.hr,
      icon: HorizontalRuleIcon,
    },
    {
      name: 'hr',
      title: dictionary.pageBreak,
      tooltip: dictionary.pageBreak,
      icon: PageBreakIcon,
      attrs: { markup: '***' },
    },
    {
      name: 'image',
      title: dictionary.image,
      tooltip: dictionary.image,
      icon: ImageIcon,
    },
    {
      name: 'link',
      title: dictionary.link,
      tooltip: dictionary.link,
      icon: LinkIcon,
    },
    {
      name: 'container_notice',
      title: dictionary.infoNotice,
      tooltip: dictionary.infoNotice,
      icon: InfoIcon,
      attrs: { style: 'info' },
    },
    {
      name: 'container_notice',
      title: dictionary.warningNotice,
      tooltip: dictionary.warningNotice,
      icon: WarningIcon,
      attrs: { style: 'warning' },
    },
    {
      name: 'container_notice',
      title: dictionary.tipNotice,
      tooltip: dictionary.tipNotice,
      icon: StarredIcon,
      attrs: { style: 'tip' },
    },
  ]
}
