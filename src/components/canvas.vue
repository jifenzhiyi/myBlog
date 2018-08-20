<template>
  <canvas
    id="evanyou"
    class="fireworks"/>
</template>

<script>
import * as help from '@/utils/help';

export default {
  name: 'Canvas',
  data() {
    return {
      human: null,
      render_human: null,
    };
  },
  mounted() {
    help.canvasInit();
    help.autoClick();
    help.setCanvasSize();
  },
};
</script>
