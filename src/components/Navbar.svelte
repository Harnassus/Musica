<script>
	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import Home from 'iconsax-svelte/Home.svelte';
	import MusicPlaylist from 'iconsax-svelte/MusicPlaylist.svelte';
	import Radio from 'iconsax-svelte/Radio.svelte';
	import VideoHorizontal from 'iconsax-svelte/VideoHorizontal.svelte';
	import ProfileRemove from 'iconsax-svelte/ProfileRemove.svelte';
	import Logout1 from 'iconsax-svelte/Logout1.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let menu;
	let menuButton;
	let menuShown = true;

	onMount(() => {
		menuButton.addEventListener('click', function () {
			menuShown === true
				? ((menuShown = false),
				  (menu.style.transform = 'translateX(0%)'),
				  (menu.style.display = 'flex'),
				  console.log(menuShown))
				: ((menuShown = true),
				  (menu.style.transform = 'translateX(-350%)'),
				  (menu.style.display = 'none'));
		});
		const activePage = $page.url.pathname;
		let navList = document.querySelectorAll('nav a');
		navList.forEach((link) => {
			if (link.pathname === activePage) {
				// console.log(activePage, $page.url.pathname, link);
				link.style.opacity = 1;
				let children = link.firstChild.childNodes;
				children.forEach((c) =>{
					c.attributes.fill.nodeValue = '#FACD66';
				})
			}
 
		})
	});
</script>

<div class="w-full fixed h-[100px] z-[10] top-0 left-0 lg:px-6 lg:py-5 py-4 px-5 ">
	<div class="w-full flex items-start mx-auto justify-between flex-col">
		<div class="flex gap-[9em] w-full">
			<div class="flex gap-6 mr-auto lg:mr-0 items-center">
				<button class="flex flex-col gap-2 lg:hidden ham-btn" bind:this={menuButton}>
					<div class="border-[2px] rounded border-[#EFEEE0] w-4" />
					<div class="rounded border-[2px] border-[#EFEEE0] w-4" />
				</button>
				<a href="/" class="lg:mr-5"><img src="/assets/logo.svg" alt="Musica's Logo" /></a>
			</div>
			<form action="" class="flex lg:w-[80%] items-center gap-3 opacity-20">
				<button class="flex text-white">
					<Magnify height="30px" width="30px" />
				</button>
				<input
					type="text"
					name=""
					id=""
					class="bg-[#1D2123] text-white outline-none px-3 rounded hidden lg:block w-full"
					placeholder="Search artists"
				/>
			</form>
		</div>
		<div
			bind:this={menu}
			class="w-[350px] hidden transition-all ease-in lg:w-[100px] lg:items-start lg:bg-transparent mt-3 gap-2 lg:flex flex-col p-10 lg:pl-0 rounded-lg bg-[#1A1E1F] h-[800px]"
		>
			<nav
				class="flex flex-col gap-8 lg:items-center rounded-[32px]     justify-center lg:w-[52px] lg:h-[230px] lg:bg-[#1A1E1F]
			 "
			>
				<a class="opacity-20 gap-4 flex items-center font-bold text-lg text-center text-white" href="/">
					<Home size="25" variant="Bold" color="white" />
					<p>Home</p>
				</a>
				<a
					class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white"
					href="/collections"
				>
					<MusicPlaylist size="25" variant="Bold" color="white" />
					<p>My Collections</p>
				</a>
				<a
					class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white"
					href="/radio"
				>
					<Radio size="25" variant="Bold" color="white" />
					<p>Radio</p>
				</a>
				<a
					class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white"
					href="/videos"
				>
					<VideoHorizontal size="25" variant="Bold" color="white" />
					<p>Music Videos</p>
				</a>
			</nav>
			<nav
				class="lg:w-[52px] lg:h-[127px] bg-[#1A1E1F] lg:items-center justify-center gap-9 rounded-[32px] flex flex-col"
			>
				<a
					class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white"
					href="/profile"
				>
					<ProfileRemove size="25" variant="Bold" color="white" />
					<p>Profile</p>
				</a>
				<a
					class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white"
					href="/logout"
				>
					<Logout1 size="25" variant="Bold" color="white" />
					<p>Log out</p>
				</a>
			</nav>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');

	p {
		font-family: 'Quicksand', sans-serif;
	}
	.ham-btn:nth-child(2) {
		scale: 0.5;
	}

	.showMenu {
		display: flex;
		transform: translateX(350%);
	}
	.active{
		opacity: 0;
	}
	.icon{
		color: black;
	}

	@media screen and (min-width: 1024px) {
		p {
			display: none;
		}
	}
</style>
