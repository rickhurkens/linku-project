<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="contact-section">
	<div class="contact-section-text">
		<h2>Let's connect</h2>
		<p>Got a project feel free to get touch</p>
		<a href="mailto:sakura@haruno.com" class="link--alt-color external-link">
			<span>sakura@haruno.com</span>
			<Fa icon={faArrowUpRightFromSquare} size=".8x" />
		</a>
	</div>
	<form class="contact-section-form">
		<input
			type="text"
			class="contact-form-control contact-form-name"
			placeholder="Your sweet name"
			title="name"
		/>
		<input
			type="email"
			class="contact-form-control contact-form-email"
			placeholder="Your email address"
			title="email"
		/>
		<textarea
			class="contact-form-control contact-form-message"
			placeholder="About your message"
			title="message"
		/>
		<button type="submit" class="contact-form-control contact-form-submit morelink" title="Send">
			<span>SEND</span>
			<Fa icon={faArrowRight} size="1x" />
		</button>
	</form>
</section>

<style>
	.contact-section {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		row-gap: var(--spacing-s);
	}

	.contact-section-text {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		row-gap: var(--spacing-2xs);
	}

	.external-link {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		column-gap: var(--spacing-3xs);
		font-size: var(--font-size-m);
	}

	.contact-section-form {
		--contact-form-margin-inline: var(--spacing-l);
		--contact-form-gap: var(--spacing-2xs);

		margin-inline: var(--contact-form-margin-inline);
		display: flex;
		flex-flow: row wrap;
		justify-content: right;
		gap: var(--contact-form-gap);
		max-width: 100%;
		width: calc(100% - 2 * var(--contact-form-margin-inline));
	}

	.contact-form-control {
		width: 100%;
	}

	.contact-form-message {
		min-height: 8rem;
	}

	.contact-form-submit {
		width: 38%;
	}

	@media (width > 768px) {
		.contact-section-form {
			max-width: 70%;
		}

		.contact-form-name,
		.contact-form-email {
			width: calc(50% - 0.5 * var(--contact-form-gap));
		}

		.contact-form-message {
			width: calc(78% - 0.5 * var(--contact-form-gap));
		}
		.contact-form-submit {
			width: calc(22% - 0.5 * var(--contact-form-gap));
			flex-grow: 1;
			flex-flow: column nowrap;
			row-gap: var(--spacing-2xs);
		}
	}
</style>
