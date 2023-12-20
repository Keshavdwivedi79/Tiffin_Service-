<style type="text/css">
    div.viewport {
        overflow: hidden;
        position: relative;
    }

    img.clipped {
        display: block;
        position: absolute;
    }
</style>

<script type="text/javascript">
    function setViewport(img, x, y, width, height) {
        img.style.left = "-" + x + "px";
        img.style.top  = "-" + y + "px";

        if (width !== undefined) {
            img.parentNode.style.width  = width  + "px";
            img.parentNode.style.height = height + "px";
        }
    }

    setViewport(document.getElementsByTagName("img")[0], 10, 20, 30, 40);
</script>

<div class="viewport">
    <img class="clipped" src="/images/clipped.png" alt="Clipped image"/>
</div>