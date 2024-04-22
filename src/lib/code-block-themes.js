import { themes } from 'prism-react-renderer'

const tejasTheme = {
  ...themes.dracula,
  plain: {
    ...themes.dracula.plain,
    backgroundColor: 'var(--transparent)',
  }
}

const tejasThemeBgCard = {
  ...tejasTheme,
  plain: {
    ...tejasTheme.plain,
    backgroundColor: 'var(--transparent)',
  }
}

const tejasThemeBgTransparent = {
  ...themes.vsLight,
  plain: {
    ...tejasTheme.plain,
    backgroundColor: 'var(--transparent)',
  }
}

export { tejasTheme, tejasThemeBgCard, tejasThemeBgTransparent }
