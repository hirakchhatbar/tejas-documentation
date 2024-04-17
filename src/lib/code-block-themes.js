import { themes } from 'prism-react-renderer'

const tejasTheme = {
  ...themes.dracula,
  plain: {
    ...themes.dracula.plain,
    backgroundColor: 'var(--background)'
  }
}

export { tejasTheme }
