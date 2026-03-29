import { Link } from 'react-router-dom'

const LAST_UPDATED = 'March 29, 2026'

const PrivacyRadar = () => {
  return (
    <div className='relative flex flex-col w-full min-h-full'>
      <div className='max-w-3xl mx-auto w-full px-6 py-16 sm:py-20'>
        <header className='mb-12'>
          <p className='text-sm font-medium text-muted-foreground mb-2'>
            Tejas Radar
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground tracking-tight'>
            Privacy Policy
          </h1>
          <p className='mt-3 text-sm text-muted-foreground'>
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className='flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground'>
          <Section title='Introduction'>
            <p>
              Tejas Radar (&quot;Radar&quot;, &quot;the Service&quot;) is a
              cloud-based observability platform that provides logging, metrics,
              error tracking, and trace analysis for applications built with
              te.js. This Privacy Policy explains how we collect, use, store,
              and protect your information when you use Radar.
            </p>
            <p>
              By creating an account or using Radar, you agree to the collection
              and use of information as described in this policy. If you use
              Radar on behalf of an organization, you represent that you have
              the authority to bind that organization to these terms.
            </p>
          </Section>

          <Section title='Information We Collect'>
            <h3 className='text-base font-semibold text-foreground mt-4 mb-2'>
              Account Information
            </h3>
            <p>When you create a Radar account, we collect:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                <strong className='text-foreground'>Email address</strong> —
                used for authentication, account recovery, and service
                communications
              </li>
              <li>
                <strong className='text-foreground'>Display name</strong> —
                shown within the Radar dashboard and to team members
              </li>
              <li>
                <strong className='text-foreground'>Password</strong> — stored
                as a bcrypt hash; we never store or have access to your
                plaintext password
              </li>
            </ul>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              OAuth Information
            </h3>
            <p>
              If you sign in via Google or GitHub, we receive your email
              address, display name, and a provider-specific user ID. We do not
              request access to your repositories, contacts, or other account
              data beyond basic profile information.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              Team &amp; Collaboration Data
            </h3>
            <p>
              When you invite team members, we collect their email address to
              send the invitation. Accepted team members&apos; email and display
              name are visible to other members of the same project.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              Telemetry Data
            </h3>
            <p>
              Radar receives observability data sent by applications
              instrumented with the te.js Radar client. This data may include:
            </p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                HTTP request and response metadata (method, path, status,
                duration, sizes)
              </li>
              <li>Client IP addresses and User-Agent strings</li>
              <li>Application log messages and log levels</li>
              <li>Error messages, stack traces, and error classifications</li>
              <li>Trace IDs and span data for distributed tracing</li>
              <li>
                Optionally: request/response headers and bodies (controlled by
                your Radar configuration)
              </li>
            </ul>
            <p className='mt-2'>
              The content and scope of telemetry data is determined by your
              application&apos;s Radar configuration. We provide field-level
              masking controls to help you redact sensitive information before
              it reaches our servers.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              API Keys
            </h3>
            <p>
              API keys you generate are stored as cryptographic hashes. We
              display only the key prefix for identification. The full key is
              shown once at creation and cannot be retrieved afterward.
            </p>
          </Section>

          <Section title='How We Use Your Information'>
            <p>We use the collected information to:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>Provide, operate, and maintain the Radar service</li>
              <li>Authenticate your identity and manage your account</li>
              <li>
                Display telemetry data, logs, metrics, and traces in your
                dashboard
              </li>
              <li>
                Send transactional emails (team invitations, account
                notifications)
              </li>
              <li>Monitor and improve service reliability and performance</li>
              <li>Enforce our Terms &amp; Conditions and prevent abuse</li>
            </ul>
            <p className='mt-2'>
              We do <strong className='text-foreground'>not</strong> sell your
              data to third parties. We do{' '}
              <strong className='text-foreground'>not</strong> use your
              telemetry data for advertising or marketing purposes.
            </p>
          </Section>

          <Section title='Data Storage &amp; Security'>
            <h3 className='text-base font-semibold text-foreground mt-4 mb-2'>
              Storage
            </h3>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                <strong className='text-foreground'>Account data</strong>{' '}
                (profiles, projects, teams, API key metadata) is stored in
                MongoDB
              </li>
              <li>
                <strong className='text-foreground'>Telemetry data</strong>{' '}
                (logs, metrics, errors, traces) is stored in ClickHouse,
                optimized for high-volume analytical queries
              </li>
            </ul>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              Security Measures
            </h3>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>Passwords are hashed using bcrypt before storage</li>
              <li>API keys are stored as cryptographic hashes</li>
              <li>
                Session tokens are signed JWTs transmitted via HTTP-only cookies
              </li>
              <li>
                OAuth flows use PKCE (where supported) and short-lived state
                cookies
              </li>
              <li>Telemetry ingestion is authenticated via API key</li>
              <li>
                Field-level masking is available both client-side and
                server-side
              </li>
            </ul>
          </Section>

          <Section title='Cookies'>
            <p>Radar uses the following cookies:</p>
            <div className='mt-2 overflow-x-auto'>
              <table className='w-full text-sm border border-border rounded'>
                <thead>
                  <tr className='border-b border-border bg-muted/50'>
                    <th className='text-left px-3 py-2 text-foreground font-medium'>
                      Name
                    </th>
                    <th className='text-left px-3 py-2 text-foreground font-medium'>
                      Purpose
                    </th>
                    <th className='text-left px-3 py-2 text-foreground font-medium'>
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-border'>
                    <td className='px-3 py-2'>
                      <code>radar-token</code>
                    </td>
                    <td className='px-3 py-2'>
                      Session authentication (signed JWT)
                    </td>
                    <td className='px-3 py-2'>24 hours</td>
                  </tr>
                  <tr className='border-b border-border'>
                    <td className='px-3 py-2'>
                      <code>oauth-state</code>
                    </td>
                    <td className='px-3 py-2'>OAuth CSRF protection</td>
                    <td className='px-3 py-2'>Session (short-lived)</td>
                  </tr>
                  <tr>
                    <td className='px-3 py-2'>
                      <code>oauth-pkce</code>
                    </td>
                    <td className='px-3 py-2'>OAuth PKCE code verifier</td>
                    <td className='px-3 py-2'>Session (short-lived)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='mt-2'>
              All cookies are HTTP-only. Radar does not use tracking cookies,
              advertising cookies, or third-party analytics cookies.
            </p>
          </Section>

          <Section title='Third-Party Services'>
            <p>Radar uses the following third-party services:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                <strong className='text-foreground'>
                  Google &amp; GitHub OAuth
                </strong>{' '}
                — for optional single sign-on authentication
              </li>
              <li>
                <strong className='text-foreground'>Resend</strong> — for
                sending transactional emails (team invitations). Emails are sent
                from <code>noreply@radar.tejas.dev</code>
              </li>
              <li>
                <strong className='text-foreground'>
                  OpenAI-compatible API
                </strong>{' '}
                — optionally used for AI-enhanced error messages (configurable
                endpoint and provider)
              </li>
            </ul>
            <p className='mt-2'>
              Each service operates under its own privacy policy. We share only
              the minimum data required for each integration to function.
            </p>
          </Section>

          <Section title='Data Retention'>
            <ul className='list-disc pl-5 space-y-1'>
              <li>
                <strong className='text-foreground'>Account data</strong> is
                retained for as long as your account is active
              </li>
              <li>
                <strong className='text-foreground'>Telemetry data</strong> is
                retained according to your plan&apos;s retention period. Older
                data is automatically purged
              </li>
              <li>
                <strong className='text-foreground'>API keys</strong> can be
                revoked at any time; revoked keys are deleted
              </li>
              <li>
                When you delete your account, all associated account data,
                projects, and team memberships are permanently removed
              </li>
            </ul>
          </Section>

          <Section title='Your Rights'>
            <p>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                <strong className='text-foreground'>Access</strong> — request a
                copy of the personal data we hold about you
              </li>
              <li>
                <strong className='text-foreground'>Correction</strong> — update
                or correct inaccurate personal data via your account settings
              </li>
              <li>
                <strong className='text-foreground'>Deletion</strong> — request
                deletion of your account and associated data
              </li>
              <li>
                <strong className='text-foreground'>Data portability</strong> —
                request an export of your data in a machine-readable format
              </li>
              <li>
                <strong className='text-foreground'>Objection</strong> — object
                to certain processing of your data
              </li>
            </ul>
            <p className='mt-2'>
              To exercise any of these rights, contact us at{' '}
              <a
                href='mailto:support@usetejas.com'
                className='text-foreground underline underline-offset-2 hover:text-foreground/80'
              >
                support@usetejas.com
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title='International Data Transfers'>
            <p>
              Your data may be processed and stored in locations outside your
              country of residence. By using Radar, you consent to the transfer
              of your information to these locations. We take reasonable steps
              to ensure your data is treated securely and in accordance with
              this Privacy Policy.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Radar is not directed at individuals under the age of 16. We do
              not knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us and we will promptly delete it.
            </p>
          </Section>

          <Section title='Changes to This Policy'>
            <p>
              We may update this Privacy Policy periodically. Material changes
              will be communicated via email or a prominent notice on the
              Service. The &quot;Last updated&quot; date at the top indicates
              when the latest revision was made. Continued use of Radar after
              changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title='Related Policies'>
            <ul className='list-disc pl-5 space-y-1'>
              <li>
                <Link
                  to='/terms/radar'
                  className='text-foreground underline underline-offset-2 hover:text-foreground/80'
                >
                  Tejas Radar Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy/te-js'
                  className='text-foreground underline underline-offset-2 hover:text-foreground/80'
                >
                  te.js Framework Privacy Policy
                </Link>
              </li>
            </ul>
          </Section>

          <Section title='Contact'>
            <p>
              If you have questions or concerns about this Privacy Policy or
              your data, please contact us at{' '}
              <a
                href='mailto:support@usetejas.com'
                className='text-foreground underline underline-offset-2 hover:text-foreground/80'
              >
                support@usetejas.com
              </a>
              .
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
      <h2 className='text-xl font-semibold text-foreground mb-3'>{title}</h2>
      <div className='flex flex-col gap-3'>{children}</div>
    </section>
  )
}

export default PrivacyRadar
