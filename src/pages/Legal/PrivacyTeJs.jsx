import { Link } from 'react-router-dom'

const LAST_UPDATED = 'March 29, 2026'

const PrivacyTeJs = () => {
  return (
    <div className="relative flex flex-col w-full min-h-full">
      <div className="max-w-3xl mx-auto w-full px-6 py-16 sm:py-20">
        <header className="mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            te.js Framework
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground">
          <Section title="Introduction">
            <p>
              Tejas (&quot;te.js&quot;, &quot;the Framework&quot;) is an open-source Node.js
              framework distributed under the MIT license. This Privacy Policy
              explains how data may be collected, used, and handled when you use
              te.js in your applications.
            </p>
            <p>
              As a framework, te.js runs within <strong className="text-foreground">your</strong> application
              and on <strong className="text-foreground">your</strong> infrastructure. Tejas does not operate
              servers that receive your data by default. Certain optional features,
              when enabled by you, may transmit data to third-party services.
            </p>
          </Section>

          <Section title="Information We Do Not Collect">
            <p>
              By default, te.js does not collect, transmit, or store any personal
              information. The framework processes HTTP requests entirely within
              your application&apos;s runtime environment. No data is sent to Tejas
              or any third party unless you explicitly enable optional features.
            </p>
          </Section>

          <Section title="Optional Features That May Process Data">
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">
              Radar Telemetry
            </h3>
            <p>
              If you enable the Radar integration by providing a{' '}
              <code>RADAR_API_KEY</code>, your application will transmit
              telemetry data to the configured Radar collector endpoint. This
              data may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Client IP addresses</li>
              <li>User-Agent strings</li>
              <li>HTTP method, path, status code, and response timing</li>
              <li>Request and response sizes</li>
              <li>Optionally: request/response headers and bodies (configurable)</li>
            </ul>
            <p className="mt-2">
              Radar provides field-level masking to help you redact sensitive
              data before transmission. You control what data is captured through
              your Radar configuration. See the{' '}
              <Link to="/privacy/radar" className="text-foreground underline underline-offset-2 hover:text-foreground/80">
                Tejas Radar Privacy Policy
              </Link>{' '}
              for details on how Radar Cloud processes this data.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              LLM Error Handling
            </h3>
            <p>
              If you configure the LLM error handling feature, error information
              may be sent to an OpenAI-compatible API endpoint for generating
              user-friendly error messages. The framework applies automatic
              masking to sensitive fields (including email, phone, SSN, and
              payment-related data) before sending data to the LLM provider.
              You are responsible for reviewing and configuring the LLM endpoint
              and understanding its data handling practices.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              Auto-Generated Documentation
            </h3>
            <p>
              The built-in auto-docs feature uses a password-protected interface.
              When accessed, it sets a single HTTP-only cookie
              (<code>_tejs_docs</code>) containing an HMAC of the configured
              password. This cookie expires after 7 days and is used solely to
              authenticate access to your API documentation. No data is sent
              externally; the cookie is set and verified within your application.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
              HTTP Request Logging
            </h3>
            <p>
              When enabled via <code>LOG_HTTP_REQUESTS</code>, the framework
              logs request metadata (method, endpoint, status, duration, and
              client IP) to your application&apos;s console. The logger
              automatically masks common sensitive fields such as passwords,
              tokens, and authorization headers. Logs remain within your
              infrastructure and are not transmitted externally.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>When optional features are enabled, data may be sent to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong className="text-foreground">Radar Collector</strong> — telemetry
                endpoint (default: <code>collector.usetejas.com</code>, configurable)
              </li>
              <li>
                <strong className="text-foreground">OpenAI-compatible API</strong> — for LLM
                error handling (endpoint and provider are fully configurable)
              </li>
              <li>
                <strong className="text-foreground">jsDelivr CDN</strong> — the auto-docs
                UI loads the Scalar API reference viewer from jsDelivr
              </li>
            </ul>
            <p className="mt-2">
              Each third-party service has its own privacy policy. We encourage
              you to review them when enabling these features.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              te.js sets one optional cookie when the auto-docs feature is used:
            </p>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-3 py-2 text-foreground font-medium">Name</th>
                    <th className="text-left px-3 py-2 text-foreground font-medium">Purpose</th>
                    <th className="text-left px-3 py-2 text-foreground font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2"><code>_tejs_docs</code></td>
                    <td className="px-3 py-2">Docs authentication (HMAC of password)</td>
                    <td className="px-3 py-2">7 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2">
              This cookie is HTTP-only and SameSite=Lax. No tracking or
              analytics cookies are set by the framework.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              te.js includes several built-in security measures:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Automatic field masking in logs for sensitive data (passwords, tokens, authorization headers)</li>
              <li>Extended PII masking in LLM error payloads (email, phone, SSN, payment data)</li>
              <li>Timing-safe password comparison for docs authentication</li>
              <li>Configurable field masking for Radar telemetry</li>
            </ul>
            <p className="mt-2">
              As te.js runs on your infrastructure, you are responsible for
              securing your deployment environment, network, and any data
              your application processes.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              te.js is a developer tool and is not directed at children under
              13. The framework does not knowingly collect personal information
              from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected by updating the &quot;Last updated&quot; date at the top of
              this page. Continued use of the framework after changes constitutes
              acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a
                href="mailto:support@usetejas.com"
                className="text-foreground underline underline-offset-2 hover:text-foreground/80"
              >
                support@usetejas.com
              </a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-3">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  )
}

export default PrivacyTeJs
