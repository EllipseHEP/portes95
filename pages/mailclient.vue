<template>
  <div class="min-h-screen bg-white">
    <div class="flex h-full">
      <!-- E-Mail-Liste -->
      <aside class="w-1/3 bg-white border-r border-gray-300 overflow-y-auto">
        <ul>
          <li
            v-for="mail in mails"
            :key="mail.id"
            @click="selectMail(mail)"
            :class="[
              'p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-200 transition',
              mail.id === selectedMail?.id ? 'bg-blue-100' : '',
              mail.read ? 'bg-white' : 'bg-white'
            ]"
          >
            <div class="flex items-center">
              <span
                v-if="!mail.read"
                class="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2 mt-1"
              ></span>
              <span :class="mail.read ? 'font-normal text-gray-800' : 'font-semibold text-gray-900'">
                {{ mail.sender }}
              </span>
            </div>
            <div :class="['text-sm truncate p-1', mail.read ? 'text-gray-600' : 'text-gray-800']">
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
            <h2 class="text-2xl font-bold text-gray-900">De : {{ selectedMail.sender }}</h2>
            <p class="text-sm text-gray-500">Sujet : {{ selectedMail.subject }}</p>
            <p class="text-sm text-gray-500">Date : {{ selectedMail.date }}</p>
          </div>
          <hr class="my-2 border-gray-300" />
          <p class="text-gray-800 whitespace-pre-line">{{ selectedMail.body }}</p>
        </div>
        <div v-else class="text-gray-500 text-center mt-20">
          Bitte eine E-Mail aus der Liste auswählen.
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailClient',
  data() {
    return {
      mails: [
  {
    id: 1,
    sender: 'security@m1crosoft-support.com',
    subject: 'Urgent: tentative d\'enregistrement suspect sur votre compte Microsoft',
    date: '2025-05-22',
    body: `Bonjour,

Nous avons trouvé un test d'enregistrement inhabituel dans votre compte Microsoft.

Appareil : Portes95
Lieu : Bucarest, Roumanie
Date : 22 Mai 2025, 03:43

Si ce n'était pas vous, cliquez ici immédiatement pour protéger votre compte:
http://m1crosoft-security-check.insecure-domain.xyz

Merci,
Service de sécurité Microsoft`,
    read: false,
  },
  {
    id: 2,
    sender: 'noreply@dhl-paketservice.net',
    subject: 'Votre colis n\'a pas pu être livré - besoin d\'action requis!',
    date: '2025-05-21',
    body: `Chère cliente, Cher client,

Votre envoi avec le numéro de suivi DHL-593823234 n'a pas pu être livré.

Pour organiser une nouvelle livraison, veuillez confirmer votre adresse ici :
http://dhl.redelivery-check.co.uk.unsecure.site

Si nous ne recevons aucune nouvelle dans les 24 heures, le colis sera retourné.

Cordialement,
Votre service-clients DHL`,
    read: false,
  },
  {
    id: 3,
    sender: 'service@paypa1.com',
    subject: 'Votre compte a été temporairement restreint',
    date: '2025-05-20',
    body: `Cher client,

Nous avons trouvé des activités suspectes dans votre compte PayPal et l'avons donc temporairement restreint.

Pour restaurer l'accès, veuillez vérifier vos données sous le lien suivant:
http://paypa1.secure-checkup.io

Cette mesure sert votre sécurité. Veuillez réagir immédiatement.

Avec nos meilleurs remerciements,
Votre équipe de sécurité PayPal`,
    read: false,
  },
  {
    id: 4,
    sender: 'kevin.it@support_it.ch',
    subject: 'URGENT la mise à jour de la sécurité a besoin de votre coopération',
    date: '2025-05-19',
    body: `Hallo Max,

Nous effectuons actuellement une mise à jour de sécurité critique sur tous les ordinateurs.

Veuillez m'envoyer votre nom d'utilisateur et votre mot de passe actuel rapidement afin que nous puissions effectuer la mise à jour.

Merci pour vos retours rapides !

Meilleures salutations,
Kevin (Helpdesk)`,
    read: false,
  },
  {
    id: 5,
    sender: 'bewerbung@outlook.de',
    subject: 'Offre de service suite à votre demande',
    date: '2025-05-21',
    body: `Mesdames et Messieurs

Ci-joint, vous trouverez mes documents de candidature complets au format PDF.

J'attends avec impatience l'opportunité de m'impliquer dans votre entreprise.

Avec mes salutations les meilleures,
Anna Lehmann

Annexe: application_annalehmann.pdf.exe`,
    read: false,
  },
  {
    id: 6,
    sender: 'gewinnen@amzn-de-gutschein.com',
    subject: 'Félicitations ! Vous avez gagné !',
    date: '2025-05-23',
    body: `Chère participante, Cher participant,

Vous avez été sélectionné·e par chance et vous avez remporté un bon Amazon 100 CHF !

Pour confirmer vos gains, cliquez simplement sur le lien suivant et communiquez vos données:
http://gewinnspiel-center.amzn-de-gutschein.com

Attention: cette offre n'est valable que 48 heures !

Bonne chance,
L'équipe des concours Amazon`,
    read: false,
  }
],
      selectedMail: null,
    };
  },
  methods: {
    selectMail(mail) {
      this.selectedMail = mail;
      if (!mail.read) {
        mail.read = true;
      }
    },
  },
};
</script>
