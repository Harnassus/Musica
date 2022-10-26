<script>
	import Playlist from '../components/Playlist.svelte';

	export let data;
	const { playlists, newReleases, popular } = data;
</script>

<div class="mt-[6em] flex flex-col w-full items-center justify-center text-white">
	<div class="flex flex-col gap-10 items-center justify-center ">
		<div class="w-[367px] h-[503px] bg-[#609EAF] rounded-[20px] flex flex-col">
			<div class="w-full flex h-[60%]">
				<div class="pt-9 ml-5 w-[50%]">
					<p class="text-sm w-full">Curated playlist</p>
				</div>
				<img
					src="/assets/Vector.svg"
					class="w-[240px]  h-[400px]"
					alt="a wavy svg for aesthetics"
				/>
			</div>
			<div class="w-full px-5 flex flex-col gap-[2.5em]">
				<div>
					<h1 class="font-bold text-4xl">R & B Hits</h1>
					<p class="text-[14px] leading-[17px] w-[276px] h-[51px]">
						All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so
						much more
					</p>
				</div>
				<div class="flex items-center gap-4">
					<img src="/assets/Avatars.png" alt="avatars of random people joined together" />
					<img src="assets/icons/Heart.svg" alt="an icon of a heart white in color" />
					<p class="text-2xl">33k Likes</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col w-[376px] gap-5">
			<h3 class="text-2xl font-bold">Top charts</h3>
			<div class=" items-center flex-nowrap w-screen flex overflow-x-scroll scroll-p-[24px] gap-[12px] snap-x">
				{#each playlists as playlist}
					<Playlist {playlist} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');

	p,
	h1, h3 {
		font-family: 'Quicksand', sans-serif;
	}
</style>
