<script setup lang="ts">
const props = defineProps(['collection'])
</script>

<template>
<div class="pager hbox">

    <!-- First --> 
    {% if collection.first -%}
    <a href="/{{collection.first.permalink}}" title="first">
        <i class="las la-angle-double-left"></i>
    </a>
    {% else -%}
    <a class="disabled" title="first">
        <i class="las la-angle-double-left"></i>
    </a>
    {% endif -%}

    <!-- Previous -->
    {% if collection.previous.length -%}
    <a href="/{{collection.previous[collection.previous.length-1].permalink}}" title="previous">
        <i class="las la-angle-left"></i>
    </a>
    {% else -%}
    <a class="disabled" title="previous">
        <i class="las la-angle-left"></i>
    </a>
    {% endif -%}

    <!-- Next -->
    {% if collection.next.length -%}
    <a href="/{{collection.next[0].permalink}}" title="next">
        <i class="las la-angle-right"></i>
    </a>
    {% else -%}
    <a class="disabled" title="next">
        <i class="las la-angle-right"></i>
    </a>
    {% endif -%}

    <!-- Last -->
    {% if collection.last -%}
    <a href="/{{collection.last.permalink}}" title="next">
        <i class="las la-angle-double-right"></i>
    </a>
    {% else -%}
    <a class="disabled" title="last">
        <i class="las la-angle-double-right"></i>
    </a>
    {% endif -%}

</div>
</template>