<template>
  <div class="ransomware-screen">
    <h1>!!! Vos fichiers ont été chiffrés !!!</h1>
    <p>
      Tous vos fichiers importants ont été chiffrés.<br />
      Pour récupérer vos données, vous devez payer <strong>1 BTC</strong> à l'adresse suivante:
    </p>
    <div class="btc-address">1HckjUpRGcrrRAtFaaCAUaGjsPx9oYmLaZ</div>
    <p>
      Après le paiement, envoyez l'ID de transaction à <strong>decrypt@g7ug46hgz.com</strong>.<br />
      Si vous ne payez pas dans les 72 heures, vos fichiers seront définitivement supprimés.
    </p>
    <button @click="showHelp = !showHelp">{{ showHelp ? 'Cacher' : 'Montrer' }} l'aide</button>
    <div v-if="showHelp" class="help-text">
      <h2>Comment acheter du bitcoin:</h2>
      <ul>
        <li>Créer un compte sur un échange de Bitcoin.</li>
        <li>Achetez 1 BTC et envoyez-le à l'adresse ci-dessus.</li>
        <li>Envoyez votre identifiant de transaction à l'adresse e-mail.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showHelp = ref(false);
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/windows-95');

/* Container styling */
.ransomware-screen {
  font-family: 'Windows 95', Arial, sans-serif;
  background: #000080;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  overflow: hidden;
  position: absolute;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 5px solid #c0c0c0;
  user-select: none;
  z-index: 100004
}

h1 {
  font-size: 2.5rem;
  color: #ff0000;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 0 #000;
}

p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.btc-address {
  font-family: monospace;
  background: #ffff00;
  color: #000;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border: 3px outset #c0c0c0;
  font-weight: bold;
  user-select: all;
}

button {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  font-family: 'Windows 95', Arial, sans-serif;
  font-weight: bold;
  background: #c0c0c0;
  border: 3px outset #fff;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 150px;
}

button:hover {
  background: #fff;
}

.help-text {
  margin-top: 1rem;
  text-align: left;
  background: #f0f0f0;
  color: #000;
  padding: 1rem;
  border: 3px inset #c0c0c0;
  width: 320px;
  font-size: 0.9rem;
  border-radius: 4px;
  user-select: text;
}

.help-text h2 {
  margin-top: 0;
  color: #000080;
}

.help-text ul {
  padding-left: 1.2rem;
}
</style>
