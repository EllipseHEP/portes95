<template>
  <div class="w-full bg-bottom-bar py-1 px-1 flex justify-between items-center z-[5000]">
    <div id="bottom-bar-left" class="flex items-center gap-3">
      <LayoutBottomBarButton @click="isStartMenuOpen = !isStartMenuOpen">
        <div class="flex flex-row items-center justify-start gap-2 w-14 -mx-2 cursor-pointer">
          <IconStar class="w-4 h-4" />
          Démarrer
        </div>
      </LayoutBottomBarButton>

      <div class="flex flex-row items-center gap-2">
        <LayoutBottomBarButton 
          v-for="window in currentlyOpenWindows.openWindows" :key="window"
          @click="currentlyOpenWindows.setLastClickedWindow(window)"
        >
          <div class="text-left flex flex-row items-start justify-start min-w-16 -ml-2 pr-32 cursor-pointer">
            {{ window }}
          </div>
        </LayoutBottomBarButton>
      </div>
    </div>
    <div id="bottom-bar-right" class="flex flex-row gap-2 items-center border-t border-l border-r border-b border-[#08080E] border-r-[#FCFCFC] border-b-[#FCFCFC] pr-4 pl-2 py-0.5">
      <div class="flex flex-row items-center mr-2 gap-2">
        <LayoutBottomBarSmiley />
        <IconWireless class="w-4 h-4 text-black" />
      </div>
      <LayoutBottomBarClock />
    </div>
  </div>
  <div
    v-if="isStartMenuOpen"
    class="absolute bottom-11 left-1 bg-bottom-bar border border-white border-solid shadow-md w-48 z-50"
>
    <button
      class="w-full text-left px-4 py-2 hover:bg-gray-100"
      @click="close"
    >
      Éteindre
    </button>
    <button
      class="w-full text-left px-4 py-2 hover:bg-gray-100"
      @click="restart"
    >
      Redémarrer
    </button>
  </div>
</template>

<script lang="ts" setup>
  const currentlyOpenWindows = useOpenWindowsStore();
  const isStartMenuOpen = ref(false);

  function restart() {
    location.reload();
  }
  function close() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
  }


</script>