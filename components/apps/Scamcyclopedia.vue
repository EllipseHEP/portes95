<template>
    <div class="scamcyclopedia-window">
        <div class="window-content">
            <div class="sidebar">
                <ul>
                    <li
                        v-for="(scam, idx) in scams"
                        :key="scam.title"
                        :class="{ active: idx === selectedIndex }"
                        @click="selectedIndex = idx"
                    >
                        {{ scam.title }}
                    </li>
                </ul>
            </div>
            <div class="details">
                <h2>{{ selectedScam.title }}</h2>
                <p>{{ selectedScam.description }}</p>
                <h3>Comment le détecter</h3>
                <ul>
                    <li v-for="tip in selectedScam.detection" :key="tip">{{ tip }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const scams = [
    {
        title: 'Phishing',
        description:
            'Les escroqueries de phishing essaient de vous inciter à donner des informations sensibles en faisant semblant d\'être une entité digne de confiance.',
        detection: [
            'Vérifiez attentivement l\'adresse e-mail de l\'expéditeur.',
            'Recherchez des salutations génériques et un langage urgent.',
            'Survolez les liens pour voir leur vraie destination.',
            'Ne saisissez jamais les références sur des sites suspects.',
        ],
    },
    {
        title: 'Typosquatting',
        description:
            'La typosquat implique l\'enregistrement de noms de domaine similaires aux sites populaires pour inciter les utilisateurs à visiter de faux sites Web.',
        detection: [
            'Vérifiez les URL du site Web pour les fautes d\'orthographe.',
            'Faites des singnets des sites importants et utiliser ces liens.',
            'Méfiez-vous des sites avec des extensions de domaine inhabituelles.',
        ],
    },
    {
        title: 'Faux support technique',
        description:
            'Les escrocs font semblant d\'être un support technique et de prétendre que votre appareil est infecté, demandant un accès à distance ou un paiement.',
        detection: [
            'Des appels ou des fenêtres contextuels non sollicités sont suspects.',
            'Les entreprises légitimes ne demandent pas d\'accès à distance de façon inattendue.',
            'Ne donnez jamais d\'informations sur le paiement aux appelants inconnus.',
        ],
    },
    {
        title: 'Loterie factice',
        description:
            'Vous êtes informé·e·s que vous avez gagné une loterie ou un prix, mais que vous devez payer des frais ou fournir des informations personnelles pour la réclamer.',
        detection: [
            'Vous ne pouvez pas gagner à une loterie à laquelle vous n\'avez pas pris part.',
            'Les prix légitimes ne nécessitent jamais de paiement initial.',
            'Recherchez une mauvaise grammaire et des demandes urgentes.',
        ],
    },
    {
        title: 'Sites de téléchargements illégaux',
        description:
            'Les faux sites de téléchargement offrent souvent un logiciel piraté ou craqués, mais distribuent en fait des logiciels malveillants ou des logiciels publicitaires.',
        detection: [
            'Évitez de télécharger des logiciels à partir de sites non officiels ou suspects.',
            'Vérifiez les annonces excessives, les fenêtres contextuelles ou les téléchargements forcés.',
            'Vérifiez les hachages ou les signatures de fichiers lorsque cela est possible.',
            'Préférez les sites de vendeurs open source ou officiels.',
        ],
    },
    {
        title: 'Social Engineering',
        description:
            'Les escroqueries d\'ingénierie sociale manipulent les gens à révéler des informations confidentielles ou à effectuer des actions qui compromettent la sécurité.',
        detection: [
            'Soyez prudent des demandes urgentes d\'informations sensibles.',
            'Vérifiez les identités avant de partager des informations.',
            'Ne partagez pas de mots de passe ou de codes, même si vous connaissez la personne.',
            'Surveillez la manipulation émotionnelle ou les tactiques de pression.',
        ],
    },
    {
        title: 'Extensions de navigateur malveillantes',
        description:
            'Les extensions de navigateur malveillant peuvent prétendre ajouter des fonctionnalités mais voler des données ou injecter des annonces.',
        detection: [
            'Installez les extensions uniquement dans les magasins de navigateurs officiels.',
            'Vérifiez les revues, les autorisations et la réputation de l\'éditeur.',
            'Examiner et supprimer régulièrement les extensions inutilisées.',
            'Méfiez-vous des extensions pour demander des autorisations excessives.',
        ],
    },
    {
        title: 'Pièces jointes malicieuses',
        description:
            'Les escrocs envoient des e-mails avec des pièces jointes contenant des logiciels malveillants, souvent déguisés en factures, curriculum vitae ou documents importants.',
        detection: [
            'N\'ouvrez pas les pièces jointes à partir de sources inconnues ou inattendues.',
            'Vérifiez les extensions de fichiers et numérisez les pièces jointes avec un logiciel antivirus.',
            'Soyez prudent des messages urgents ou alarmants avec des pièces jointes.',
            'Vérifiez avec l\'expéditeur en cas de saisie d\'une pièce jointe.',
        ],
    },
    {
        title: 'Fenêtres surgissantes impromptues',
        description:
            'Les fenêtres contextuelles ou les sites Web peuvent vous inviter à installer de fausses mises à jour, qui installent en fait des logiciels malveillants.',
        detection: [
            'Mettre à jour le logiciel uniquement via les canaux officiels ou les mises à jour intégrées.',
            'Ignorez les invites de mise à jour non sollicitées des sites Web.',
            'Vérifiez les avertissements du navigateur sur les sites trompeurs.',
        ],
    },
    {
        title: 'Usurpation d\'identité',
        description:
            'Les attaquants se font passer pour des contacts ou des organisations de confiance pour vous inciter à partager des informations ou de l\'argent.',
        detection: [
            'Vérifiez les demandes d\'informations sensibles via un canal de communication séparé.',
            'Recherchez des différences subtiles dans les adresses e-mail ou les noms d\'utilisateur.',
            'Être critique quant aux demandes urgentes ou inhabituelles de contacts connus.',
        ],
    },
]

const selectedIndex = ref(0)
const selectedScam = computed(() => scams[selectedIndex.value])
</script>

<style scoped>
.scamcyclopedia-window {
    width: 750px;
    height: 500px;
    overflow: hidden;
}

.window-title-bar {
    background: linear-gradient(to bottom, #000080 0%, #3a6ea5 100%);
    color: #fff;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    border-bottom: 2px solid #808080;
}

.window-title {
    letter-spacing: 1px;
}


.window-content {
    display: flex;
    height: 100%
}

.sidebar {
    width: 180px;
    background: #e0e0e0;
    border-right: 2px solid #808080;
    padding: 0;
}

.sidebar ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.sidebar li {
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: 1px solid #b0b0b0;
    font-size: 15px;
    transition: background 0.1s;
}

.sidebar li.active,
.sidebar li:hover {
    background: #000080;
    color: #fff;
}

.details {
    flex: 1;
    padding: 24px;
    background: #fff;
    overflow-y: auto;
}

.details h2 {
    margin-top: 0;
    color: #000080;
    font-size: 22px;
    margin-bottom: 8px;
}

.details h3 {
    margin-top: 18px;
    color: #3a6ea5;
    font-size: 16px;
}

.details ul {
    margin: 0 0 0 18px;
    padding: 0;
}

.details li {
    margin-bottom: 6px;
    font-size: 15px;
}
</style>