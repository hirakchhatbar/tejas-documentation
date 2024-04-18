import { themes } from 'prism-react-renderer'

const tejasTheme = {
  ...themes.dracula,
  plain: {
    ...themes.dracula.plain,
    backgroundColor: 'var(--background)'
  }
}

const tejasThemeBgCard = {
  ...tejasTheme,
  plain: {
    ...tejasTheme.plain,
    backgroundColor: 'var(--card)'
  }
}

export { tejasTheme, tejasThemeBgCard }
