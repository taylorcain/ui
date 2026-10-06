declare module 'react-syntax-highlighter' {
  import * as React from 'react'

  export interface SyntaxHighlighterProps {
    language?: string
    style?: any
    children?: React.ReactNode
    customStyle?: React.CSSProperties
    showLineNumbers?: boolean
    wrapLines?: boolean
    wrapLongLines?: boolean
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
  export class Light extends React.Component<SyntaxHighlighterProps> {}
  export class Dark extends React.Component<SyntaxHighlighterProps> {}
}