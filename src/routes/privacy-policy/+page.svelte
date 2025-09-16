<script lang="ts">
	// Update this date whenever you change the policy
	const lastUpdated = 'September 16, 2025';
	// Company/site identifiers
	const company = 'DYPE';
	const domain = 'startuppackage.cz';
	const contactEmail = 'info@dype.cz';
	const address = 'Vaclavske nam. 1/841/3, 110 00 Prague 1 – Nove Mesto, Czech Republic';
</script>

<svelte:head>
	<title>Privacy Policy | {company}</title>
	<meta name="description" content="Privacy policy for {company} ({domain}). Learn how we collect, use, and protect your data." />
	<meta name="robots" content="index,follow" />
</svelte:head>

<section class="mx-auto max-w-3xl px-4 py-12">
	<header class="mb-8">
		<h1 class="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
		<p class="mt-2 text-sm text-neutral-500">Last updated: {lastUpdated}</p>
	</header>

	<!-- If you use @tailwindcss/typography, the prose classes will style content nicely -->
	<article class="prose prose-neutral dark:prose-invert max-w-none">
		<p>
			This Privacy Policy describes how {company} (“we”, “our”, or “us”) collects, uses, and protects your personal
			information when you use our website <strong>{domain}</strong>.
		</p>

		<h2 id="info-we-collect">1. Information We Collect</h2>
		<ul>
			<li><strong>Personal information</strong>: name, email address, phone number, and other details you provide through forms or registration.</li>
			<li><strong>Usage data</strong>: IP address, device and browser type, pages visited, time spent on the site.</li>
			<li><strong>Cookies &amp; tracking technologies</strong>: used to improve user experience, security, and analyze traffic.</li>
		</ul>

		<h2 id="how-we-use">2. How We Use Your Information</h2>
		<ul>
			<li>Provide, operate, and improve our services and website.</li>
			<li>Respond to inquiries and provide customer support.</li>
			<li>Send important updates and marketing communications <em>(only if you opted in; you can opt out anytime)</em>.</li>
			<li>Monitor and analyze usage and performance.</li>
			<li>Prevent fraud, abuse, and security incidents, and comply with legal obligations.</li>
		</ul>

		<h2 id="sharing">3. Sharing of Information</h2>
		<p>We do <strong>not sell</strong> your personal information.</p>
		<p>We may share data with:</p>
		<ul>
			<li><strong>Service providers</strong> (e.g., hosting, analytics, email delivery, payment processing) under contracts that protect your data.</li>
			<li><strong>Authorities or third parties</strong> when required by law or to protect our rights, users, or others’ safety.</li>
		</ul>

		<h2 id="cookies">4. Cookies</h2>
		<p>
			We use cookies and similar technologies to remember your preferences, enhance functionality, and analyze traffic.
			You can control cookies via your browser settings; disabling them may affect some features.
		</p>

		<h2 id="retention">5. Data Retention</h2>
		<p>
			We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, to comply
			with legal obligations, resolve disputes, and enforce our agreements.
		</p>

		<h2 id="your-rights">6. Your Rights</h2>
		<p>Depending on your location (e.g., under GDPR in the EU), you may have the right to:</p>
		<ul>
			<li>Access, correct, update, or delete your personal data.</li>
			<li>Object to or restrict certain processing.</li>
			<li>Data portability.</li>
			<li>Withdraw consent where processing is based on consent.</li>
		</ul>
		<p>
			To exercise these rights, contact us at <a href={"mailto:" + contactEmail}>{contactEmail}</a>. We may request verification of your identity.
		</p>

		<h2 id="security">7. Security</h2>
		<p>
			We implement reasonable technical and organizational measures to protect personal data. However, no method of
			transmission or storage is 100% secure.
		</p>

		<h2 id="third-party-links">8. Third-Party Links</h2>
		<p>
			Our website may contain links to external sites we do not operate. We are not responsible for their content or
			privacy practices.
		</p>

		<h2 id="children">9. Children’s Privacy</h2>
		<p>
			Our services are not directed to children under 13 (or 16 in the EU). We do not knowingly collect personal data
			from children.
		</p>

		<h2 id="changes">10. Changes to This Policy</h2>
		<p>
			We may update this Privacy Policy from time to time. The “Last updated” date reflects the most recent version.
			Material changes will be communicated via the website and/or email where appropriate.
		</p>

		<h2 id="contact">11. Contact Us</h2>
		<p>
			If you have questions about this policy or our data practices, contact us at:<br />
			<strong>Email:</strong> <a href={"mailto:" + contactEmail}>{contactEmail}</a><br />
			<strong>Address:</strong> {address}
		</p>
	</article>

	<!-- Optional: quick links / mini TOC -->
	<nav aria-label="Secondary" class="mt-10 border-t pt-6">
		<ul class="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300 sm:grid-cols-2">
			<li><a class="hover:underline" href="#info-we-collect">Information We Collect</a></li>
			<li><a class="hover:underline" href="#how-we-use">How We Use Your Information</a></li>
			<li><a class="hover:underline" href="#sharing">Sharing of Information</a></li>
			<li><a class="hover:underline" href="#cookies">Cookies</a></li>
			<li><a class="hover:underline" href="#retention">Data Retention</a></li>
			<li><a class="hover:underline" href="#your-rights">Your Rights</a></li>
			<li><a class="hover:underline" href="#security">Security</a></li>
			<li><a class="hover:underline" href="#third-party-links">Third-Party Links</a></li>
			<li><a class="hover:underline" href="#children">Children’s Privacy</a></li>
			<li><a class="hover:underline" href="#changes">Changes</a></li>
			<li><a class="hover:underline" href="#contact">Contact</a></li>
		</ul>
	</nav>
</section>
