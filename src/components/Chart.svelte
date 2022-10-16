<script>
    export let playlist;

    console.log(playlist);
</script>

<a href={playlist.href}>
   <h2>{playlist.name}</h2>
   <p>{playlist.owner.display_name}</p>
   <img src={playlist.images[0].url} alt="">
</a>