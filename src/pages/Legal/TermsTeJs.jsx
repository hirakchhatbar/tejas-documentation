const LAST_UPDATED = 'March 29, 2026'

const TermsTeJs = () => {
  return (
    <div className='relative flex flex-col w-full min-h-full'>
      <div className='max-w-3xl mx-auto w-full px-6 py-16 sm:py-20'>
        <header className='mb-12'>
          <p className='text-sm font-medium text-muted-foreground mb-2'>
            te.js Framework
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-foreground tracking-tight'>
            Terms &amp; Conditions
          </h1>
          <p className='mt-3 text-sm text-muted-foreground'>
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className='flex flex-col gap-10 text-[15px] leading-relaxed text-muted-foreground'>
          <Section title='1. Acceptance of Terms'>
            <p>
              By downloading, installing, or using te.js (&quot;the
              Framework&quot;), you agree to be bound by these Terms &amp;
              Conditions. If you do not agree, do not use the Framework.
            </p>
          </Section>

          <Section title='2. License'>
            <p>
              te.js is released under the{' '}
              <strong className='text-foreground'>MIT License</strong>. You are
              free to use, copy, modify, merge, publish, distribute, sublicense,
              and/or sell copies of the Framework, subject to the conditions of
              the MIT License. The full license text is included in the source
              repository.
            </p>
          </Section>

          <Section title='3. Description of the Framework'>
            <p>
              te.js is an open-source Node.js backend framework that provides
              HTTP routing, middleware support, request parsing, rate limiting,
              auto-generated API documentation, and optional integrations for
              telemetry (Radar) and AI-assisted error handling (LLM). The
              Framework runs entirely within your application and on your
              infrastructure.
            </p>
          </Section>

          <Section title='4. Your Responsibilities'>
            <p>As a user of te.js, you are responsible for:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                Complying with all applicable laws and regulations in your
                jurisdiction
              </li>
              <li>
                Ensuring your application&apos;s compliance with data protection
                laws (such as GDPR, CCPA, or equivalent)
              </li>
              <li>
                Properly configuring optional features (Radar, LLM, logging) and
                understanding their data implications
              </li>
              <li>Securing your deployment environment and infrastructure</li>
              <li>
                Reviewing and complying with the terms of any third-party
                services you enable through the Framework
              </li>
            </ul>
          </Section>

          <Section title='5. Acceptable Use'>
            <p>You agree not to use te.js to:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>
                Build applications that violate any applicable law or regulation
              </li>
              <li>
                Infringe upon the rights of others, including intellectual
                property rights
              </li>
              <li>Distribute malware, spyware, or other malicious software</li>
              <li>Engage in unauthorized data collection or surveillance</li>
              <li>
                Misrepresent the origin of the Framework or claim official
                endorsement for derivative works without permission
              </li>
            </ul>
          </Section>

          <Section title='6. Intellectual Property'>
            <p>
              The te.js name, logo, and branding are the property of Tejas.
              While the source code is licensed under MIT, the Tejas trademarks
              may not be used in connection with any product or service that is
              not affiliated with Tejas without prior written permission.
            </p>
            <p>
              Applications you build using te.js are entirely your own. The
              Framework does not claim any ownership over code you write or
              content you serve.
            </p>
          </Section>

          <Section title='7. No Warranty'>
            <p>
              The Framework is provided{' '}
              <strong className='text-foreground'>&quot;as is&quot;</strong> and{' '}
              <strong className='text-foreground'>
                &quot;as available&quot;
              </strong>
              , without warranty of any kind, express or implied, including but
              not limited to the warranties of merchantability, fitness for a
              particular purpose, and noninfringement.
            </p>
          </Section>

          <Section title='8. Limitation of Liability'>
            <p>
              In no event shall the authors, contributors, or copyright holders
              of te.js be liable for any claim, damages, or other liability,
              whether in an action of contract, tort, or otherwise, arising
              from, out of, or in connection with the Framework or the use or
              other dealings in the Framework. This includes, without
              limitation, any direct, indirect, incidental, special,
              consequential, or punitive damages.
            </p>
          </Section>

          <Section title='9. Third-Party Services'>
            <p>
              te.js integrates with optional third-party services (Radar
              telemetry, LLM providers, CDN resources). These services are
              governed by their own terms and conditions. Tejas is not
              responsible for the availability, accuracy, or practices of
              third-party services.
            </p>
          </Section>

          <Section title='10. Modifications to the Framework'>
            <p>
              Tejas reserves the right to modify, update, or discontinue any
              part of the Framework at any time. As an open-source project,
              community contributions are welcome and governed by the
              project&apos;s contribution guidelines and the MIT License.
            </p>
          </Section>

          <Section title='11. Changes to These Terms'>
            <p>
              We may revise these Terms &amp; Conditions from time to time.
              Changes will be reflected by updating the &quot;Last updated&quot;
              date at the top of this page. Your continued use of the Framework
              after changes are posted constitutes acceptance of the revised
              terms.
            </p>
          </Section>

          <Section title='12. Governing Law'>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in
              accordance with applicable laws, without regard to conflict of law
              principles.
            </p>
          </Section>

          <Section title='13. Contact'>
            <p>
              For questions about these Terms &amp; Conditions, please contact
              us at{' '}
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

export default TermsTeJs
