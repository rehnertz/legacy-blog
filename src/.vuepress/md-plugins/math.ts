export default function math(md: any) {
  // 在数学模式下替换普通文本中的句号。
  const fallbackText = md.renderer.rules.text.bind(md.renderer.rules)
  md.renderer.rules.text = (...args) => {
    const [tokens, idx, , env] = args
    if (env.frontmatter.math) {
      tokens[idx].content = tokens[idx].content.replaceAll('。', '．')
    }
    return fallbackText(...args)
  }

  // 在数学模式下替换数学环境中的标点。
  const fallbackMathInline = md.renderer.rules.math_inline.bind(
    md.renderer.rules
  )
  md.renderer.rules.math_inline = (...args) => {
    const [tokens, idx, , env] = args
    if (env.frontmatter.math) {
      tokens[idx].content = tokens[idx].content
        .replaceAll('。', '\\text{．}')
        .replaceAll('，', '\\text{，}')
        .replaceAll('、', '\\text{、}')
        .replaceAll('；', '\\text{；}')
    }
    return fallbackMathInline(...args)
  }

  const fallbackMathBlock = md.renderer.rules.math_block.bind(md.renderer.rules)
  md.renderer.rules.math_block = (...args) => {
    const [tokens, idx, , env] = args
    if (env.frontmatter.math) {
      tokens[idx].content = tokens[idx].content
        .replaceAll('。', '\\text{．}')
        .replaceAll('，', '\\text{，}')
        .replaceAll('、', '\\text{、}')
        .replaceAll('；', '\\text{；}')
    }
    return fallbackMathBlock(...args)
  }
}
