<script>
	export let playlist;

	console.log(playlist);
</script>

<div class="shrink-0 grow-0  w-[323px] h-[233px] bg-[#1A1E1F] rounded-[20px]">
	<a href={playlist.href}>
		<section class="h-full flex flex-col gap-5 justify-around">
			<img src={playlist.images[0].url} class="h-[99px] w-[109px] object-cover" alt="" />
			<section>
				<h2 class="text-lg">{playlist.name}</h2>
				<p class="text-xs opacity-20">{playlist.owner.display_name}</p>
			</section>
            <p>{playlist.tracks.total} songs</p>
		</section>
        
	</a>
</div>

<style>
	img {
		background: url(1f67d3cc-aa53-47f5-ae7c-3670f44dc667.jpg);
		border-radius: 10px;
	}
</style>
