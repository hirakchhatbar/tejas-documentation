const Troubleshooting = () => {
  return (
    <section id="troubleshooting" className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold tracking-tight">Troubleshooting</h2>

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-medium">Command not found</h3>
        <p className="text-sm text-muted-foreground">
          If <code className="rounded bg-muted px-1.5 py-0.5">npx</code>, <code className="rounded bg-muted px-1.5 py-0.5">fly-tejas</code>, or <code className="rounded bg-muted px-1.5 py-0.5">tejas</code> is not recognized, ensure Node.js (v18 or later) and npm are installed. Run <code className="rounded bg-muted px-1.5 py-0.5">node -v</code> and <code className="rounded bg-muted px-1.5 py-0.5">npm -v</code> to check. Install Node from{' '}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 dark:text-sky-400 hover:underline"
          >
            nodejs.org
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-medium">Port in use</h3>
        <p className="text-sm text-muted-foreground">
          If the default port (e.g. 1403) is already in use, either close the process using that port or choose a different port when the npx scaffold prompts you. You can change the port later in <code className="rounded bg-muted px-1.5 py-0.5">tejas.config.json</code> or via the <code className="rounded bg-muted px-1.5 py-0.5">PORT</code> environment variable.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-medium">ESM / import errors</h3>
        <p className="text-sm text-muted-foreground">
          If you see <code className="rounded bg-muted px-1.5 py-0.5">Cannot use import statement outside a module</code> or <code className="rounded bg-muted px-1.5 py-0.5">ReferenceError: require is not defined</code>, your project is not running as ESM. Add <code className="rounded bg-muted px-1.5 py-0.5">&quot;type&quot;: &quot;module&quot;</code> to <code className="rounded bg-muted px-1.5 py-0.5">package.json</code>. See the Manual Installation step 4 above.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-base font-medium">Permission errors</h3>
        <p className="text-sm text-muted-foreground">
          On Linux or macOS, if <code className="rounded bg-muted px-1.5 py-0.5">npx</code> fails with permission or EACCES errors when running a global-style install, avoid using <code className="rounded bg-muted px-1.5 py-0.5">sudo</code> for npm/npx. Prefer a per-user Node install (e.g. nvm or the official installer) or fix npm’s global directory permissions so your user can write to it.
        </p>
      </div>
    </section>
  )
}

export default Troubleshooting
