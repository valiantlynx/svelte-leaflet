<script lang="ts">
	export let crumbs: any = [];
</script>

<div class="text-sm breadcrumbs m-4 text-center">
	<ul>
		{#each crumbs as crumb}
			<li>
				<a href={crumb.url} class="link link-hover">
					{crumb.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.breadcrumbs {
		max-width: 100%;
		overflow-x: auto;
		padding-top: 0.5rem /* 8px */;
		padding-bottom: 0.5rem /* 8px */;
	}
	.breadcrumbs > ul,
	.breadcrumbs > ol {
		display: flex;
		align-items: center;
		white-space: nowrap;
		min-height: min-content;
	}
	.breadcrumbs > ul,
	.breadcrumbs > ol {
		display: flex;
		align-items: center;
		white-space: nowrap;
		min-height: min-content;
	}
	.breadcrumbs > ul > li,
	.breadcrumbs > ol > li {
		display: flex;
		align-items: center;
	}
	.breadcrumbs > ul > li,
	.breadcrumbs > ol > li {
		display: flex;
		align-items: center;
	}
	.breadcrumbs > ul > li > a,
	.breadcrumbs > ol > li > a {
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.breadcrumbs > ul > li > a,
	.breadcrumbs > ol > li > a {
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	@media (hover: hover) {
		.breadcrumbs > ul > li > a:hover,
		.breadcrumbs > ol > li > a:hover {
			text-decoration-line: underline;
		}
	}
	@media (hover: hover) {
		.breadcrumbs > ul > li > a:hover,
		.breadcrumbs > ol > li > a:hover {
			text-decoration-line: underline;
		}
	}
	.breadcrumbs > ul > li > a:focus,
	.breadcrumbs > ol > li > a:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	.breadcrumbs > ul > li > a:focus,
	.breadcrumbs > ol > li > a:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	.breadcrumbs > ul > li > a:focus-visible,
	.breadcrumbs > ol > li > a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}
	.breadcrumbs > ul > li > a:focus-visible,
	.breadcrumbs > ol > li > a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 2px;
	}
	.breadcrumbs > ul > li + *:before,
	.breadcrumbs > ol > li + *:before {
		content: '';
		margin-left: 0.5rem /* 8px */;
		margin-right: 0.75rem /* 12px */;
		display: block;
		height: 0.375rem /* 6px */;
		width: 0.375rem /* 6px */;
		--tw-rotate: 45deg;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		opacity: 0.4;
		border-top: 1px solid;
		border-right: 1px solid;
		background-color: transparent;
	}
	.breadcrumbs > ul > li + *:before,
	.breadcrumbs > ol > li + *:before {
		content: '';
		margin-left: 0.5rem /* 8px */;
		margin-right: 0.75rem /* 12px */;
		display: block;
		height: 0.375rem /* 6px */;
		width: 0.375rem /* 6px */;
		--tw-rotate: 45deg;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		opacity: 0.4;
		border-top: 1px solid;
		border-right: 1px solid;
		background-color: transparent;
	}
	[dir='rtl'] .breadcrumbs > ul > li + *:before,
	[dir='rtl'] .breadcrumbs > ol > li + *:before {
		--tw-rotate: -45deg;
	}
	[dir='rtl'] .breadcrumbs > ul > li + *:before,
	[dir='rtl'] .breadcrumbs > ol > li + *:before {
		--tw-rotate: -45deg;
	}
</style>
