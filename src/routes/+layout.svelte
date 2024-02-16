<script>
	import '../app.css';
	export const prerender = true;
</script>

<div class="min-h-screen flex flex-col">
	<header>
		<div class="container mx-auto p-4 flex justify-between items-center gap-4">
			<div class="flex items-center gap-4">
				<img src="/icon.png" alt="" class="w-24 max-w-[6rem]" />
				<div>
					<h1 class="text-2xl font-bold text-left flex items-center">
						<span class="font-protest"
							>Cyakhanyisa <span class="inline md:hidden">MWC</span>
							<span class="hidden md:inline">Multipurpose Worker's Cooperative</span></span
						>
					</h1>
					<p><i>We make it brighter</i></p>
				</div>
			</div>
			<a href="#contact" class="block text-center bg-orange hover:bg-brown text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-150 ease-in-out transform hover:scale-105">Contact</a>
		</div>
	</header>

	<main class="grow">
		<slot />
		<section class="bg-blue-100 py-8 px-4 md:px-12 lg:px-24 rounded-lg shadow-lg" id="contact">
			<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
			<p class="text-gray-600 text-center mb-8">
				We would love to hear from you. Please get in touch with us to discuss how we can help you
				and your community.
			</p>
			<div class="flex flex-col sm:flex-row justify-center items-center gap-4">
				<a
					href="tel:+27608061576"
					class="inline-block bg-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brown transition-colors duration-300 ease-in-out"
				>
					Call Us
				</a>
				<a
					href="https://wa.me/+27608061576"
					target="_blank"
					class="inline-block bg-yellow text-brown font-bold py-3 px-6 rounded-lg hover:bg-brown hover:text-white transition-colors duration-300 ease-in-out"
				>
					WhatsApp
				</a>
				<a
					href="mailto:thokozanomazibuko@gmail.com"
					class="inline-block bg-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-brown transition-colors duration-300 ease-in-out"
				>
					Email Us
				</a>
			</div>
		</section>
	</main>

	<footer class="bg-brown text-white p-4">
		<p class="text-center">© 2023</p>
	</footer>
</div>
