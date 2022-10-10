<script>
    import Magnify from "svelte-material-icons/Magnify.svelte"
	 import Home from 'iconsax-svelte/Home.svelte';
	 import MusicPlaylist from 'iconsax-svelte/MusicPlaylist.svelte';
	 import Radio from 'iconsax-svelte/Radio.svelte';
	 import VideoHorizontal from 'iconsax-svelte/VideoHorizontal.svelte';
	 import ProfileRemove from 'iconsax-svelte/ProfileRemove.svelte';
	 import Logout1 from 'iconsax-svelte/Logout1.svelte';;
</script>

<div class="w-full fixed h-[50px] ">
	<div class="w-full max-w-[1224px] flex items-center mx-auto lg:px-6 lg:py-5 py-3 px-3 justify-between flex-wrap">
		<div class="flex gap-3 items-center">
			<div class="flex flex-col gap-2 lg:hidden">
				<div class="border-[2px] rounded border-[#EFEEE0] w-4" />
				<div class="rounded border-[2px] border-[#EFEEE0] w-4" />
			</div>
            <a href="/" class="lg:mr-5"><img src="/assets/logo.svg" alt="Musica's Logo"></a>
		</div>
		<form action="" class="flex lg:w-[90%] gap-3 opacity-20">
			 <button class="flex text-white">
                <Magnify height="30px" width="30px"/>
            </button>
			<input type="text" name="" id="" class="bg-[#1D2123] text-white outline-none px-3 rounded hidden lg:block w-full" placeholder="Search artists">
		</form>
		<div class="w-[340px]  lg:w-[100px] hidden lg:items-start lg:bg-transparent mt-3 gap-9 lg:flex flex-col p-10 lg:pl-0 rounded-lg bg-[#1A1E1F] h-[800px]">
			<div class="flex flex-col gap-8 lgitems-center rounded-[32px]     justify-center lg:w-[52px] lg:h-[230px] lg:bg-[#1A1E1F]
			 ">
				<a class="gap-4 flex items-center font-bold text-lg text-center text-white" href="/">
					<Home size="25" variant="Bold" color="#FACD66" />
					<p>Home</p>
			    </a>
				<a class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white" href="/">
					<MusicPlaylist size="25" variant="Bold" color="white" />
					<p>My Collections</p>
				</a> 
				<a class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white" href="/">
					<Radio size="25" variant="Bold" color="white" />
					<p>Radio</p>
				</a> 
				<a class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white" href="/">
					<VideoHorizontal size="25" variant="Bold" color="white" />
					<p>Music Videos</p>
				</a> 
			</div>
			<div class="lg:w-[52px] lg:h-[127px] bg-[#1A1E1F] lg:items-center justify-center gap-9 rounded-[32px] flex flex-col">
				<a class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white" href="/">
				<ProfileRemove size="25" variant="Bold" color="white" />
				<p>Profile</p>
			     </a>
			<a class="gap-4 opacity-20 flex items-center font-bold text-lg text-center text-white" href="/">
				<Logout1 size="25" variant="Bold" color="white" />
				<p>Log out</p>
			</a>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');

	p{
		font-family: 'Quicksand', sans-serif;
	}
	.ham-btn:nth-child(1){
		scale: .5;
	}

	@media screen and (min-width: 1024px) {
		p{
			display: none;
		}
	}
</style>