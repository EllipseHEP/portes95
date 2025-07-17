<template>
  <div class="w-full max-w-5xl">
    <div class="min-h-[55vh] min-w-[60vw] flex">
      <!-- E-Mail-Liste -->
      <aside class="w-1/3 bg-[#b3b3b3] border-r border-gray-300 overflow-y-auto">
        <ul>
          <li v-for="mail in mails" :key="mail.id" @click="selectMail(mail)" :class="[
            'p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-400 transition',
            mail.id === selectedMail?.id ? 'bg-[#c4c4c4]' : '',
            mail.read ? 'bg-[#b3b3b3]' : 'bg-[#b3b3b3]'
          ]">
            <div class="flex items-center">
              <span v-if="!mail.read" class="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2 mt-1"></span>
              <span
                :class="mail.read ? 'text-xs truncate p-1 font-normal text-gray-800' : ' text-xs  p-1 font-semibold text-gray-900'">
                {{ mail.sender }}
              </span>
            </div>
            <div :class="['text-sm truncate p-2', mail.read ? 'text-xs text-gray-600' : 'text-xs text-gray-800']">
              {{ mail.subject }}
            </div>
          </li>
        </ul>
      </aside>

      <!-- E-Mail-Inhalt -->
      <main class="flex-1 p-6 overflow-y-auto">
        <div v-if="selectedMail" class="space-y-4">
          <!-- Betreff und Datum oberhalb des Inhalts -->
          <div>
            <h2 class="text-l font-bold text-gray-900">De : {{ selectedMail.sender }}</h2>
            <p class="text-xs text-gray-500">Sujet : {{ selectedMail.subject }}</p>
            <p class="text-xs text-gray-500">Date : {{ selectedMail.date }}</p>
          </div>
          <hr class=" my-2 border-gray-300 mb-2 pb-2" />
          <p class="text-xs text-gray-800 whitespace-pre-line">{{ selectedMail.body1 }}</p>
          <div v-if="selectedMail.link">
            <button class="text-xs link-button" @click="handleClick(selectedMail.id)">
              {{ selectedMail.link }}
            </button>
          </div>
          <div v-if="selectedMail.body2">
            <p class="text-xs text-gray-800 whitespace-pre-line">{{ selectedMail.body2 }}</p>
          </div>




        </div>
        <div v-else class="text-gray-500 text-center mt-20">
          Choisissez un message.
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const mails = ref([
  {
    id: 1,
    sender: 'security-alert@m1crosoft-support.com',
    subject: 'Urgent: tentative de connexion inhabituelle détectée sur votre compte Microsoft',
    date: '2025-05-22',
    body1: `Bonjour,

      Nous avons détecté une tentative de connexion inhabituelle sur votre compte Microsoft.

      Appareil : Portes 95
      Lieu: Bucharest, Romania
      Date: May 22, 2025, 3:43 AM

      Si ce n'était pas vous, veuillez cliquer immédiatement sur le lien ci-dessous pour sécuriser votre compte:
      `,
    link: `http://m1crosoft-security-check.mssecurity.xyz`,
    body2: `
      Merci,
      Équipe de sécurité Microsoft`,
    read: false,
  },
  {
    id: 2,
    sender: 'noreply@dhl-parcelservice.net',
    subject: 'La livraison du colis a échoué - Action requise !',
    date: '2025-05-21',
    body1: `Cher client,

      Votre envoi avec numéro de suivi DHL-593823234 n'a pas pu être livré.

      Pour planifier un renvoi, veuillez confirmer votre adresse ici:
      `,
    link: `http://dhl.redelivery-check.co.uk.verified.site`,
    body2: `
      Si nous ne recevons pas de réponse dans les 24 heures, le colis sera retourné.

      Sincèrement vôtre,
      Service client DHL`,
    read: false,
  },
  {
    id: 3,
    sender: 'service@paypa1.com',
    subject: 'Votre compte a été temporairement limité',
    date: '2025-05-20',
    body1: `Dear customer,

Nous avons détecté une activité suspecte sur votre compte PayPal et l'avons temporairement limité.

Pour restaurer l'accès, veuillez vérifier vos informations en utilisant le lien suivant:
`,
    link: `http://paypa1.secure-checkup.io`,
    body2: `
Il s'agit d'une mesure de sécurité pour protéger votre compte. Veuillez agir rapidement.

Meilleures salutations,
Équipe de sécurité PayPal`,
    read: false,
  },
  {
    id: 4,
    sender: 'kevin.it@internal-support.org',
    subject: 'Urgent: la mise à jour de sécurité nécessite votre aide',
    date: '2025-05-19',
    body1: `Hi,

Nous déployons un patch de sécurité critique sur toutes les postes de travail.

Veuillez m'envoyer votre nom d'utilisateur Windows et votre mot de passe actuel afin que je puisse appliquer la mise à jour à distance.

Merci pour votre réponse rapide !

Cordialement,
Kevin (Helpdesk DGEO)`,
    read: false,
  },
  {
    id: 5,
    sender: 'jonny8734@gmail.com',
    subject: 'Tu veux jouer à Minecraft avec moi?',
    date: '2025-05-19',
    body1: `Salut !

  Je configure un serveur Minecraft pour ce soir. Je pensais que ce serait amusant de jouer enfin ensemble comme nous en parlions !

  Si vous ne l'avez pas encore installé, vous pouvez saisir l'installateur ici:
  `,
    link: `https://launcher-offcial.minecraft-dl.net/download/MinecraftInstaller.exe`,
    body2: `
  Faites-moi savoir une fois que vous êtes configuré. Le serveur doit être en direct à 20 h. J'enverrai alors l'IP !

  À plus :)
  – Jonny`,
    read: false,
  }
  ,
  {
    id: 6,
    sender: 'winner@amzn-pricecenter.com',
    subject: 'Félicitations ! Vous avez remporté un bon Amazon de 100 francs !',
    date: '2025-05-18',
    body1: `Chère participante,

Vous avez été sélectionnée au hasard comme gagnante d'une carte-cadeau Amazon de 100 francs !

Pour réclamer votre prix, cliquez simplement sur le lien ci-dessous et confirmez vos coordonnées:
`,
    link: `http://prize-center.amzn-de-gutschein.com`,
    body2: `
Dépêchez-vous ! Cette offre expire en 48 heures.

Bonne chance !
L'équipe du prix Amazon`,
    read: false,
  }
]);

const selectedMail = ref(null);
const missionsStore = useMissionsStore();
const payloadStore = usePayloadsStore();
const openWindowsStore = useOpenWindowsStore();
let wrongLinkClicked = false;

function selectMail(mail) {
  selectedMail.value = mail;
  if (!mail.read) {
    mail.read = true;
  }

  //handle correct mail
  if (mail.id == 5) {
    setTimeout(() => {
      if (selectedMail.value.id == 5 && !wrongLinkClicked) {
        missionsStore.triggerEvent("email_opened");

        setTimeout(() => {
          if (selectedMail.value.id == 5 && !wrongLinkClicked) {
            missionsStore.triggerEvent("email_opened_delay");
          }
        }, 3500);
      }
    }, 6300);
  }
}

function handleClick(id) {
  console.log(id);
  // Deine Funktion hier
  //if id 5 - fake launcher
  //otherwise 
  if (id == 1) {
    missionsStore.triggerEvent("phishing2")
    payloadStore.antRunner = true
    missionsStore.addInfectionLevel(30)
  }
  else if (id == 2) {
    missionsStore.triggerEvent("phishing2")
    payloadStore.you_are_an_idiot = true
    missionsStore.addInfectionLevel(40)
  }
  else if (id == 3) {
    missionsStore.triggerEvent("phishing2")
    payloadStore.cube = true
    missionsStore.addInfectionLevel(30)
  }
  else if (id == 5) {
    wrongLinkClicked = true

    openWindowsStore.openWindow("Mincefrat Instaler")
  }
  else if (id == 6) {
    missionsStore.triggerEvent("phishing2")
    payloadStore.ransomware = true
  }
}
</script>


<style scoped>
/*
.mail-content {
  font-size: 0.85rem; 
}

.mail-body {
  font-size: 0.9rem;
}
*/
.link-button {
  /*background-color: #1d4ed8;*/
  color: blue;
  border: none;
  padding: 0.5rem 0rem;
  cursor: pointer;
  text-decoration: underline;

}
.link-button {
  /*background-color: #1d4ed8;*/
  color: blue;
  border: none;
  padding: 0.5rem 0rem;
  cursor: pointer;
  text-decoration: underline;

}
</style>
