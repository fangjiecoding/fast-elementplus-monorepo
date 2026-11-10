/* eslint-env node */
const fs = require('node:fs')
const path = require('node:path')

const outputDir = path.resolve(__dirname, '../dist')
// 样式已在构建阶段合并，声明文件不应引用不存在的源码 SCSS 路径。
const styleImportRE = /^import\s+['"][^'"]+\.(?:css|less|s[ac]ss|styl|stylus)['"];?[ \t]*\r?\n?/gm

const removeStyleImports = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      removeStyleImports(entryPath)
      continue
    }

    if (!entry.isFile() || !entry.name.endsWith('.d.ts')) continue

    const source = fs.readFileSync(entryPath, 'utf8')
    const output = source.replace(styleImportRE, '')
    if (output !== source) fs.writeFileSync(entryPath, output)
  }
}

removeStyleImports(outputDir)
