<template>
    <div class="container mb-20">
        <div class="flex">
            <div class="w-full md:w-1/2 md:m-auto">
                <div id="disqus_thread"></div>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
        </div>
    </div>
</template>

<script>
    var disqus_config = function () {
        this.page.url = 'home_page';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'home_page'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://bun-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>