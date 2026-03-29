import { Link } from 'react-router-dom'

const LAST_UPDATED = 'March 29, 2026'

const TermsRadar = () => {
  return (
    <div className='relative flex flex-col w-full min-h-full'>
      <div className='max-w-3xl mx-auto w-full px-6 py-16 sm:py-20'>
        <header className='mb-12'>
          <p className='text-sm font-medium text-muted-foreground mb-2'>
            Tejas Radar
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
              By accessing or using Tejas Radar (&quot;Radar&quot;, &quot;the
              Service&quot;), you agree to be bound by these Terms &amp;
              Conditions (&quot;Terms&quot;). If you are using the Service on
              behalf of an organization, you represent and warrant that you have
              the authority to bind that organization to these Terms.
            </p>
          </Section>

          <Section title='2. Description of Service'>
            <p>
              Radar is a cloud-based observability platform that collects,
              stores, and visualizes telemetry data — including logs, metrics,
              errors, and traces — from applications instrumented with the te.js
              framework. The Service includes a web dashboard, REST API, and
              team collaboration features.
            </p>
          </Section>

          <Section title='3. Account Registration'>
            <p>
              To use Radar, you must create an account by providing a valid
              email address and password, or by authenticating through a
              supported OAuth provider (Google or GitHub). You agree to:
            </p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>Provide accurate and complete registration information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>
                Notify us immediately of any unauthorized access to your account
              </li>
              <li>
                Accept responsibility for all activity that occurs under your
                account
              </li>
            </ul>
          </Section>

          <Section title='4. Your Data'>
            <h3 className='text-base font-semibold text-foreground mt-4 mb-2'>
              Ownership
            </h3>
            <p>
              You retain all rights to the telemetry data, logs, and other
              content you send to Radar (&quot;Your Data&quot;). We do not claim
              ownership of Your Data.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              License to Us
            </h3>
            <p>
              You grant Tejas a limited, non-exclusive license to store,
              process, and display Your Data solely for the purpose of providing
              the Service to you. This license terminates when you delete Your
              Data or your account.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              Your Responsibilities
            </h3>
            <p>
              You are responsible for the content and legality of Your Data. You
              must ensure that the data you send to Radar complies with
              applicable privacy laws. We recommend using the Radar
              client&apos;s field masking features to redact sensitive or
              personal information before transmission.
            </p>
          </Section>

          <Section title='5. Team &amp; Collaboration'>
            <p>
              Radar allows you to invite team members to your projects. When you
              invite someone:
            </p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>An invitation email is sent to the provided email address</li>
              <li>
                Accepted members gain access to the project&apos;s telemetry
                data according to their assigned role
              </li>
              <li>
                You are responsible for managing team member access and
                permissions
              </li>
              <li>Removing a team member revokes their access immediately</li>
            </ul>
          </Section>

          <Section title='6. API Keys'>
            <p>
              API keys authenticate telemetry data sent to Radar. You are
              responsible for keeping your API keys secure. If a key is
              compromised, revoke it immediately through the dashboard. Tejas is
              not liable for data sent using compromised API keys.
            </p>
          </Section>

          <Section title='7. Acceptable Use'>
            <p>You agree not to:</p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>
                Intentionally send malicious, fraudulent, or harmful data to the
                Service
              </li>
              <li>
                Attempt to gain unauthorized access to other users&apos;
                accounts or data
              </li>
              <li>
                Interfere with or disrupt the Service or its infrastructure
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract the source
                code of the Service (excluding the open-source te.js client)
              </li>
              <li>
                Resell or redistribute access to the Service without
                authorization
              </li>
              <li>
                Exceed reasonable usage limits or engage in abusive consumption
                patterns
              </li>
            </ul>
          </Section>

          <Section title='8. Service Availability'>
            <p>
              We strive to maintain high availability but do not guarantee
              uninterrupted access to the Service. Radar may be temporarily
              unavailable due to scheduled maintenance, updates, or
              circumstances beyond our control. We will make reasonable efforts
              to notify you of planned downtime in advance.
            </p>
          </Section>

          <Section title='9. Intellectual Property'>
            <p>
              The Radar service, dashboard, API, documentation, and all
              associated branding are the intellectual property of Tejas. Your
              use of the Service does not grant you any rights to our
              trademarks, trade names, or branding.
            </p>
            <p>
              The te.js framework client library used to send telemetry data is
              open-source and licensed separately under the MIT License.
            </p>
          </Section>

          <Section title='10. Limitation of Liability'>
            <p>
              To the maximum extent permitted by law, Tejas shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues (whether incurred
              directly or indirectly), loss of data, or loss of goodwill arising
              from:
            </p>
            <ul className='list-disc pl-5 space-y-1 mt-2'>
              <li>Your use of or inability to use the Service</li>
              <li>Any unauthorized access to or alteration of your data</li>
              <li>Service interruptions, bugs, or errors</li>
              <li>
                Actions or omissions of third-party services integrated with
                Radar
              </li>
            </ul>
          </Section>

          <Section title='11. Disclaimers'>
            <p>
              The Service is provided{' '}
              <strong className='text-foreground'>&quot;as is&quot;</strong> and{' '}
              <strong className='text-foreground'>
                &quot;as available&quot;
              </strong>
              . We disclaim all warranties, express or implied, including
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement. We do not warrant that the Service will be
              error-free, secure, or available at all times.
            </p>
          </Section>

          <Section title='12. Termination'>
            <h3 className='text-base font-semibold text-foreground mt-4 mb-2'>
              By You
            </h3>
            <p>
              You may terminate your account at any time by deleting it through
              the dashboard or by contacting us. Upon termination, your account
              data, projects, and telemetry data will be permanently deleted.
            </p>

            <h3 className='text-base font-semibold text-foreground mt-6 mb-2'>
              By Us
            </h3>
            <p>
              We reserve the right to suspend or terminate your access to the
              Service if you violate these Terms, engage in abusive behavior, or
              if required by law. Where possible, we will provide notice and an
              opportunity to export your data before termination.
            </p>
          </Section>

          <Section title='13. Changes to These Terms'>
            <p>
              We may update these Terms from time to time. Material changes will
              be communicated via email or a notice on the Service. The
              &quot;Last updated&quot; date at the top indicates the latest
              revision. Continued use of Radar after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title='14. Governing Law'>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles. Any
              disputes arising from these Terms or the Service will be resolved
              through good-faith negotiation before pursuing formal proceedings.
            </p>
          </Section>

          <Section title='15. Related Policies'>
            <ul className='list-disc pl-5 space-y-1'>
              <li>
                <Link
                  to='/privacy/radar'
                  className='text-foreground underline underline-offset-2 hover:text-foreground/80'
                >
                  Tejas Radar Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to='/terms/te-js'
                  className='text-foreground underline underline-offset-2 hover:text-foreground/80'
                >
                  te.js Framework Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </Section>

          <Section title='16. Contact'>
            <p>
              For questions about these Terms, please contact us at{' '}
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

export default TermsRadar
