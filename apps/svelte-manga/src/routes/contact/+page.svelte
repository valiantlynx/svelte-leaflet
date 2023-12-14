<script>
	import Social from '$lib/components/press/Social.svelte';
	import { postPocketbase } from '$lib/utils/api';

	const contactData = {
		name: '',
		email: '',
		message: '',
		handled: false
	};

	function send() {
		// Send the data to the server
		postPocketbase('contact_valiantlynx', contactData);

		// Clear the form fields
		contactData.name = '';
		contactData.email = '';
		contactData.message = '';
	}
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact this contact" />
</svelte:head>

<div class="container my-24 mx-auto md:px-6">
	<section class="mb-32 text-center">
		<div class="py-12 md:px-12">
			<div class="container mx-auto xl:px-32">
				<div class="grid items-center lg:grid-cols-2">
					<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
						<div class="relative z-[1] block rounded-lg glass px-6 py-12 md:px-12 lg:-mr-14">
							<h2
								class="mb-4 p-4 text-3xl font-bold bg-base-300 rounded-t-lg border-x-8 border-t-8 border-b-2 border-primary"
							>
								Contact us
							</h2>
							<form
								class="bg-base-300 rounded-b-lg border-x-8 border-b-8 border-t-2 border-primary"
							>
								<div class="relative mb-6" data-te-input-wrapper-init>
									<input
										type="text"
										class="peer block w-full rounded-none border-0 bg-transparent py-2 px-3 outline-none"
										id="exampleInput90"
										bind:value={contactData.name}
										placeholder="Name"
									/>
									<label
										class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
										for="exampleInput90"
										>{contactData.name ? contactData.name : 'Name'}
									</label>
								</div>
								<div class="relative mb-6" data-te-input-wrapper-init>
									<input
										type="email"
										class="peer block w-full rounded-none border-0 bg-transparent py-2 px-3 outline-none"
										id="exampleInput91"
										bind:value={contactData.email}
										placeholder="Email address"
									/>
									<label
										class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
										for="exampleInput91"
										>{contactData.email ? contactData.email : 'Email address'}
									</label>
								</div>
								<div class="relative mb-6" data-te-input-wrapper-init>
									<textarea
										class="peer block w-full rounded-none border-0 bg-transparent py-2 px-3 outline-none"
										id="exampleFormControlTextarea1"
										rows="3"
										bind:value={contactData.message}
										placeholder="message"
									/>
									<label
										for="exampleFormControlTextarea1"
										class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
										>{contactData.message ? contactData.message : 'Message'}</label
									>
								</div>
								<div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
									<input type="checkbox" id="exampleCheck96" checked />
									<label
										class="inline-block pl-[0.15rem] hover:cursor-pointer"
										for="exampleCheck96"
									>
										Send me a copy of this message
									</label>
								</div>
								<button
									type="button"
									data-te-ripple-init
									data-te-ripple-color="light"
									on:click={send}
									class="btn btn-base font-bold text-xl shadow-black shadow-inner mb-4 w-3/4"
								>
									Send
								</button>
							</form>
						</div>
					</div>
					<div class="md:mb-12 lg:mb-0">
						<div class="relative h-[700px] rounded-lg shadow-lg">
							<iframe
								title="map"
								src="https://maps.google.com/maps?q=oslo&t=&z=13&ie=UTF8&iwloc=&output=embed"
								class="absolute left-0 top-0 h-full w-full rounded-lg"
								frameborder="0"
								allowfullscreen
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<h2 class="mb-12 text-3xl font-bold">You can also contact us in our socials</h2>
		<Social />
	</section>
</div>
