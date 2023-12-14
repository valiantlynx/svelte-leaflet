<script>
	import { page } from '$app/stores';
	import { ContentCardImage } from '@valiantlynx/svelte-ui';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    const similarManga = $page.data.similarManga;
</script>

<div class=" space-y-4  pb-4 border border-primary m-4 bg-base-200">
	<h2 class="text-2xl font-bold mb-4 bg-primary text-primary-content rounded-b-md w-full">
		<i class="fa fa-book mx-2"></i>
		Checkout similar manga
	</h2>
    <div class="mx-auto container gap-y-6 gap-x-4 px-4">
        <Splide 
        aria-label="similar manga"
        options={ {
            rewind: true,
            fixedWidth : 200,
            gap   : '1rem',
            type   : 'loop',
            autoplay: true,
          } }
        >
        {#each similarManga as manga}
        <SplideSlide>
            <ContentCardImage
                link={'/manga/' + manga.sourceid}
                img={manga.img}
                alt={manga.title}
                label1={manga.title}
                label2={manga.latestChapter}
                title={manga.title}
            >
                <label class="cursor-auto text-secondary" for="rating-8">{manga.views}</label>
            </ContentCardImage>
        </SplideSlide>
        {/each}
         </Splide>
    </div>
</div>