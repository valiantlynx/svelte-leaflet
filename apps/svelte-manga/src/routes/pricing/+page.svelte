<script>
	let isNavOpen = false;
	let billPlan = 'monthly';
  
	let plans = [
	  {
		name: 'Easy',
		discretion: 'All the basics for businesses that are just getting started.',
		price: {
		  monthly: 29,
		  annually: 29 * 12 - 199
		},
		features: ['One project', 'Your dashboard']
	  },
	  {
		name: 'Basic',
		discretion: 'Better for growing businesses that want more customers.',
		price: {
		  monthly: 59,
		  annually: 59 * 12 - 100
		},
		features: ['Two projects', 'Your dashboard', 'Components included', 'Advanced charts']
	  },
	  {
		name: 'Custom',
		discretion: 'Advanced features for pros who need more customization.',
		price: {
		  monthly: 139,
		  annually: 139 * 12 - 100
		},
		features: ['Unlimited projects', 'Your dashboard', '+300 Components', 'Chat support']
	  }
	];
  </script>
  
  <main class="mx-4 my-16">
	<div class="text-center text-base-content">
	  <h1 class="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
		Our <span class="font-semibold">plans</span> for your <span class="font-semibold">strategies</span>
	  </h1>
	  <p class="text-sm font-normal ">
		See below our main three plans for your business, for your startup and agency.
	  </p>
	  <p class="text-sm font-normal ">
		It starts from here! You can teach yourself what you really like.
	  </p>
	</div>
  
	<!-- Plan switch -->
	<div class="flex items-center justify-center mt-10 space-x-4">
	  <span class="text-base font-medium">Bill Monthly</span>
	  <button
		class="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
		on:click={() => billPlan = billPlan === 'monthly' ? 'annually' : 'monthly'}>
		<div class="w-16 h-8 transition bg-secondary rounded-full shadow-md outline-none"></div>
		<div class="absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-primary rounded-full shadow-sm top-1 left-1"
		  class:translate-x-0={billPlan === 'monthly'}
		  class:translate-x-8={billPlan === 'annually'}></div>
	  </button>
	  <span class="text-base font-medium">Bill Annually</span>
	</div>
  
	<!-- Plans -->
	<div class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
	  {#each plans as plan (plan.name)}
		<section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-primary text-primary-content rounded-lg shadow-md">
		  <!-- Price -->
		  <div class="flex-shrink-0">
			<span class="text-4xl font-medium tracking-tight" class:text-green-500={plan.name === 'Basic'}>
			  ${billPlan === 'monthly' ? plan.price.monthly : plan.price.annually}
			</span>
			<span class="">{billPlan === 'monthly' ? '/month' : '/year'}</span>
		  </div>
  
		  <!-- Plan Description -->
		  <div class="flex-shrink-0 pb-6 space-y-2 border-b-4 border-secondary">
			<h2 class="text-2xl font-normal">{plan.name}</h2>
			<p class="text-sm ">{plan.discretion}</p>
		  </div>
  
		  <!-- Features -->
		  <ul class="flex-1 space-y-4">
			{#each plan.features as feature (feature)}
			  <li class="flex items-start">
				<i class="mr-2 text-success fa fa-check-circle"></i>
				<span class="ml-3 text-base font-medium">{feature}</span>
			  </li>
			{/each}
		  </ul>

		  <!-- Button -->
		  <div class="flex-shrink-0 pt-4">
			<button class="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border border-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
			  class:bg-secondary={plan.name === 'Basic'}
			  class:text-secondary-content={plan.name == 'Basic'}
			  class:hover:bg-secondary={plan.name !== 'Basic'}
			  class:hover:text-secondary-content={plan.name !== 'Basic'}>
			  Get {plan.name}
			</button>
		  </div>
		</section>
	  {/each}
	</div>
  </main>
