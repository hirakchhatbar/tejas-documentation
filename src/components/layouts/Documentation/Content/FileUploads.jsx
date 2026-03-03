import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { Separator } from '@/components/ui/separator.jsx'
import { quickStart, configuration, singleFile, multipleFiles } from '@/data/code-blocks/file-uploads/index.js'

const FileUploads = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">
        Tejas provides a built-in <code>TejFileUploader</code> class for handling file uploads with ease.
      </p>

      <div id="quick-start" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Quick Start</h2>
        <CodeBlock code={quickStart} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="configuration" className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Configuration</h2>
        <CodeBlock code={configuration} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        <div id="options" className="flex flex-col gap-2">
          <h3 className="text-base font-medium">Options</h3>
          <p className="text-muted-foreground">
            <code>destination</code> (string) — Directory to save uploaded files. <code>name</code> (string) — Optional custom filename. <code>maxFileSize</code> (number) — Maximum file size in bytes.
          </p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="single-file" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Single File Upload</h2>
        <p>Use <code>upload.file(fieldName)</code> for single file uploads:</p>
        <CodeBlock code={singleFile} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
        <div id="file-structure" className="flex flex-col gap-2 mt-2">
          <h3 className="text-base font-medium">File Object Structure</h3>
          <p className="text-sm text-muted-foreground">
            When a file is uploaded, <code>ammo.payload[fieldName]</code> contains: filename, extension, path.absolute, path.relative, mimetype, size (value and symbol).
          </p>
        </div>
      </div>

      <Separator orientation="horizontal" />

      <div id="multiple-files" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Multiple File Upload</h2>
        <p>Use <code>upload.files(...fieldNames)</code> for multiple files. Each field contains an array of file objects.</p>
        <CodeBlock code={multipleFiles} language="javascript" withLineNumbers withCopy theme={tejasTheme} />
      </div>

      <Separator orientation="horizontal" />

      <div id="best-practices" className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
          <li>Set maxFileSize to prevent abuse</li>
          <li>Validate file types (mimetype) in your handler if needed</li>
          <li>Store uploads outside the public directory or serve them through a controlled route</li>
        </ul>
      </div>
    </div>
  )
}

export default FileUploads
