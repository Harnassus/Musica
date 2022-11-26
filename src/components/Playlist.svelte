<script>
	export let playlist;
	
</script>

<div class="shrink-0 grow-0  w-full h-[233px] bg-[#1A1E1F] rounded-[20px] px-4 py-4">
	<a href={`/playlist/${playlist?.id}`} class="flex justify-between">
		<section class="h-full flex flex-col gap-3">
			<img src={playlist?.images[0]?.url} class="h-[99px] w-[109px] object-cover" alt="" />
			<section class="flex flex-col gap-2">
				<h2 class="text-lg">{playlist?.name}</h2>
				<p class="text-xs opacity-20">{playlist?.owner?.display_name}</p>
			</section>
			<p>{playlist?.tracks?.total} songs</p>
		</section>
		<section
			class="w-[37px] h-[37px] rounded-[50%] border flex items-center justify-center border-[#FFFFFF1C]"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.1539 7.69874C0.349149 5.18624 1.28965 2.31449 3.9274 1.46474C5.3149 1.01699 6.8464 1.28099 7.9999 2.14874C9.09115 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.9999 14.7487 7.9999 14.7487C7.9999 14.7487 2.4484 11.7277 1.1539 7.69874Z"
					stroke="#FACD66"
					stroke-width="0.5625"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					opacity="0.4"
					d="M11 4.02502C11.8025 4.28452 12.3695 5.00077 12.4377 5.84152"
					stroke="#FACD66"
					stroke-width="0.5625"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</section>
	</a>
</div>

<style>
	img {
		/* background: url(1f67d3cc-aa53-47f5-ae7c-3670f44dc667.jpg); */
		border-radius: 10px;
	}
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');

	p,
	h1,
	h3 {
		font-family: 'Quicksand', sans-serif;
	}
	/* .playlist-container::-webkit-scrollbar {
		display: none;
	} */
</style>
