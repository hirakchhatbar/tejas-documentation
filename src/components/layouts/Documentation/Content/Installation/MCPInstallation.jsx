import CodeBlock from '@/components/shared/CodeBlock.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { tejasTheme } from '@/lib/code-block-themes.js'
import { BotIcon, SparklesIcon, WrenchIcon, BookOpenIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

const MCP_CLIENTS = [
  {
    id: 'cursor',
    label: 'Cursor',
    configPath: '.cursor/mcp.json',
    instructions: 'Create (or edit) this file in your workspace root. Restart Cursor after saving.',
    configIntro: 'In **Cursor**, create (or edit) the file `.cursor/mcp.json` in your workspace root and add the Tejas server:'
  },
  {
    id: 'claude',
    label: 'Claude Code',
    configPath: 'claude_desktop_config.json',
    instructions: 'Add the mcpServers block to your Claude desktop config (e.g. %APPDATA%\\Claude\\ on Windows, ~/Library/Application Support/Claude/ on macOS). Restart Claude Code after saving.',
    configIntro: 'In **Claude Code**, add the Tejas server to your Claude desktop config. Config file: `claude_desktop_config.json` (e.g. `%APPDATA%\\Claude\\` on Windows, `~/Library/Application Support/Claude/` on macOS):'
  },
  {
    id: 'vscode',
    label: 'VS Code',
    configPath: 'MCP extension settings',
    instructions: 'If using an MCP extension for VS Code, add the Tejas server to your MCP server list using the command and args below. Restart VS Code after configuring.',
    configIntro: 'In **VS Code** with an MCP extension, add the Tejas server to your MCP server list. Use the JSON below in your extension\'s MCP configuration:'
  },
  {
    id: 'codex',
    label: 'Codex',
    configPath: 'MCP configuration',
    instructions: 'Add the Tejas server to your Codex MCP configuration using the command and args below. Restart Codex after saving.',
    configIntro: 'In **Codex**, add the Tejas server to your MCP configuration:'
  },
  {
    id: 'opencode',
    label: 'OpenCode',
    configPath: 'MCP configuration',
    instructions: 'Add the Tejas server to your OpenCode MCP configuration using the command and args below. Restart OpenCode after saving.',
    configIntro: 'In **OpenCode**, add the Tejas server to your MCP configuration:'
  }
]

const PACKAGE_MANAGERS = [
  { id: 'npm', label: 'npm', command: 'npx', args: ['-y', 'tejas-mcp'] },
  { id: 'pnpm', label: 'pnpm', command: 'pnpm', args: ['dlx', 'tejas-mcp'] },
  { id: 'yarn', label: 'yarn', command: 'yarn', args: ['dlx', 'tejas-mcp'] },
  { id: 'bun', label: 'bun', command: 'bunx', args: ['tejas-mcp'] }
]

const DEFAULT_CONFIG_JSON = `{
  "mcpServers": {
    "tejas": {
      "command": "npx",
      "args": ["-y", "tejas-mcp"]
    }
  }
}`

const capabilities = [
  {
    Icon: WrenchIcon,
    title: 'Scaffold projects',
    description: 'Generate a complete te.js project structure with a single prompt.'
  },
  {
    Icon: SparklesIcon,
    title: 'Generate routes & targets',
    description: 'Describe your API and let the AI write correct te.js targets, configuration and entry files.'
  },
  {
    Icon: BookOpenIcon,
    title: 'Full framework knowledge',
    description: 'The AI assistant has access to all te.js docs, code examples, and best practices — no hallucinated APIs.'
  }
]

function buildMcpConfig(command, args) {
  return JSON.stringify(
    {
      mcpServers: {
        tejas: { command, args }
      }
    },
    null,
    2
  )
}

function formatConfigIntro(htmlLike) {
  if (!htmlLike) return null
  return htmlLike
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
    .replace(/`(.*?)`/g, '<code class="rounded bg-muted px-1.5 py-0.5">$1</code>')
}

const MCPInstallation = () => {
  const [clientId, setClientId] = useState('cursor')
  const [packageManagerId, setPackageManagerId] = useState('npm')
  const [configClientId, setConfigClientId] = useState('cursor')

  const client = useMemo(() => MCP_CLIENTS.find((c) => c.id === clientId), [clientId])
  const pkg = useMemo(() => PACKAGE_MANAGERS.find((p) => p.id === packageManagerId), [packageManagerId])
  const generatedConfig = useMemo(
    () => (pkg ? buildMcpConfig(pkg.command, pkg.args) : ''),
    [pkg]
  )
  const configWithComment = useMemo(
    () => (client && pkg ? `// ${client.configPath}\n${generatedConfig}` : ''),
    [client, generatedConfig]
  )

  return (
    <section id="mcp-setup" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold tracking-tight">
            AI-Assisted Setup (MCP)
          </h2>
          <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400 border border-sky-500/25">
            Recommended
          </span>
        </div>
        <p className="text-muted-foreground">
          The fastest way to build with te.js is to let your AI assistant do the heavy lifting.
          Using the <strong className="text-foreground">Model Context Protocol (MCP)</strong>, your IDE's AI gains
          full knowledge of the te.js framework — docs, code patterns, and generation tools — so
          you can go from zero to a running API with natural-language prompts.
        </p>
      </div>

      <Card className="border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-cyan-500/5">
        <CardContent className="pt-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <BotIcon className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Why MCP?</p>
              <p className="text-sm text-muted-foreground">
                Without MCP, your AI assistant guesses how te.js works and often produces incorrect code.
                With the Tejas MCP server, the AI has access to the real documentation, validated code
                examples, and purpose-built tools to scaffold projects and generate framework-correct code.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div id="mcp-quick-start" className="flex flex-col gap-4">
        <h3 className="text-base font-medium">Quick Start</h3>
        <p className="text-sm text-muted-foreground">
          Select your MCP client and package manager to get the right configuration. If you&apos;d like to do it manually, see the <a href="#mcp-configuration" className="text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:no-underline">Configuration</a> section below.
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">MCP client</p>
            <Tabs value={clientId} onValueChange={setClientId} className="w-full">
              <TabsList className="inline-flex h-auto flex-wrap items-center gap-1.5 rounded-md bg-muted/60 p-1.5">
                {MCP_CLIENTS.map((c) => (
                  <TabsTrigger key={c.id} value={c.id} className="shrink-0 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Package manager</p>
            <Tabs value={packageManagerId} onValueChange={setPackageManagerId} className="w-full">
              <TabsList className="inline-flex h-auto flex-wrap items-center gap-1.5 rounded-md bg-muted/60 p-1.5">
                {PACKAGE_MANAGERS.map((pm) => (
                  <TabsTrigger key={pm.id} value={pm.id} className="shrink-0 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                    {pm.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <p className="text-sm text-muted-foreground">
            Add the following to your config <strong className="text-foreground">({client?.configPath})</strong>:
          </p>
          <CodeBlock
            code={configWithComment}
            language="json"
            withCopy
            theme={tejasTheme}
            filename={client?.configPath ?? 'mcp.json'}
          />
          {client && (
            <p className="text-sm text-muted-foreground">
              {client.instructions}
            </p>
          )}
        </div>
      </div>

      <div id="mcp-configuration" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">1. Add the MCP server to your IDE</h3>
          <p className="text-xs font-medium text-muted-foreground mb-2">Select your IDE</p>
          <Tabs value={configClientId} onValueChange={setConfigClientId} className="w-full">
            <TabsList className="inline-flex h-auto flex-wrap items-center gap-1.5 rounded-md bg-muted/60 p-1.5">
              {MCP_CLIENTS.map((c) => (
                <TabsTrigger key={c.id} value={c.id} className="shrink-0 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {MCP_CLIENTS.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-4 focus-visible:outline-none">
                {/* eslint-disable-next-line react/no-danger */}
                <p
                  className="text-sm text-muted-foreground mb-3"
                  dangerouslySetInnerHTML={{ __html: formatConfigIntro(c.configIntro) }}
                />
                <CodeBlock
                  code={`// ${c.configPath}\n${DEFAULT_CONFIG_JSON}`}
                  language="json"
                  withCopy
                  theme={tejasTheme}
                  filename={c.configPath}
                />
                <p className="text-sm text-muted-foreground mt-3">
                  {c.instructions}
                </p>
              </TabsContent>
            ))}
          </Tabs>
          <p className="text-sm text-muted-foreground mt-2">
            For other MCP-compatible IDEs and editors, use the same stdio transport — run{' '}
            <code className="rounded bg-muted px-1.5 py-0.5">npx tejas-mcp</code> as the
            server command. No API keys or configuration required.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-medium">2. Start prompting</h3>
          <p className="text-sm text-muted-foreground">
            Once the MCP server is connected, simply ask your AI assistant to build with te.js. For example:
          </p>
          <div className="flex flex-col gap-2">
            {[
              'Scaffold a new te.js project called my-api on port 5000',
              'Create a REST API with user CRUD routes using te.js',
              'Add a /health endpoint that returns system uptime'
            ].map((prompt, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-md border border-border bg-muted/30 px-3 py-2.5"
              >
                <SparklesIcon className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;{prompt}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            The assistant will use MCP tools to generate your project files, targets, and
            configuration — all following te.js conventions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {capabilities.map(({ Icon, title, description }, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-lg border border-border bg-card/50 p-4"
          >
            <Icon className="w-5 h-5 text-sky-500" />
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <Card className="border-sky-500/30 bg-sky-500/5">
        <CardContent className="pt-6">
          <p className="font-medium mb-1">Available MCP tools</p>
          <p className="text-sm text-muted-foreground mb-3">
            The Tejas MCP server provides your AI assistant with these tools:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">scaffold_project</code> — generate a full project</span>
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">generate_target</code> — create route handlers</span>
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">generate_app_entry</code> — create the app entry file</span>
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">generate_config</code> — create tejas.config.json</span>
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">get_documentation</code> — read framework docs</span>
            <span><code className="rounded bg-muted px-1 py-0.5 text-xs">search_docs</code> — search across all docs</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default MCPInstallation
