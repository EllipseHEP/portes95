<template>
  <div>
    <h2>Search Results</h2>
    <ul>
      <li v-for="page in pages">
        <button @click="openPageLink(page.url)">
          {{ page.name }}
        </button>
        <div class="small-gray url">
          {{ page.url }}
        </div>
        <div class="desc">
          {{ page.description }}
        </div>
        <div class="padding-bottom: 100px" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import emitter from "@/components/misc/eventHandler"
import { onMounted } from 'vue'
import { useMissionsStore } from '~/stores/missions'

const missionsStore = useMissionsStore()

const pages = ref([
    {name:"Minecraft - Download", url:"https://www.minceraft.net/download", description:"Téléchargez gratuitement Minecraft maintenant !"},
    {name:"Minecraft Online", url:"https://www.minecraft-online/launcher.com", description:"Jouez à Minecraft en ligne. Aucune inscription requise!"},
    {name:"Minecraft Launcher", url:"https://www.launcher.minecraft.net/download", description:"La toute dernière version de Minecraft."},
    {name:"Microsoft - Minecraft", url:"https://www.launcher.minecroft.com", description:"Téléchargez Minecraft depuis la page originale."},
    {name:"Minecraft - Chip", url:"https://www.chip.de/Minecraft", description:""}
])

onMounted(() => {
  setTimeout(() => {
    missionsStore.triggerEvent('search_results')
  }, 1000)
})

function openPageLink(link) {

  switch (link) {
    case "https://www.launcher.minecraft.net/download":
      emitter.emit("openPage", "Minecraft")
      break
    case "https://www.minceraft.net/download":
      setTimeout(() => {
        missionsStore.triggerEvent('scam_site')
      }, 1000)
      emitter.emit("openPage", "Minceraft")
      break
    case "https://www.launcher.minecroft.com":
      setTimeout(() => {
        missionsStore.triggerEvent('scam_site')
      }, 1000)
      emitter.emit("openPage", "Minecroft")
      break
    case "https://www.minecraft-online/launcher.com":
      setTimeout(() => {
        missionsStore.triggerEvent('scam_site')
      }, 1000)
      emitter.emit("openPage", "Minecraft Online")
      break
    default:
      break
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  color: #000080;
  text-align: left;
  cursor: pointer;
  padding: 0px 0;
  margin-top: 10px;
  font-size: 14px;
}

button:hover {
  text-decoration: underline;
}

.small-light-gray {
  color: gray;
}

.small-gray {
  color: dimgray;
}

.desc {
  font-size: 10px;
}

.url {
  font-size: 10px;
  margin-bottom: 5px;
}
</style>